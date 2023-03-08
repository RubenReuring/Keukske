<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class Keukske extends Controller
{
    public function matchCode(Request $request) {
        $validator = $request->validate([
            'naam' => 'required',
            'mail' => 'required',
            'code-1' => 'required',
            'code-2' => 'required',
            'code-3' => 'required',
            'code-4' => 'required'

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

        return($errors);
    }
}
