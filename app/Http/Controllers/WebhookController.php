<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class WebhookController extends Controller
{
    public function handleWebhook(Request $request)
    {
        return response()->json(['message' => 'Hello, Webhook is working!']);
    }
}
