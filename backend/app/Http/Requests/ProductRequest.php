<?php

namespace App\Http\Requests;

use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\ValidationException;

class ProductRequest
{
    protected $data;

    public function __construct(array $data)
    {
        $this->data = $data;
    }

    public function validate()
    {
        $validator = Validator::make($this->data, [
            'category_id' => 'required|exists:categories,id',
            'product_sku' => 'required|string|max:50|unique:products,product_sku,',
            'product_name' => 'required|string|max:255|unique:products,product_name,',
            'image_url' => 'nullable|string|max:255',
            'slugs' => 'nullable|string|max:255',
            'price' => 'required|numeric|min:0',
            'quantity_in_stock' => 'required|integer|min:0',
            'reorder_level' => 'required|integer|min:0',
            'description' => 'nullable|string',
            'tags' => 'nullable|string|max:100',
        ], [
            'category_id.required' => 'ID danh mục là bắt buộc',
            'category_id.exists' => 'Danh mục không tồn tại',
            'product_sku.required' => 'Mã sản phẩm là bắt buộc',
            'product_sku.string' => 'Mã sản phẩm phải là dạng chuỗi',
            'product_sku.max' => 'Mã sản phẩm không được vượt quá 50 ký tự',
            'product_sku.unique' => 'Mã sản phẩm đã tồn tại',
            'product_name.required' => 'Tên sản phẩm là bắt buộc',
            'product_name.string' => 'Tên sản phẩm phải là dạng chuỗi',
            'product_name.max' => 'Tên sản phẩm không được vượt quá 255 ký tự',
            'product_name.unique' => 'Tên sản phẩm đã tồn tại',
            'image_url.string' => 'URL hình ảnh phải là dạng chuỗi',
            'image_url.max' => 'URL hình ảnh không được vượt quá 255 ký tự',
            'slugs.string' => 'Slugs phải là dạng chuỗi',
            'slugs.max' => 'Slugs không được vượt quá 255 ký tự',
            'price.required' => 'Giá sản phẩm là bắt buộc',
            'price.numeric' => 'Giá sản phẩm phải là kiểu số',
            'price.min' => 'Giá sản phẩm không được nhỏ hơn 0',
            'quantity_in_stock.required' => 'Số lượng tồn kho là bắt buộc',
            'quantity_in_stock.integer' => 'Số lượng tồn kho phải là kiểu số nguyên',
            'quantity_in_stock.min' => 'Số lượng tồn kho không được nhỏ hơn 0',
            'reorder_level.required' => 'Mức đặt hàng lại là bắt buộc',
            'reorder_level.integer' => 'Mức đặt hàng lại phải là kiểu số nguyên',
            'reorder_level.min' => 'Mức đặt hàng lại không được nhỏ hơn 0',
            'description.string' => 'Mô tả phải là dạng chuỗi',
            'tags.string' => 'Thẻ sản phẩm phải là dạng chuỗi',
            'tags.max' => 'Thẻ sản phẩm không được vượt quá 100 ký tự',
        ]);

        if ($validator->fails()) {
            throw new ValidationException($validator);
        }

        return $validator->validated();
    }
}
