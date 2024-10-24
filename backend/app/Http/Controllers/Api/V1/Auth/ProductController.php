<?php

namespace App\Http\Controllers\Api\V1\Auth;

use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;
use App\Http\Requests\ProductRequest;
use App\Http\Controllers\Controller;
use App\Models\Product;
use Exception;

/**
 * @OA\Tag(
 *     name="Product",
 *     description="API để quản lý sản phẩm"
 * )
 */

class ProductController extends Controller
{
    public function __construct()
    {
        //
    }

    /**
     * @OA\Get(
     *     path="/api/auth/product",
     *     summary="Lấy danh sách sản phẩm",
     *     description="Trả về danh sách tất cả sản phẩm",
     *     operationId="getProducts",
     *     tags={"Product"},
     *     @OA\Response(
     *         response=200,
     *         description="Danh sách sản phẩm",
     *     ),
     *     @OA\Response(
     *         response=500,
     *         description="Đã xảy ra lỗi trong quá trình lấy danh sách sản phẩm"
     *     )
     * )
     */
    public function index()
    {
        try {
            $products = Product::all();
            return $this->successResponse($products);
        } catch (Exception $e) {
            return $this->errorResponse($e->getMessage(), 500);
        }
    }

    /**
     * @OA\Get(
     *     path="/api/auth/product/{id}",
     *     summary="Lấy thông tin sản phẩm theo ID",
     *     description="Trả về thông tin chi tiết của một sản phẩm",
     *     operationId="getProductById",
     *     tags={"Product"},
     *     @OA\Parameter(
     *         name="id",
     *         in="path",
     *         required=true,
     *         description="ID của sản phẩm",
     *         @OA\Schema(type="integer")
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="Thông tin sản phẩm",
     *     ),
     *     @OA\Response(
     *         response=404,
     *         description="Không tìm thấy sản phẩm với ID"
     *     ),
     *     @OA\Response(
     *         response=500,
     *         description="Đã xảy ra lỗi trong quá trình lấy thông tin sản phẩm"
     *     )
     * )
     */
    public function show($id)
    {
        try {
            $product = Product::findOrFail($id);
            return $this->successResponse($product);
        } catch (ModelNotFoundException $e) {
            return $this->errorResponse("Không tìm thấy sản phẩm với ID: $id", 404);
        } catch (Exception $e) {
            return $this->errorResponse($e->getMessage(), 500);
        }
    }

    /**
     * @OA\Post(
     *     path="/api/auth/product",
     *     summary="Tạo mới sản phẩm",
     *     description="Thêm một sản phẩm mới",
     *     operationId="createProduct",
     *     tags={"Product"},
     *     @OA\RequestBody(
     *         required=true,
     *         @OA\JsonContent(
     *             required={"category_id", "product_sku", "product_name", "price", "quantity_in_stock", "reorder_level"},
     *             @OA\Property(property="category_id", type="integer", description="ID danh mục sản phẩm", example=1),
     *             @OA\Property(property="product_sku", type="string", description="Mã sản phẩm", example="DOGFOOD001"),
     *             @OA\Property(property="product_name", type="string", description="Tên sản phẩm", example="Thức ăn cho chó Royal Canin"),
     *             @OA\Property(property="image_url", type="string", description="URL hình ảnh", example="https://example.com/images/dog_food_royal_canin.jpg"),
     *             @OA\Property(property="slugs", type="string", description="Slugs cho sản phẩm", example="thuc-an-cho-royal-canin"),
     *             @OA\Property(property="price", type="number", format="float", description="Giá sản phẩm", example=500000),
     *             @OA\Property(property="quantity_in_stock", type="integer", description="Số lượng sản phẩm trong kho", example=100),
     *             @OA\Property(property="reorder_level", type="integer", description="Mức đặt hàng lại", example=20),
     *             @OA\Property(property="description", type="string", description="Mô tả sản phẩm", example="Thức ăn cho chó Royal Canin chuyên biệt cho từng giống chó."),
     *             @OA\Property(property="tags", type="string", description="Thẻ sản phẩm", example="thức ăn, chó, Royal Canin"),
     *         )
     *     ),
     *     @OA\Response(
     *         response=201,
     *         description="Sản phẩm đã được tạo",
     *     ),
     *     @OA\Response(
     *         response=400,
     *         description="Dữ liệu không hợp lệ"
     *     ),
     *     @OA\Response(
     *         response=500,
     *         description="Đã xảy ra lỗi trong quá trình tạo sản phẩm"
     *     )
     * )
     */



    public function store(Request $request)
    {
        try {
            $productRequest = new ProductRequest($request->all());
            $validatedData = $productRequest->validate();
            $product = Product::create($validatedData);
            return $this->successResponse($product, 201);
        } catch (ValidationException $e) {
            return $this->errorResponse($e->validator->errors()->all(), 400);
        } catch (Exception $e) {
            return $this->errorResponse($e->getMessage(), 500);
        }
    }

    /**
     * @OA\Put(
     *     path="/api/auth/product/{id}",
     *     summary="Cập nhật sản phẩm",
     *     description="Cập nhật thông tin của một sản phẩm",
     *     operationId="updateProduct",
     *     tags={"Product"},
     *     @OA\Parameter(
     *         name="id",
     *         in="path",
     *         description="ID của sản phẩm cần cập nhật",
     *         required=true,
     *         @OA\Schema(type="integer", example=1)
     *     ),
     *     @OA\RequestBody(
     *         required=true,
     *         @OA\JsonContent(
     *             required={"category_id", "product_sku", "product_name", "price", "quantity_in_stock", "reorder_level"},
     *             @OA\Property(property="category_id", type="integer", description="ID danh mục sản phẩm", example=1),
     *             @OA\Property(property="product_sku", type="string", description="Mã sản phẩm", example="DOGFOOD001"),
     *             @OA\Property(property="product_name", type="string", description="Tên sản phẩm", example="Thức ăn cho chó Royal Canin"),
     *             @OA\Property(property="image_url", type="string", description="URL hình ảnh", example="https://example.com/images/dog_food_royal_canin.jpg"),
     *             @OA\Property(property="slugs", type="string", description="Slugs cho sản phẩm", example="thuc-an-cho-royal-canin"),
     *             @OA\Property(property="price", type="number", format="float", description="Giá sản phẩm", example=500000),
     *             @OA\Property(property="quantity_in_stock", type="integer", description="Số lượng sản phẩm trong kho", example=100),
     *             @OA\Property(property="reorder_level", type="integer", description="Mức đặt hàng lại", example=20),
     *             @OA\Property(property="description", type="string", description="Mô tả sản phẩm", example="Thức ăn cho chó Royal Canin chuyên biệt cho từng giống chó."),
     *             @OA\Property(property="tags", type="string", description="Thẻ sản phẩm", example="thức ăn, chó, Royal Canin")
     *         )
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="Sản phẩm đã được cập nhật thành công",
     *     ),
     *     @OA\Response(
     *         response=404,
     *         description="Không tìm thấy sản phẩm với ID cung cấp"
     *     ),
     *     @OA\Response(
     *         response=400,
     *         description="Dữ liệu không hợp lệ"
     *     ),
     *     @OA\Response(
     *         response=500,
     *         description="Đã xảy ra lỗi trong quá trình cập nhật sản phẩm"
     *     )
     * )
     */

    public function update(Request $request, $id)
    {
        try {
            $product = Product::findOrFail($id);
            $productRequest = new ProductRequest($request->all());
            $validatedData = $productRequest->validate();
            $product->update($validatedData);
            return $this->successResponse($product);
        } catch (ModelNotFoundException $e) {
            return $this->errorResponse("Không tìm thấy sản phẩm với ID: $id", 404);
        } catch (ValidationException $e) {
            return $this->errorResponse($e->validator->errors()->all(), 400);
        } catch (Exception $e) {
            return $this->errorResponse($e->getMessage(), 500);
        }
    }

    /**
     * @OA\Delete(
     *     path="/api/auth/product/{id}",
     *     summary="Xóa sản phẩm",
     *     description="Xóa một sản phẩm theo ID",
     *     operationId="deleteProduct",
     *     tags={"Product"},
     *     @OA\Parameter(
     *         name="id",
     *         in="path",
     *         required=true,
     *         description="ID của sản phẩm",
     *         @OA\Schema(type="integer")
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="Sản phẩm đã được xóa",
     *     ),
     *     @OA\Response(
     *         response=404,
     *         description="Không tìm thấy sản phẩm với ID"
     *     ),
     *     @OA\Response(
     *         response=500,
     *         description="Đã xảy ra lỗi trong quá trình xóa sản phẩm"
     *     )
     * )
     */
    public function destroy($id)
    {
        try {
            $product = Product::findOrFail($id);
            $product->delete();
            return $this->successResponse(['message' => 'Sản phẩm đã được xóa']);
        } catch (ModelNotFoundException $e) {
            return $this->errorResponse("Không tìm thấy sản phẩm với ID: $id", 404);
        } catch (Exception $e) {
            return $this->errorResponse($e->getMessage(), 500);
        }
    }

    /**
     * @OA\Delete(
     *     path="/api/auth/product/{id}/force",
     *     summary="Xóa vĩnh viễn sản phẩm",
     *     description="Xóa một sản phẩm theo ID một cách vĩnh viễn",
     *     operationId="forceDeleteProduct",
     *     tags={"Product"},
     *     @OA\Parameter(
     *         name="id",
     *         in="path",
     *         required=true,
     *         description="ID của sản phẩm cần xóa",
     *         @OA\Schema(
     *             type="integer"
     *         )
     *     ),
     *     @OA\Response(
     *         response=204,
     *         description="Xóa sản phẩm thành công"
     *     ),
     *     @OA\Response(
     *         response=404,
     *         description="Không tìm thấy sản phẩm với ID"
     *     ),
     *     @OA\Response(
     *         response=500,
     *         description="Đã xảy ra lỗi trong quá trình xóa sản phẩm"
     *     ),
     * )
     */

    public function forceDestroy($id)
    {
        try {
            $product = Product::withTrashed()->findOrFail($id);
            $product->forceDelete();
            return $this->successResponse(null, 204);
        } catch (ModelNotFoundException $e) {
            return $this->errorResponse("Không tìm thấy sản phẩm với ID: $id", 404);
        } catch (Exception $e) {
            return $this->errorResponse($e->getMessage(), 500);
        }
    }
}
