<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Category extends Model
{
    use SoftDeletes;

    // Tên bảng
    protected $table = 'categories';

    // Các trường có thể được gán giá trị một cách hàng loạt
    protected $fillable = [
        'category_name', 'category_type', 'slugs', 'description',
    ];

    // Các trường sẽ được tự động quản lý thời gian
    protected $dates = ['deleted_at'];
}
