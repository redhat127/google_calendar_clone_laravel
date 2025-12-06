<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUlids;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class ScheduleAvailability extends Model
{
    use HasUlids;

    // Many availabilities belong to one schedule
    public function schedule(): BelongsTo
    {
        return $this->belongsTo(Schedule::class);
    }
}
