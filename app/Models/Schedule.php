<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUlids;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Schedule extends Model
{
    use HasUlids;

    // Many schedules belong to one user
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    // One schedule has many availabilities
    public function availabilities(): HasMany
    {
        return $this->hasMany(ScheduleAvailability::class);
    }
}
