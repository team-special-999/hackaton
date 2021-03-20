<?php

namespace Database\Factories;

use App\Models\Stream;
use Illuminate\Database\Eloquent\Factories\Factory;

class StreamFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Stream::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'user_id' => rand(1, 10),
            'name' => 'Stream by ' . $this->faker->name,
            'icon' => $this->faker->numberBetween(),
            'live' => $this->faker->boolean
        ];
    }
}