<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\Web\Customer\CustomerAuthController;
use App\Http\Controllers\Web\Customer\CustomerAccountController;
use App\Http\Controllers\Web\Customer\CustomerDashboardController;

use App\Http\Controllers\Web\Rider\RiderAuthController;
use App\Http\Controllers\Web\Rider\RiderAccountController;
use App\Http\Controllers\Web\Rider\RiderDashboardController;
use App\Http\Controllers\Web\Rider\RiderRideHistoryController;

use App\Http\Controllers\Web\SuperAdmin\SuperAdminAuthController;
use App\Http\Controllers\Web\SuperAdmin\SuperAdminAccountController;
use App\Http\Controllers\Web\SuperAdmin\SuperAdminDashboardController;
use App\Http\Controllers\Web\SuperAdmin\SuperAdminShopAdminController;
use App\Http\Controllers\Web\SuperAdmin\SuperAdminCustomerController;
use App\Http\Controllers\Web\SuperAdmin\SuperAdminStaffController;
use App\Http\Controllers\Web\SuperAdmin\SuperAdminRiderController;
use App\Http\Controllers\Web\SuperAdmin\SuperAdminSuperAdminController;

use App\Http\Controllers\Web\Staff\StaffAuthController;
use App\Http\Controllers\Web\Staff\StaffAccountController;
use App\Http\Controllers\Web\Staff\StaffDashboardController;
use App\Http\Controllers\Web\Staff\StaffTransactionController;
use App\Http\Controllers\Web\Staff\StaffInventoryController;
use App\Http\Controllers\Web\Staff\StaffSellingItemController;

use App\Http\Controllers\Web\ShopAdmin\ShopAdminAuthController;
use App\Http\Controllers\Web\ShopAdmin\ShopAdminAccountController;
use App\Http\Controllers\Web\ShopAdmin\ShopAdminDashboardController;

use App\Http\Controllers\Web\ShopAdmin\ShopAdminRiderController;
use App\Http\Controllers\Web\ShopAdmin\ShopAdminStaffController;
use App\Http\Controllers\Web\ShopAdmin\ShopAdminMachineController;
use App\Http\Controllers\Web\ShopAdmin\ShopAdminLaundryServiceController;
use App\Http\Controllers\Web\ShopAdmin\ShopAdminAdditionalLaundryServiceController;

Route::prefix('customers')->group(function () {
    Route::get('/login', [CustomerAuthController::class, 'login'])->name('customers.login');
    Route::get('/register', [CustomerAuthController::class, 'register'])->name('customers.register');
    Route::post('/login', [CustomerAuthController::class, 'processLogin'])->name('customers.process.login');
    Route::post('/register', [CustomerAuthController::class, 'processRegister'])->name('customers.process.register');

    Route::middleware(['auth:customer'])->group(function () {
        Route::get('/dashboard', [CustomerDashboardController::class, 'index'])->name('customers.dashboard.index');
        Route::get('/edit-profile', [CustomerAccountController::class, 'editProfile'])->name('customers.account.edit-profile');
        Route::get('/change-password', [CustomerAccountController::class, 'changePassword'])->name('customers.account.change-password');
        Route::post('/edit-profile', [CustomerAccountController::class, 'processEditProfile'])->name('customers.process.account.edit-profile');
        Route::post('/change-password', [CustomerAccountController::class, 'processChangePassword'])->name('customers.process.account.change-password');
        Route::post('/logout', [CustomerAuthController::class, 'logout'])->name('customers.logout');
    });
});

Route::prefix('riders')->group(function () {
    Route::get('/login', [RiderAuthController::class, 'login'])->name('riders.login');
    Route::post('/login', [RiderAuthController::class, 'processLogin'])->name('riders.process.login');

    Route::middleware(['auth:rider'])->group(function () {
        Route::get('/dashboard', [RiderDashboardController::class, 'index'])->name('riders.dashboard.index');
        Route::get('/edit-profile', [RiderAccountController::class, 'editProfile'])->name('riders.account.edit-profile');
        Route::get('/change-password', [RiderAccountController::class, 'changePassword'])->name('riders.account.change-password');
        Route::post('/edit-profile', [RiderAccountController::class, 'processEditProfile'])->name('riders.process.account.edit-profile');
        Route::post('/change-password', [RiderAccountController::class, 'processChangePassword'])->name('riders.process.account.change-password');

        Route::get('/ride-histories', [RiderRideHistoryController::class, 'index'])->name('riders.ride-histories.index');
        Route::get('/ride-histories/add', [RiderRideHistoryController::class, 'add'])->name('riders.ride-histories.add');
        Route::get('/ride-histories/{id}', [RiderRideHistoryController::class, 'view'])->name('riders.ride-histories.view');
        Route::get('/ride-histories/edit/{id}', [RiderRideHistoryController::class, 'edit'])->name('riders.ride-histories.edit');

        Route::post('/logout', [RiderAuthController::class, 'logout'])->name('riders.logout');
    });
});

Route::prefix('staffs')->group(function () {
    Route::get('/login', [StaffAuthController::class, 'login'])->name('staffs.login');
    Route::post('/login', [StaffAuthController::class, 'processLogin'])->name('staffs.process.login');

    Route::middleware(['auth:staff'])->group(function () {
        Route::get('/dashboard', [StaffDashboardController::class, 'index'])->name('staffs.dashboard.index');
        Route::get('/edit-profile', [StaffAccountController::class, 'editProfile'])->name('staffs.account.edit-profile');
        Route::get('/change-password', [StaffAccountController::class, 'changePassword'])->name('staffs.account.change-password');
        Route::post('/edit-profile', [StaffAccountController::class, 'processEditProfile'])->name('staffs.process.account.edit-profile');
        Route::post('/change-password', [StaffAccountController::class, 'processChangePassword'])->name('staffs.process.account.change-password');

        Route::get('/transactions', [StaffTransactionController::class, 'index'])->name('staffs.transactions.index');
        Route::get('/transactions/add', [StaffTransactionController::class, 'add'])->name('staffs.transactions.add');
        Route::get('/transactions/{id}', [StaffTransactionController::class, 'view'])->name('staffs.transactions.view');
        Route::get('/transactions/edit/{id}', [StaffTransactionController::class, 'edit'])->name('staffs.transactions.edit');

        Route::get('/selling-items', [StaffSellingItemController::class, 'index'])->name('staffs.selling-items.index');
        Route::get('/selling-items/add', [StaffSellingItemController::class, 'add'])->name('staffs.selling-items.add');
        Route::get('/selling-items/{id}', [StaffSellingItemController::class, 'view'])->name('staffs.selling-items.view');
        Route::get('/selling-items/edit/{id}', [StaffSellingItemController::class, 'edit'])->name('staffs.selling-items.edit');

        Route::get('/inventories', [StaffInventoryController::class, 'index'])->name('staffs.inventories.index');
        Route::get('/inventories/add', [StaffInventoryController::class, 'add'])->name('staffs.inventories.add');
        Route::get('/inventories/{id}', [StaffInventoryController::class, 'view'])->name('staffs.inventories.view');
        Route::get('/inventories/edit/{id}', [StaffInventoryController::class, 'edit'])->name('staffs.inventories.edit');

        Route::post('/logout', [StaffAuthController::class, 'logout'])->name('staffs.logout');
    });
});

Route::prefix('shop_admins')->group(function () {
    Route::get('/login', [ShopAdminAuthController::class, 'login'])->name('shop_admins.login');
    Route::get('/register/{id}', [ShopAdminAuthController::class, 'register'])->name('shop_admins.register');
    Route::get('/subscription', [ShopAdminAuthController::class, 'subscription'])->name('shop_admins.subscription');
    Route::post('/login', [ShopAdminAuthController::class, 'processLogin'])->name('shop_admins.process.login');
    Route::post('/register/{id}', [ShopAdminAuthController::class, 'processRegister'])->name('shop_admins.process.register');

    Route::middleware(['auth:shopadmin'])->group(function () {
        Route::get('/dashboard', [ShopAdminDashboardController::class, 'index'])->name('shop_admins.dashboard.index');
        Route::get('/edit-profile', [ShopAdminAccountController::class, 'editProfile'])->name('shop_admins.account.edit-profile');
        Route::get('/change-password', [ShopAdminAccountController::class, 'changePassword'])->name('shop_admins.account.change-password');
        Route::post('/edit-profile', [ShopAdminAccountController::class, 'processEditProfile'])->name('shop_admins.process.account.edit-profile');
        Route::post('/change-password', [ShopAdminAccountController::class, 'processChangePassword'])->name('shop_admins.process.account.change-password');

        Route::get('/staffs', [ShopAdminStaffController::class, 'index'])->name('shop_admins.staffs.index');
        Route::get('/staffs/add', [ShopAdminStaffController::class, 'add'])->name('shop_admins.staffs.add');
        Route::get('/staffs/edit/{id}', [ShopAdminStaffController::class, 'edit'])->name('shop_admins.staffs.edit');
        Route::get('/staffs/search', [ShopAdminStaffController::class, 'search'])->name('shop_admins.staffs.search');
        Route::get('/staffs/{id}', [ShopAdminStaffController::class, 'view'])->name('shop_admins.staffs.view');
        Route::post('/staffs/add', [ShopAdminStaffController::class, 'processAdd'])->name('shop_admins.staffs.process.add');
        Route::delete('/staffs/{id}', [ShopAdminStaffController::class, 'processDelete'])->name('shop_admins.staffs.process.delete');
        Route::put('/staffs/{id}', [ShopAdminStaffController::class, 'processEdit'])->name('shop_admins.staffs.process.edit');

        Route::get('/riders', [ShopAdminRiderController::class, 'index'])->name('shop_admins.riders.index');
        Route::get('/riders/add', [ShopAdminRiderController::class, 'add'])->name('shop_admins.riders.add');
        Route::get('/riders/edit/{id}', [ShopAdminRiderController::class, 'edit'])->name('shop_admins.riders.edit');
        Route::get('/riders/search', [ShopAdminRiderController::class, 'search'])->name('shop_admins.riders.search');
        Route::get('/riders/{id}', [ShopAdminRiderController::class, 'view'])->name('shop_admins.riders.view');
        Route::post('/riders/add', [ShopAdminRiderController::class, 'processAdd'])->name('shop_admins.riders.process.add');
        Route::delete('/riders/{id}', [ShopAdminRiderController::class, 'processDelete'])->name('shop_admins.riders.process.delete');
        Route::put('/riders/{id}', [ShopAdminRiderController::class, 'processEdit'])->name('shop_admins.riders.process.edit');

        Route::get('/machines', [ShopAdminMachineController::class, 'index'])->name('shop_admins.machines.index');
        Route::get('/machines/add', [ShopAdminMachineController::class, 'add'])->name('shop_admins.machines.add');
        Route::get('/machines/edit/{id}', [ShopAdminMachineController::class, 'edit'])->name('shop_admins.machines.edit');
        Route::get('/machines/search', [ShopAdminMachineController::class, 'search'])->name('shop_admins.machines.search');
        Route::get('/machines/{id}', [ShopAdminMachineController::class, 'view'])->name('shop_admins.machines.view');
        Route::post('/machines/add', [ShopAdminMachineController::class, 'processAdd'])->name('shop_admins.machines.process.add');
        Route::delete('/machines/{id}', [ShopAdminMachineController::class, 'processDelete'])->name('shop_admins.machines.process.delete');
        Route::put('/machines/{id}', [ShopAdminMachineController::class, 'processEdit'])->name('shop_admins.machines.process.edit');

        Route::get('/laundry-services', [ShopAdminLaundryServiceController::class, 'index'])->name('shop_admins.laundry-services.index');
        Route::get('/laundry-services/add', [ShopAdminLaundryServiceController::class, 'add'])->name('shop_admins.laundry-services.add');
        Route::get('/laundry-services/edit/{id}', [ShopAdminLaundryServiceController::class, 'edit'])->name('shop_admins.laundry-services.edit');
        Route::get('/laundry-services/search', [ShopAdminLaundryServiceController::class, 'search'])->name('shop_admins.laundry-services.search');
        Route::get('/laundry-services/{id}', [ShopAdminLaundryServiceController::class, 'view'])->name('shop_admins.laundry-services.view');
        Route::post('/laundry-services/add', [ShopAdminLaundryServiceController::class, 'processAdd'])->name('shop_admins.laundry-services.process.add');
        Route::delete('/laundry-services/{id}', [ShopAdminLaundryServiceController::class, 'processDelete'])->name('shop_admins.laundry-services.process.delete');
        Route::put('/laundry-services/{id}', [ShopAdminLaundryServiceController::class, 'processEdit'])->name('shop_admins.laundry-services.process.edit');

        Route::get('/additional-laundry-services', [ShopAdminAdditionalLaundryServiceController::class, 'index'])->name('shop_admins.additional-laundry-services.index');
        Route::get('/additional-laundry-services/add', [ShopAdminAdditionalLaundryServiceController::class, 'add'])->name('shop_admins.additional-laundry-services.add');
        Route::get('/additional-laundry-services/edit/{id}', [ShopAdminAdditionalLaundryServiceController::class, 'edit'])->name('shop_admins.additional-laundry-services.edit');
        Route::get('/additional-laundry-services/search', [ShopAdminAdditionalLaundryServiceController::class, 'search'])->name('shop_admins.additional-laundry-services.search');
        Route::get('/additional-laundry-services/{id}', [ShopAdminAdditionalLaundryServiceController::class, 'view'])->name('shop_admins.additional-laundry-services.view');
        Route::post('/additional-laundry-services/add', [ShopAdminAdditionalLaundryServiceController::class, 'processAdd'])->name('shop_admins.additional-laundry-services.process.add');
        Route::delete('/additional-laundry-services/{id}', [ShopAdminAdditionalLaundryServiceController::class, 'processDelete'])->name('shop_admins.additional-laundry-services.process.delete');
        Route::put('/additional-laundry-services/{id}', [ShopAdminAdditionalLaundryServiceController::class, 'processEdit'])->name('shop_admins.additional-laundry-services.process.edit');

        Route::post('/logout', [ShopAdminAuthController::class, 'logout'])->name('shop_admins.logout');
    });
});

Route::prefix('super_admins')->group(function () {
    Route::get('/login', [SuperAdminAuthController::class, 'login'])->name('super_admins.login');
    Route::post('/login', [SuperAdminAuthController::class, 'processLogin'])->name('super_admins.process.login');

    Route::middleware(['auth:superadmin'])->group(function () {
        Route::get('/dashboard', [SuperAdminDashboardController::class, 'index'])->name('super_admins.dashboard.index');
        Route::get('/edit-profile', [SuperAdminAccountController::class, 'editProfile'])->name('super_admins.account.edit-profile');
        Route::get('/change-password', [SuperAdminAccountController::class, 'changePassword'])->name('super_admins.account.change-password');
        Route::post('/edit-profile', [SuperAdminAccountController::class, 'processEditProfile'])->name('super_admins.process.account.edit-profile');
        Route::post('/change-password', [SuperAdminAccountController::class, 'processChangePassword'])->name('super_admins.process.account.change-password');

        Route::get('/staffs', [SuperAdminStaffController::class, 'index'])->name('super_admins.staffs.index');
        Route::get('/staffs/search', [SuperAdminStaffController::class, 'search'])->name('super_admins.staffs.search');
        Route::get('/staffs/{id}', [SuperAdminStaffController::class, 'view'])->name('super_admins.staffs.view');
        Route::delete('/staffs/{id}', [SuperAdminStaffController::class, 'processDelete'])->name('super_admins.staffs.process.delete');

        Route::get('/customers', [SuperAdminCustomerController::class, 'index'])->name('super_admins.customers.index');
        Route::get('/customers/search', [SuperAdminCustomerController::class, 'search'])->name('super_admins.customers.search');
        Route::get('/customers/{id}', [SuperAdminCustomerController::class, 'view'])->name('super_admins.customers.view');
        Route::delete('/customers/{id}', [SuperAdminCustomerController::class, 'processDelete'])->name('super_admins.customers.process.delete');

        Route::get('/riders', [SuperAdminRiderController::class, 'index'])->name('super_admins.riders.index');
        Route::get('/riders/search', [SuperAdminRiderController::class, 'search'])->name('super_admins.riders.search');
        Route::get('/riders/{id}', [SuperAdminRiderController::class, 'view'])->name('super_admins.riders.view');
        Route::delete('/riders/{id}', [SuperAdminRiderController::class, 'processDelete'])->name('super_admins.riders.process.delete');

        Route::get('/shop-admins', [SuperAdminShopAdminController::class, 'index'])->name('super_admins.shop-admins.index');
        Route::get('/shop-admins/search', [SuperAdminShopAdminController::class, 'search'])->name('super_admins.shop-admins.search');
        Route::get('/shop-admins/{id}', [SuperAdminShopAdminController::class, 'view'])->name('super_admins.shop-admins.view');
        Route::delete('/shop-admins/{id}', [SuperAdminShopAdminController::class, 'processDelete'])->name('super_admins.shop-admins.process.delete');

        Route::get('/super-admins', [SuperAdminSuperAdminController::class, 'index'])->name('super_admins.super-admins.index');
        Route::get('/super-admins/add', [SuperAdminSuperAdminController::class, 'add'])->name('super_admins.super-admins.add');
        Route::get('/super-admins/edit/{id}', [SuperAdminSuperAdminController::class, 'edit'])->name('super_admins.super-admins.edit');
        Route::get('/super-admins/search', [SuperAdminSuperAdminController::class, 'search'])->name('super_admins.super-admins.search');
        Route::get('/super-admins/{id}', [SuperAdminSuperAdminController::class, 'view'])->name('super_admins.super-admins.view');
        Route::post('/super-admins/add', [SuperAdminSuperAdminController::class, 'processAdd'])->name('super_admins.super-admins.process.add');
        Route::delete('/super-admins/{id}', [SuperAdminSuperAdminController::class, 'processDelete'])->name('super_admins.super-admins.process.delete');
        Route::put('/super-admins/{id}', [SuperAdminSuperAdminController::class, 'processEdit'])->name('super_admins.super-admins.process.edit');

        Route::post('/logout', [SuperAdminAuthController::class, 'logout'])->name('super_admins.logout');
    });
});

