<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class Keukske extends Controller
{
    public function matchCode(Request $request) {
//        $validated = $request->validate([
//            'Naam' => 'required',
//            'Email' => 'required',
//            'Code' => 'required'
//        ]);

        return($request->Naam);
    }
}
