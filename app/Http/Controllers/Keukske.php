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
            $result = 'Oei, verkeerde code';
        } elseif($codeMatch->prize !== null){
            $result = 'Exclusieve prijs gewonnen';
        } elseif ($codeMatch->prize === null) {
            $result = 'Standaard prijs gewonnen';
        }

        return response()->json(['result'=>$result]);
    }
}
