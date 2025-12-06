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
        Schema::create('schedule_availabilities', function (Blueprint $table) {
            $table->ulid('id')->primary();
            $table->string('start_time');
            $table->string('end_time');
            $table->enum(
                'day_of_week',
                [
                    'saturday',
                    'sunday',
                    'monday',
                    'tuesday',
                    'wednesday',
                    'thursday',
                    'friday',
                ]
            );
            $table->foreignUlid('schedule_id')
                ->index()
                ->constrained()
                ->cascadeOnDelete();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('schedule_availabilities');
    }
};
