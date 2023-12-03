<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Service;

class ServicesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Service::create([
            'name' => 'Basic Services (Wash, Dry, Fold)',
        ]);
        Service::create([
            'name' => 'Ironing',
        ]);
        Service::create([
            'name' => 'Dry Cleaning',
        ]);
    }
}
