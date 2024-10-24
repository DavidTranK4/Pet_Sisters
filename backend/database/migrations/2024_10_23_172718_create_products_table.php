<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProductsTable extends Migration
{
    public function up()
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id(); // Tự động tạo cột 'id' là khóa chính (PK)
            $table->unsignedBigInteger('category_id'); // Khóa ngoại (FK) tới bảng categories
            $table->string('product_sku', 50); // Mã sản phẩm
            $table->string('product_name', 255); // Tên sản phẩm
            $table->string('image_url', 255); // URL hình ảnh
            $table->string('slugs', 255); // Đường dẫn thân thiện
            $table->double('price'); // Giá sản phẩm
            $table->integer('quantity_in_stock'); // Số lượng tồn kho
            $table->integer('reorder_level'); // Mức đặt hàng lại
            $table->text('description')->nullable(); // Mô tả sản phẩm, cho phép null
            $table->string('tags', 100)->nullable(); // Thẻ sản phẩm, cho phép null
            $table->timestamps(); // Cột 'created_at' và 'updated_at'
            $table->softDeletes(); // Cột 'deleted_at' cho soft delete
            $table->foreign('category_id')->references('id')->on('categories')->onDelete('cascade');
        });
    }
    
    public function down()
    {
        Schema::dropIfExists('products');
    }
}
