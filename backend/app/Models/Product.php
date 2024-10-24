<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Product extends Model
{
    use SoftDeletes; // Để hỗ trợ xóa mềm (soft delete)

    protected $table = 'products'; // Tên bảng trong cơ sở dữ liệu

    // Các cột được phép thêm hoặc chỉnh sửa
    protected $fillable = [
        'category_id',
        'product_sku',
        'product_name',
        'image_url',
        'slugs',
        'price',
        'quantity_in_stock',
        'reorder_level',
        'description',
        'tags',
    ];

    // Các cột được xử lý là ngày tháng
    protected $dates = ['deleted_at'];

    /**
     * Mối quan hệ giữa Product và Category (một sản phẩm thuộc về một danh mục)
     */
    public function category()
    {
        return $this->belongsTo(Category::class, 'category_id');
    }
}
