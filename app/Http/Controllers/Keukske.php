<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class Keukske extends Controller
{
    public function matchCode(Request $request) {
        $validator = $request->validateWithBag('login', [
            'naam' => 'required',
            'mail' => 'required',
            'code' => 'required'
        ]);

        return($validator)->withErrors($validator, 'login');
    }
}
