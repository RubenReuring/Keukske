<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;


class WebhookController extends Controller
{
    public function handleInstagram(Request $request)
    {
        $signature = $request->header('X-Webflow-Signature');
        Log::info('X-Webflow-Signature:', ['signature' => $signature]);
        return response()->json(['message' => 'Instagram signature logged.']);
    }
    public function handleFacebook(Request $request)
    {
        $signature = $request->header('X-Webflow-Signature');
        Log::info('X-Webflow-Signature:', ['signature' => $signature]);
        return response()->json(['message' => 'Facebook signature logged.']);
    }
    public function handleLinkedin(Request $request)
    {
        $signature = $request->header('X-Webflow-Signature');
        Log::info('X-Webflow-Signature:', ['signature' => $signature]);
        return response()->json(['message' => 'Linkedin signature logged.']);

    }
}
