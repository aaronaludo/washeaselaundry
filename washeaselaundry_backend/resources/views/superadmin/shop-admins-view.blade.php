@extends('layouts.superadmin')
@section('title', 'Super Admin - View')

@section('content')
    <div class="container-fluid">
        <div class="row">
            <div class="col-lg-12 d-flex justify-content-between">
                <div><h2 class="title">View</h1></div>
            </div>
            <div class="col-lg-12">
                <div class="alert alert-primary">
                    <p>Shop: <span class="fw-semibold ms-3">{{ $shop_admin->shop_name }}</span></p>
                    <p>First name: <span class="fw-semibold ms-3">{{ $shop_admin->first_name }}</span></p>
                    <p>Last name: <span class="fw-semibold ms-3">{{ $shop_admin->last_name }}</span></p>
                    <p>Address: <span class="fw-semibold ms-3">{{ $shop_admin->address }}</span></p>
                    <p>Phone number: <span class="fw-semibold ms-3">{{ $shop_admin->phone_number }}</span></p>
                    <p>Email: <span class="fw-semibold ms-3">{{ $shop_admin->email }}</span></p>
                    <p>Date created: <span class="fw-semibold ms-3">{{ \Carbon\Carbon::parse($shop_admin->created_at)->format('F j, Y g:i a') }}</span></p>
                </div>
            </div>                    
        </div>
    </div>
@endsection