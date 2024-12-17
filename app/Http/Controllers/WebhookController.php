<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

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
        // Log the entire request payload
        Log::info('Webhook Received:', $request->all());
        // Optionally store the raw JSON content
        $payload = $request->getContent();
        Log::info('Raw Payload:', ['content' => $payload]);
        // Return a simple success response
        return response()->json(['message' => 'Webhook data received and logged.']);

    }
}
