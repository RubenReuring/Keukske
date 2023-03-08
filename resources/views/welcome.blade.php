<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>

        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=figtree:400,600&display=swap" rel="stylesheet" />
        <style>
            body {
                display: flex;
                height: 100vh;
                justify-content: center;
                align-items: center;
            }
            form {
                display: flex;
                flex-direction: column;
                gap: 1em 1em;
            }
            .codewrapper {
                display: flex;
                gap: .5em .5em;
            }
        </style>

    </head>
    <body class="antialiased">
{{--    <button class="test">Button</button>--}}
    <form class="cookie-form">
        <input required name='naam' type="text" placeholder="naam">
        <input required name='mail' type="email" placeholder="mail">
        <div class="codewrapper">
            <input class="codeInput" id="n0" maxlength="1" required name='code1' type="text" placeholder="code1" data-next="1">
            <input class="codeInput" id="n1" maxlength="1" required name='code2' type="text" placeholder="code2" data-next="2">
            <input class="codeInput" id="n2" maxlength="1" required name='code3' type="text" placeholder="code3" data-next="3">
            <input class="codeInput" id="n3" maxlength="1" required name='code4' type="text" placeholder="code4" data-next="4">
        </div>

        <button class="submit" type="submit">Submit</button>
    </form>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.3/jquery.min.js" integrity="sha512-STof4xm1wgkfm7heWqFJVn58Hm3EtS31XFaagaa8VMReCXAkQnJZ+jEy8PCC/iT18dFy95WcExNHFTqLyp72eQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>

    <script src="/js/keukske.js"></script>

    </body>
</html>
