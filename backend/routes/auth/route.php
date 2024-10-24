<?php

$api->group(['prefix' => 'auth', 'namespace' => 'Api\V1\Auth'], function ($api){
    //TODO: Check CORS
    require __DIR__ . '/category.php';
    require __DIR__ . '/product.php';
});


