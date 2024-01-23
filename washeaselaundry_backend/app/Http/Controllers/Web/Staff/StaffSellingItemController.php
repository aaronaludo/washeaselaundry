<?php

namespace App\Http\Controllers\Web\Staff;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class StaffSellingItemController extends Controller
{
    public function index(){
        return view('staff.selling-items');
    }
    public function add(){
        return view('staff.selling-items-add');
    }
    public function view(){
        return view('staff.selling-items-view');
    }
    public function edit(){
        return view('staff.selling-items-edit');
    }
}
