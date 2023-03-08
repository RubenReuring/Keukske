<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;


class Keukske extends Controller
{
    public function matchCode(Request $request) {
        $totalCode = strtoupper($request->code1 . $request->code2 . $request->code3 . $request->code4);
//        $totalCode = 'XIGU';
        $codeMatch = DB::table('keukske_unique_codes')->where('uniqueCode', $totalCode)->value('id');

//        return $codeMatch;
        return response()->json(['formatCode'=>$codeMatch]);
    }
}
