<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;


class WebhookController extends Controller
{
    public function handleInstagram(Request $request)
    {
        return response()->json(['message' => 'Hello, Instagram is working!']);
    }
    public function handleFacebook(Request $request)
    {
        return response()->json(['message' => 'Hello, Facebook is working!']);
    }
    public function handleLinkedin(Request $request)
    {
        // Log de volledige payload
        Log::info('Webhook Payload:', $request->all());
        // Log de headers
        Log::info('Webhook Headers:', $request->header());
        // Optioneel: Log de raw content van de request
        Log::info('Raw Payload:', ['content' => $request->getContent()]);
        return response()->json(['message' => 'Webhook data received and logged.']);

    }
}