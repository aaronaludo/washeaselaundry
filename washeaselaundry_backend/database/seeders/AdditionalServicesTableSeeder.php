<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\AdditionalService;

class AdditionalServicesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        AdditionalService::create([
            'service_id' => 1,
            'name' => 'Wash Only',
        ]);
        AdditionalService::create([
            'service_id' => 1,
            'name' => 'Dry Only',
        ]);
        AdditionalService::create([
            'service_id' => 1,
            'name' => 'Full Service',
        ]);
    }
}
