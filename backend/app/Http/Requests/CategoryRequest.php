<?php

namespace App\Http\Requests;

use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\ValidationException;

class CategoryRequest
{
    protected $data;

    public function __construct(array $data)
    {
        $this->data = $data;
    }

    public function validate()
    {
        $validator = Validator::make($this->data, [
            'category_name' => 'required|string|max:255|unique:categories,category_name',
            'category_type' => 'required|in:product,service,post',
            'slugs' => 'nullable|string|max:255',
            'description' => 'nullable|string',
        ], [
            'category_name.required' => 'Tên danh mục là bắt buộc',
            'category_name.string' => 'Tên danh mục phải là dạng chuỗi',
            'category_name.max' => 'Tên danh mục không được vượt quá 255 ký tự',
            'category_name.unique' => 'Tên danh mục đã tồn tại',
            'category_type.required' => 'Loại danh mục là bắt buộc',
            'category_type.in' => 'Loại danh mục phải là một trong các giá trị: product, service, post',
            'slugs.string' => 'Slugs phải là dạng chuỗi',
            'slugs.max' => 'Slugs không được vượt quá 255 ký tự',
            'description.string' => 'Mô tả phải là dạng chuỗi',
        ]);

        if ($validator->fails()) {
            throw new ValidationException($validator);
        }

        return $validator->validated();
    }
}
