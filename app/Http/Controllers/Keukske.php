<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;


class Keukske extends Controller
{
    public function matchCode(Request $request) {
        $totalCode = strtoupper($request->code1 . $request->code2 . $request->code3 . $request->code4);

        $codeMatch = DB::table('keukske_unique_codes')->where('uniqueCode', $totalCode)->first();
        if ($codeMatch === null) {
            $result = "wrong-code";
        } elseif($codeMatch->prize !== null){
            $result = $codeMatch->prize;
        } elseif ($codeMatch->prize === null) {
            $result = "You've won 10% off your next purchase!";
        }

        return response()->json(['result'=>$result]);
    }
}
