<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class Keukske extends Controller
{
    public function matchCode(Request $request) {
        $validator = $request->validate([
            'naam' => 'required',
            'mail' => 'required',
            'code1' => 'required',
            'code2' => 'required',
            'code3' => 'required',
            'code4' => 'required',
        ]);

        $totalCode = strtoupper($tempCode= $request->code1 . $request->code2 . $request->code3 . $request->code4);
        $codeMatch = DB::table('keukske_unique_codes')->where('uniqueCode', $totalCode)->value('id');

        return response()->json(['formatCode'=>$codeMatch]);
    }
}
