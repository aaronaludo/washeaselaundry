<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\Web\Customer\CustomerAuthController;

use App\Http\Controllers\Web\Rider\RiderAuthController;

use App\Http\Controllers\Web\SuperAdmin\SuperAdminAuthController;

use App\Http\Controllers\Web\Staff\StaffAuthController;

use App\Http\Controllers\Web\ShopAdmin\ShopAdminAuthController;

Route::get('/', [CustomerAuthController::class, 'index'])->name('customers.index');

Route::prefix('riders')->group(function () {
    Route::get('/login', [RiderAuthController::class, 'login'])->name('riders.login');
});

Route::prefix('staffs')->group(function () {
    Route::get('/login', [StaffAuthController::class, 'login'])->name('staffs.login');
});

Route::prefix('shop_admins')->group(function () {
    Route::get('/login', [ShopAdminAuthController::class, 'login'])->name('shop_admins.login');
});

Route::prefix('super_admins')->group(function () {
    Route::get('/login', [SuperAdminAuthController::class, 'login'])->name('super_admins.login');
});