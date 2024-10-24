# Sử dụng một image PHP có hỗ trợ Composer
FROM php:8.2-apache

# Cài đặt các extension PHP cần thiết
RUN apt-get update && apt-get install -y \
    libzip-dev \
    unzip \
    && docker-php-ext-configure zip \
    && docker-php-ext-install zip

# Cài đặt PDO và PDO MySQL
RUN docker-php-ext-install pdo pdo_mysql

# Đặt thư mục làm việc
WORKDIR /var/www/html

# Tạo thư mục storage
RUN mkdir -p /var/www/html/storage

# Copy mã nguồn của dịch vụ User vào container
COPY . /var/www/html

# Cài đặt các gói phụ thuộc PHP bằng Composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# Thiết lập quyền truy cập cho thư mục storage
RUN chown -R www-data:www-data /var/www/html/storage

# Thiết lập cấu hình Apache
COPY ./docker/apache/vhost.conf /etc/apache2/sites-available/000-default.conf
RUN a2enmod rewrite

# Mở cổng 80 để Apache lắng nghe
EXPOSE 80

# Thiết lập lệnh khởi chạy khi container được chạy
CMD ["apache2-foreground"]
