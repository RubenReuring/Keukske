<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class Keukske extends Controller
{
    public function matchCode(Request $request) {
        $validator = $request->validate([
            'naam' => 'required',
            'mail' => 'required',
            'code' => 'required'
        ]);


        // Retrieve errors message bag
        $errors = $validator->errors();

        return($errors);
    }
}
