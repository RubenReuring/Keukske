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

        // Check validation failure
        if ($validator->fails()) {
            // [...]
        }

        // Check validation success
        if ($validator->passes()) {
            // [...]
        }

        // Retrieve errors message bag
        $errors = $validator->errors();

        return($request->naam);
    }
}
