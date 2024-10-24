<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class ProductsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $now = Carbon::now();

        // Tạo 10 sản phẩm mẫu
        DB::table('products')->insert([
            [
                'category_id' => 1, // Thức ăn cho chó
                'product_sku' => 'DOGFOOD001',
                'product_name' => 'Thức ăn cho chó Royal Canin',
                'image_url' => 'https://example.com/images/dog_food_royal_canin.jpg',
                'slugs' => 'thuc-an-cho-royal-canin',
                'price' => 500000,
                'quantity_in_stock' => 100,
                'reorder_level' => 20,
                'description' => 'Thức ăn cho chó Royal Canin chuyên biệt cho từng giống chó.',
                'tags' => 'thức ăn, chó, Royal Canin',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'category_id' => 1, // Thức ăn cho chó
                'product_sku' => 'DOGFOOD002',
                'product_name' => 'Thức ăn cho chó Pedigree',
                'image_url' => 'https://example.com/images/dog_food_pedigree.jpg',
                'slugs' => 'thuc-an-cho-pedigree',
                'price' => 300000,
                'quantity_in_stock' => 150,
                'reorder_level' => 30,
                'description' => 'Thức ăn cho chó Pedigree dinh dưỡng và ngon miệng.',
                'tags' => 'thức ăn, chó, Pedigree',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'category_id' => 2, // Đồ chơi cho mèo
                'product_sku' => 'CATTOY001',
                'product_name' => 'Đồ chơi mèo chuột giả',
                'image_url' => 'https://example.com/images/cat_toy_mouse.jpg',
                'slugs' => 'do-choi-meo-chuot-gia',
                'price' => 100000,
                'quantity_in_stock' => 200,
                'reorder_level' => 50,
                'description' => 'Đồ chơi chuột giả giúp mèo vui chơi và tập luyện.',
                'tags' => 'đồ chơi, mèo',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'category_id' => 2, // Đồ chơi cho mèo
                'product_sku' => 'CATTOY002',
                'product_name' => 'Đồ chơi mèo bóng nỉ',
                'image_url' => 'https://example.com/images/cat_toy_ball.jpg',
                'slugs' => 'do-choi-meo-bong-ni',
                'price' => 80000,
                'quantity_in_stock' => 250,
                'reorder_level' => 60,
                'description' => 'Bóng nỉ cho mèo vui chơi, giúp phát triển kỹ năng.',
                'tags' => 'đồ chơi, mèo',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'category_id' => 3, // Phụ kiện thú cưng
                'product_sku' => 'PETACCESSORY001',
                'product_name' => 'Dây xích cho chó',
                'image_url' => 'https://example.com/images/dog_leash.jpg',
                'slugs' => 'day-xich-cho-cho',
                'price' => 150000,
                'quantity_in_stock' => 80,
                'reorder_level' => 20,
                'description' => 'Dây xích chắc chắn cho chó, giúp dắt chó an toàn.',
                'tags' => 'phụ kiện, chó',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'category_id' => 3, // Phụ kiện thú cưng
                'product_sku' => 'PETACCESSORY002',
                'product_name' => 'Quần áo cho mèo',
                'image_url' => 'https://example.com/images/cat_clothes.jpg',
                'slugs' => 'quan-ao-cho-meo',
                'price' => 250000,
                'quantity_in_stock' => 50,
                'reorder_level' => 10,
                'description' => 'Quần áo thời trang cho mèo, giúp mèo thoải mái hơn.',
                'tags' => 'phụ kiện, mèo, thời trang',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'category_id' => 1, // Thức ăn cho chó
                'product_sku' => 'DOGFOOD003',
                'product_name' => 'Thức ăn cho chó Merrick',
                'image_url' => 'https://example.com/images/dog_food_merrick.jpg',
                'slugs' => 'thuc-an-cho-merrick',
                'price' => 700000,
                'quantity_in_stock' => 90,
                'reorder_level' => 15,
                'description' => 'Thức ăn cho chó Merrick với công thức tự nhiên.',
                'tags' => 'thức ăn, chó, Merrick',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'category_id' => 2, // Đồ chơi cho mèo
                'product_sku' => 'CATTOY003',
                'product_name' => 'Đồ chơi mèo cát',
                'image_url' => 'https://example.com/images/cat_toy_cat.jpg',
                'slugs' => 'do-choi-meo-cat',
                'price' => 120000,
                'quantity_in_stock' => 300,
                'reorder_level' => 75,
                'description' => 'Đồ chơi mèo hình cát, giúp mèo giải trí.',
                'tags' => 'đồ chơi, mèo',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'category_id' => 3, // Phụ kiện thú cưng
                'product_sku' => 'PETACCESSORY003',
                'product_name' => 'Chuồng cho thú cưng',
                'image_url' => 'https://example.com/images/pet_cage.jpg',
                'slugs' => 'chuong-cho-thu-cung',
                'price' => 800000,
                'quantity_in_stock' => 30,
                'reorder_level' => 5,
                'description' => 'Chuồng cho thú cưng, tiện lợi và an toàn.',
                'tags' => 'phụ kiện, thú cưng',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'category_id' => 1, // Thức ăn cho chó
                'product_sku' => 'DOGFOOD004',
                'product_name' => 'Thức ăn cho chó Nutro',
                'image_url' => 'https://example.com/images/dog_food_nutro.jpg',
                'slugs' => 'thuc-an-cho-nutro',
                'price' => 600000,
                'quantity_in_stock' => 70,
                'reorder_level' => 10,
                'description' => 'Thức ăn cho chó Nutro, giàu chất dinh dưỡng.',
                'tags' => 'thức ăn, chó, Nutro',
                'created_at' => $now,
                'updated_at' => $now,
            ],
        ]);
    }
}
