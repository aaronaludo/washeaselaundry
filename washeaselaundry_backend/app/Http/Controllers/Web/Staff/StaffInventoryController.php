<?php

namespace App\Http\Controllers\Web\Staff;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class StaffInventoryController extends Controller
{
    public function index(){
        return view('staff.inventories');
    }
    public function add(){
        return view('staff.inventories-add');
    }
    public function view(){
        return view('staff.inventories-view');
    }
    public function edit(){
        return view('staff.inventories-edit');
    }
}
