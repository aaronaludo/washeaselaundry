<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\TransactionMode;

class TransactionModesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        TransactionMode::create([
            'name' => 'Self Service',
        ]); 
        TransactionMode::create([
            'name' => 'Pickup and Delivery',
        ]);
        TransactionMode::create([
            'name' => 'Pickup Only',
        ]);
        TransactionMode::create([
            'name' => 'Dropoff',
        ]);
        TransactionMode::create([
            'name' => 'Dropoff and Delivery',
        ]);
    }
}
