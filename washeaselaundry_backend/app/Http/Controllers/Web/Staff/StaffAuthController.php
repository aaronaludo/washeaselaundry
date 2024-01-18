<?php

namespace App\Http\Controllers\Web\Staff;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class StaffAuthController extends Controller
{
    public function login(){
        return view('staff.login');
    }
}
