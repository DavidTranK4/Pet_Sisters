<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Service extends Model
{
    use SoftDeletes; // Sử dụng trait để hỗ trợ soft deletes
    protected $table = 'services';
    protected $fillable = [
        'category_id',
        'service_name',
        'image_url',
        'price',
        'slugs',
        'description',
        'duration',
        'tags',
    ];

    // Các thuộc tính tự động chuyển đổi sang kiểu dữ liệu tương ứng
    protected $casts = [
        'price' => 'double',
        'duration' => 'integer',
    ];

    // Định nghĩa quan hệ với model Category
    public function category()
    {
        return $this->belongsTo(Category::class);
    }
}
