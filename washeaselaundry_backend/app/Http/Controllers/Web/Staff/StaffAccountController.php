<?php

namespace App\Http\Controllers\Web\Staff;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class StaffAccountController extends Controller
{
    public function editProfile(){
        return view('staff.edit-profile');
    }
    public function changePassword(){
        return view('staff.change-password');
    }
    public function processEditProfile(Request $request){
        $user = User::find(auth()->guard('staff')->user()->id);
        $user->first_name = $request->first_name;
        $user->last_name = $request->last_name;
        $user->address = $request->address;
        $user->phone_number = $request->phone_number;
        $user->email = $request->email;
        $user->save();

        return redirect('/staffs/edit-profile')->with('success', 'Profile updated successfully');
    }
    public function processChangePassword(Request $request){
        $validator = Validator::make($request->all(), [
            'old_password' => 'required',
            'new_password' => 'required|confirmed',
        ]);

        if ($validator->fails()) {
            return redirect()->route('staffs.account.change-password')
                ->withErrors($validator)
                ->withInput();
        }

        $user = User::find(auth()->guard('staff')->user()->id);

        if (!Hash::check($request->old_password, $user->password)) {
            return redirect()->route('staffs.account.change-password')->with('error', 'Incorrect old password');
        }
        
        $user->password = Hash::make($request->new_password);
        $user->save();

        return redirect('/staffs/change-password')->with('success', 'Password changed successfully');
    }
}
