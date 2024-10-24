<?php

use App\Http\Controllers\API\WarehouseController;
use App\Http\Controllers\API\InventoriesController;
use App\Http\Controllers\API\WarehouseHistoryController;

$router->get('/', function () use ($router) {
    return $router->app->version();
});

$router->group(['prefix' => '/api/'], function ($api) {
    // Public API
    // require __DIR__ . '/public/....php';

    // Authenticated API
    require __DIR__ . '/auth/route.php';

    // Web API
    // require __DIR__ . '/web/....php';
});