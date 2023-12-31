<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Role;

class RolesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Role::create([
            'name' => 'Customer',
        ]);
        Role::create([
            'name' => 'Staff',
        ]);
        Role::create([
            'name' => 'Rider',
        ]);
        Role::create([
            'name' => 'Shop Admin',
        ]);
        Role::create([
            'name' => 'Super Admin',
        ]);
    }
}
