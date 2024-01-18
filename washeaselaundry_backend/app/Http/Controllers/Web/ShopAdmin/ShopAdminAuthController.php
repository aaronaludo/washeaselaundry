<?php

namespace App\Http\Controllers\Web\ShopAdmin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ShopAdminAuthController extends Controller
{
    public function login(){
        return view('shopadmin.login');
    }
}
