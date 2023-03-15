<?php

namespace App\Http\Controllers;

use App\Models\Actieusers;
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
            $actieuser = new Actieusers();
            $actieuser->name = $request->name;
            $actieuser->email = $request->mail;
            $actieuser->actie_code = $totalCode;
            $actieuser->save();
        } elseif ($codeMatch->prize === null) {
            $result = "You've won 10% off your next purchase!";
            $actieuser = new Actieusers();
            $actieuser->name = $request->name;
            $actieuser->email = $request->mail;
            $actieuser->actie_code = $totalCode;
            $actieuser->save();
        }

        return response()->json(['result'=>$result]);
    }
}
