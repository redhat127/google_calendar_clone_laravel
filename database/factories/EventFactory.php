<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Event>
 */
class EventFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => fake()->words(random_int(3, 6), asText: true),
            'description' => fake()->realText(random_int(50, 160)),
            'duration_in_minutes' => random_int(30, 720),
            'is_active' => fake()->randomElement([true, false]),
            'user_id' => User::factory(),
        ];
    }
}
