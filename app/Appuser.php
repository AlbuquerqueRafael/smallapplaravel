<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Appuser extends Model
{
     protected $fillable = array('id', 'username', 'password','name');
}
