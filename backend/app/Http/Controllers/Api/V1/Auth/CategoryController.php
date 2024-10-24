<?php

namespace App\Http\Controllers\Api\V1\Auth;

use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Validation\ValidationException;
use App\Http\Requests\CategoryRequest; // Đảm bảo có request cho category
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Category; // Thay Warehouse bằng Category
use Exception;

/**
 * @OA\Tag(
 *     name="Category",
 *     description="API để quản lý danh mục"
 * )
 */

class CategoryController extends Controller
{
    public function __construct()
    {
        //
    }

    /**
     * @OA\Get(
     *     path="/api/auth/category",
     *     summary="Lấy danh sách tất cả các danh mục",
     *     description="Trả về danh sách tất cả các danh mục trong hệ thống.",
     *     tags={"Category"},
     *     operationId="getAllCategories",
     *     @OA\Response(
     *         response=200,
     *         description="Lấy danh sách danh mục thành công."
     *     ),
     *     @OA\Response(
     *         response=500,
     *         description="Lỗi máy chủ nội bộ."
     *     )
     * )
     */

    public function index()
    {
        try {
            $categories = Category::all(); // Thay Warehouse bằng Category
            return $this->successResponse($categories);
        } catch (Exception $e) {
            return $this->errorResponse($e->getMessage(), 500);
        }
    }

    /**
     * @OA\Get(
     *     path="/api/auth/category/{id}",
     *     tags={"Category"},
     *     summary="Lấy danh mục theo ID",
     *     operationId="getOneCategory",
     *     @OA\Parameter(
     *         name="id",
     *         in="path",
     *         required=true,
     *         description="ID của danh mục",
     *         @OA\Schema(
     *             type="integer"
     *         )
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="Lấy thành công danh mục"
     *     ),
     *     @OA\Response(
     *         response=404,
     *         description="Không tìm thấy danh mục với ID"
     *     )
     * )
     */

    public function show($id)
    {
        try {
            $category = Category::findOrFail($id); // Thay Warehouse bằng Category
            return $this->successResponse($category);
        } catch (ModelNotFoundException $e) {
            return $this->errorResponse("Không tìm thấy danh mục với ID: $id", 404);
        } catch (Exception $e) {
            return $this->errorResponse($e->getMessage(), 500);
        }
    }

    /**
     * @OA\Post(
     *     path="/api/auth/category",
     *     tags={"Category"},
     *     summary="Tạo một danh mục mới",
     *     description="Thêm mới một danh mục",
     *     operationId="addCategory",
     *     @OA\RequestBody(
     *         required=true,
     *         @OA\JsonContent(
     *             required={"category_name", "category_type"},
     *             @OA\Property(property="category_name", type="string", example="Danh mục A"),
     *             @OA\Property(property="category_type", type="string", enum={"product", "service", "post"}, example="product"),
     *             @OA\Property(property="slugs", type="string", example="danh-muc-a"),
     *             @OA\Property(property="description", type="string", example="Mô tả về danh mục A"),
     *         )
     *     ),
     *     @OA\Response(
     *         response=201,
     *         description="Danh mục được tạo thành công"
     *     ),
     *     @OA\Response(
     *         response=400,
     *         description="Dữ liệu đầu vào không hợp lệ"
     *     ),
     *     @OA\Response(
     *         response=500,
     *         description="Lỗi máy chủ nội bộ"
     *     )
     * )
     */

    public function store(Request $request)
    {
        try {
            $categoryRequest = new CategoryRequest($request->all());
            $validatedData = $categoryRequest->validate();
            $category = Category::create($validatedData); // Thay Warehouse bằng Category
            return $this->successResponse($category, 201);
        } catch (ValidationException $e) {
            return $this->errorResponse($e->validator->errors()->all(), 400);
        } catch (Exception $e) {
            return $this->errorResponse($e->getMessage(), 500);
        }
    }

    /**
     * @OA\Put(
     *     path="/api/auth/category/{id}",
     *     tags={"Category"},
     *     summary="Cập nhật thông tin danh mục",
     *     description="Cập nhật thông tin của danh mục bằng ID",
     *     @OA\Parameter(
     *         name="id",
     *         in="path",
     *         required=true,
     *         description="ID của danh mục cần cập nhật",
     *         @OA\Schema(type="integer")
     *     ),
     *     @OA\RequestBody(
     *         required=true,
     *         @OA\JsonContent(
     *             required={"category_name", "category_type"},
     *             @OA\Property(property="category_name", type="string", example="Danh mục A"),
     *             @OA\Property(property="category_type", type="string", enum={"product", "service", "post"}, example="product"),
     *             @OA\Property(property="slugs", type="string", example="danh-muc-a"),
     *             @OA\Property(property="description", type="string", example="Mô tả về danh mục A"),
     *         )
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="Cập nhật danh mục thành công"
     *     ),
     *     @OA\Response(
     *         response=400,
     *         description="Yêu cầu không hợp lệ"
     *     ),
     *     @OA\Response(
     *         response=404,
     *         description="Không tìm thấy danh mục với ID"
     *     ),
     *     @OA\Response(
     *         response=500,
     *         description="Lỗi máy chủ"
     *     )
     * )
     */

    public function update(Request $request, $id)
    {
        try {
            $category = Category::findOrFail($id); // Thay Warehouse bằng Category
            $categoryRequest = new CategoryRequest($request->all());
            $validatedData = $categoryRequest->validate();
            $category->update($validatedData);
            return $this->successResponse($category);
        } catch (ModelNotFoundException  $e) {
            return $this->errorResponse("Không tìm thấy danh mục với ID: $id", 404);
        } catch (Exception $e) {
            return $this->errorResponse($e->getMessage(), 500);
        }
    }

    /**
     * @OA\Delete(
     *     path="/api/auth/category/{id}",
     *     summary="Xóa danh mục",
     *     description="Xóa một danh mục theo ID",
     *     operationId="deleteCategory",
     *     tags={"Category"},
     *     @OA\Parameter(
     *         name="id",
     *         in="path",
     *         description="ID của danh mục cần xóa",
     *         required=true,
     *         @OA\Schema(
     *             type="integer"
     *         )
     *     ),
     *     @OA\Response(
     *         response=204,
     *         description="Xóa danh mục thành công"
     *     ),
     *     @OA\Response(
     *         response=404,
     *         description="Không tìm thấy danh mục với ID"
     *     ),
     *     @OA\Response(
     *         response=500,
     *         description="Đã xảy ra lỗi trong quá trình xóa danh mục"
     *     ),
     * )
     */

    public function destroy($id)
    {
        try {
            $category = Category::findOrFail($id); // Thay Warehouse bằng Category
            $category->delete();
            return $this->successResponse(null, 204);
        } catch (ModelNotFoundException $e) {
            return $this->errorResponse("Không tìm thấy danh mục với ID: $id", 404);
        } catch (Exception $e) {
            return $this->errorResponse($e->getMessage(), 500);
        }
    }


    /**
     * @OA\Delete(
     *     path="/api/auth/category/{id}/force",
     *     summary="Xóa vĩnh viễn danh mục",
     *     description="Xóa một danh mục theo ID một cách vĩnh viễn",
     *     operationId="forceDeleteCategory",
     *     tags={"Category"},
     *     @OA\Parameter(
     *         name="id",
     *         in="path",
     *         required=true,
     *         description="ID của danh mục cần xóa",
     *         @OA\Schema(
     *             type="integer"
     *         )
     *     ),
     *     @OA\Response(
     *         response=204,
     *         description="Xóa danh mục thành công"
     *     ),
     *     @OA\Response(
     *         response=404,
     *         description="Không tìm thấy danh mục với ID"
     *     ),
     *     @OA\Response(
     *         response=500,
     *         description="Đã xảy ra lỗi trong quá trình xóa danh mục"
     *     ),
     * )
     */

    public function forceDestroy($id)
    {
        try {
            $category = Category::withTrashed()->findOrFail($id);
            $category->forceDelete();
            return $this->successResponse(null, 204);
        } catch (ModelNotFoundException $e) {
            return $this->errorResponse("Không tìm thấy danh mục với ID: $id", 404);
        } catch (Exception $e) {
            return $this->errorResponse($e->getMessage(), 500);
        }
    }
}
