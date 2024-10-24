<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class CategoriesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $now = Carbon::now();

        // Tạo 3 danh mục "service" với dữ liệu thực tế
        DB::table('categories')->insert([
            ['category_name' => 'Dịch vụ tắm rửa', 'category_type' => 'service', 'slugs' => 'dich-vu-tam-rua', 'description' => 'Dịch vụ tắm rửa cho thú cưng tại cửa hàng hoặc tại nhà', 'created_at' => $now, 'updated_at' => $now],
            ['category_name' => 'Dịch vụ khám chữa bệnh', 'category_type' => 'service', 'slugs' => 'dich-vu-kham-chua-benh', 'description' => 'Khám và điều trị bệnh cho thú cưng', 'created_at' => $now, 'updated_at' => $now],
            ['category_name' => 'Dịch vụ chăm sóc lông', 'category_type' => 'service', 'slugs' => 'dich-vu-cham-soc-long', 'description' => 'Cắt tỉa lông, chải lông và chăm sóc da cho thú cưng', 'created_at' => $now, 'updated_at' => $now],
        ]);

        // Tạo 3 danh mục "product" với dữ liệu thực tế
        DB::table('categories')->insert([
            ['category_name' => 'Thức ăn cho chó', 'category_type' => 'product', 'slugs' => 'thuc-an-cho-cho', 'description' => 'Các loại thức ăn dinh dưỡng dành riêng cho chó', 'created_at' => $now, 'updated_at' => $now],
            ['category_name' => 'Đồ chơi cho mèo', 'category_type' => 'product', 'slugs' => 'do-choi-cho-meo', 'description' => 'Đồ chơi giúp phát triển kỹ năng và giải trí cho mèo', 'created_at' => $now, 'updated_at' => $now],
            ['category_name' => 'Phụ kiện thú cưng', 'category_type' => 'product', 'slugs' => 'phu-kien-thu-cung', 'description' => 'Phụ kiện như dây xích, quần áo, chuồng trại cho thú cưng', 'created_at' => $now, 'updated_at' => $now],
        ]);

        // Tạo 3 danh mục "post" với dữ liệu thực tế
        DB::table('categories')->insert([
            ['category_name' => 'Bài viết về chăm sóc thú cưng', 'category_type' => 'post', 'slugs' => 'bai-viet-cham-soc-thu-cung', 'description' => 'Hướng dẫn và mẹo về cách chăm sóc thú cưng', 'created_at' => $now, 'updated_at' => $now],
            ['category_name' => 'Bài viết về dinh dưỡng', 'category_type' => 'post', 'slugs' => 'bai-viet-dinh-duong', 'description' => 'Thông tin về dinh dưỡng và thực phẩm phù hợp cho thú cưng', 'created_at' => $now, 'updated_at' => $now],
            ['category_name' => 'Bài viết về huấn luyện thú cưng', 'category_type' => 'post', 'slugs' => 'bai-viet-huan-luyen-thu-cung', 'description' => 'Hướng dẫn huấn luyện các thói quen tốt cho thú cưng', 'created_at' => $now, 'updated_at' => $now],
        ]);
    }
}
