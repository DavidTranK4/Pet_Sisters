<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class ServiceTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $now = Carbon::now();

        // Lấy danh sách các danh mục bằng slugs (chúng ta giả sử các danh mục đã được tạo)
        $categories = DB::table('categories')->whereIn('slugs', [
            'dich-vu-tam-rua', 
            'dich-vu-kham-chua-benh', 
            'dich-vu-cham-soc-long'
        ])->pluck('id', 'slugs');

        // Tạo 5 dịch vụ với dữ liệu thực tế
        DB::table('services')->insert([
            [
                'category_id' => $categories['dich-vu-tam-rua'],
                'service_name' => 'Tắm rửa cho chó nhỏ',
                'image_url' => 'https://example.com/images/dich-vu-tam-rua-cho-nho.jpg',
                'price' => 150000,
                'slugs' => 'tam-rua-cho-nho',
                'description' => 'Dịch vụ tắm rửa cho chó nhỏ dưới 10kg với các sản phẩm an toàn cho da.',
                'duration' => 30, // thời gian thực hiện dịch vụ là 30 phút
                'tags' => 'tắm rửa, chó nhỏ, chăm sóc da',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'category_id' => $categories['dich-vu-tam-rua'],
                'service_name' => 'Tắm rửa cho mèo',
                'image_url' => 'https://example.com/images/dich-vu-tam-rua-meo.jpg',
                'price' => 120000,
                'slugs' => 'tam-rua-cho-meo',
                'description' => 'Tắm rửa cho mèo với dầu gội đặc biệt không gây kích ứng da.',
                'duration' => 25,
                'tags' => 'tắm rửa, mèo, chăm sóc da',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'category_id' => $categories['dich-vu-kham-chua-benh'],
                'service_name' => 'Khám tổng quát cho chó mèo',
                'image_url' => 'https://example.com/images/kham-tong-quat.jpg',
                'price' => 300000,
                'slugs' => 'kham-tong-quat-cho-cho-meo',
                'description' => 'Dịch vụ khám sức khỏe tổng quát cho chó và mèo với bác sĩ thú y chuyên nghiệp.',
                'duration' => 45,
                'tags' => 'khám bệnh, chó, mèo, tổng quát',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'category_id' => $categories['dich-vu-kham-chua-benh'],
                'service_name' => 'Tiêm phòng cho thú cưng',
                'image_url' => 'https://example.com/images/tiem-phong-thu-cung.jpg',
                'price' => 50000,
                'slugs' => 'tiem-phong-thu-cung',
                'description' => 'Dịch vụ tiêm phòng các loại bệnh cho thú cưng (bao gồm bệnh dại, care, parvo).',
                'duration' => 15,
                'tags' => 'tiêm phòng, thú cưng, phòng bệnh',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'category_id' => $categories['dich-vu-cham-soc-long'],
                'service_name' => 'Cắt tỉa lông chó',
                'image_url' => 'https://example.com/images/cat-tia-long-cho.jpg',
                'price' => 200000,
                'slugs' => 'cat-tia-long-cho',
                'description' => 'Dịch vụ cắt tỉa lông cho chó với các kiểu dáng đẹp, chuyên nghiệp.',
                'duration' => 60,
                'tags' => 'cắt lông, chăm sóc lông, chó',
                'created_at' => $now,
                'updated_at' => $now,
            ],
        ]);
    }
}
