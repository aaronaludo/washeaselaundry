<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('transaction_items', function (Blueprint $table) {
            $table->id();
            $table->integer('transaction_id');
            $table->integer('service_id');
            $table->integer('transaction_mode_id');
            $table->integer('additional_service_id')->nullable();
            $table->integer('machine_id')->nullable()->default(0);
            $table->integer('status_id');
            $table->string('name');
            $table->integer('quantity');
            $table->integer('weight');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('transaction_items');
    }
};