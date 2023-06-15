<?php

namespace App\Http\Controllers;

use App\Models\Actieusers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;


class Keukske extends Controller
{
    public function redirect(Request $request) {

        return response()->json(['result'=>$result]);
    }
}
