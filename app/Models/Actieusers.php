<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;


class Actieusers extends Authenticatable
{
    use HasFactory;


    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'keukske_actie_users';

}
