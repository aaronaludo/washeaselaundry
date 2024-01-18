<?php

namespace App\Http\Controllers\Web\SuperAdmin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class SuperAdminAuthController extends Controller
{
    public function login(){
        return view('superadmin.login');
    }
}
