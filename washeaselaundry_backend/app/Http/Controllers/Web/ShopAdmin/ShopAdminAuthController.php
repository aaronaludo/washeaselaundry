<?php

namespace App\Http\Controllers\Web\ShopAdmin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\Subscription;
use Illuminate\Support\Facades\Validator;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class ShopAdminAuthController extends Controller
{
    public function login(){
        if (Auth::guard('shopadmin')->check()) {
            return redirect('/shop_admins/dashboard');
        }
        return view('shopadmin.login');
    }
    public function register($id){
        $subscription = Subscription::find($id);
        
        if(!$subscription){
            return abort(404);
        }

        return view('shopadmin.register', compact('subscription'));
    }
    public function subscription(){
        $subscriptions = Subscription::all();

        return view('shopadmin.subscription', compact('subscriptions'));
    }
    public function processRegister(Request $request, $id){
        $validator = Validator::make($request->all(), [
            'shop_name' => 'required',
            'first_name' => 'required',
            'last_name' => 'required',
            'address' => 'required',
            'phone_number' => 'required',
            'email' => 'required|email|unique:users',
            'password' => ['required', 'confirmed'],
        ]);

        if ($validator->fails()) {
            return redirect()->route('shop_admins.register', $id)
                ->withErrors($validator)
                ->withInput();
        }

        $user = new User();
        $user->role_id = 4;
        $user->shop_name = $request->shop_name;
        $user->first_name = $request->first_name;
        $user->last_name = $request->last_name;
        $user->address = $request->address;
        $user->phone_number = $request->phone_number;
        $user->email = $request->email;
        $user->password = Hash::make($request->password);
        $user->save();

        return redirect()->route('shop_admins.login')->with('success', 'Shop Admin created successfully');
    }
    public function processLogin(Request $request){
        $credentials = $request->only('email', 'password');
    
        if (Auth::guard('shopadmin')->attempt($credentials)) {
            $user = Auth::guard('shopadmin')->user();
            
            if ($user->role_id === 4) {
                return redirect()->intended('/shop_admins/dashboard');
            }
    
            Auth::guard('shopadmin')->logout();
            return redirect()->route('shop_admins.login')->with('error', 'Invalid credentials');
        }
        return redirect()->route('shop_admins.login')->with('error', 'Invalid credentials');
    }
    public function logout(){
        Auth::guard('shopadmin')->logout();
        return redirect('/shop_admins/login');
    }
}
