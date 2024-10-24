<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateServicesTable extends Migration
{
    public function up()
    {
        Schema::create('services', function (Blueprint $table) {
            $table->bigIncrements("id");
            $table->unsignedBigInteger('category_id');
            $table->string('service_name', 255);
            $table->string('image_url', 255);
            $table->double('price');
            $table->string('slugs', 255)->nullable();
            $table->text('description')->nullable();
            $table->integer('duration')->nullable();
            $table->string('tags', 100)->nullable();
            $table->timestamps();
            $table->softDeletes();
            $table->foreign('category_id')->references('id')->on('categories')->onDelete('cascade');
        });
    }

    public function down()
    {
        Schema::dropIfExists('services');
    }
}
