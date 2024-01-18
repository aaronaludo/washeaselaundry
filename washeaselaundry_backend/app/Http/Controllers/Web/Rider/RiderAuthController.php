<?php

namespace App\Http\Controllers\Web\Rider;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class RiderAuthController extends Controller
{
    public function login(){
        return view('rider.login');
    }
}
