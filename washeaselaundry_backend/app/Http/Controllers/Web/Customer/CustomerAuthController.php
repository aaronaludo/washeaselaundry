<?php

namespace App\Http\Controllers\Web\Customer;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class CustomerAuthController extends Controller
{
    public function index(){
        return view('customer.index');
    }
}
