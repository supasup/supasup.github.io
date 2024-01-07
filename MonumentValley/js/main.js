<!DOCTYPE html>
<html>
    <head>
        <title>403 Zabroniony</title>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1">
        <meta http-equiv="cache-control" content="max-age=0" />
        <meta http-equiv="cache-control" content="no-cache" />
        <meta http-equiv="expires" content="0" />
        <meta http-equiv="expires" content="Tue, 01 Jan 1980 1:00:00 GMT" />
        <meta http-equiv="pragma" content="no-cache" />
        <meta name=”robots” content="noindex">
        
        <script>
            jQuery(document).ready(function($) {
                $('.block').css({'height': (($(window).height() * 1)) + 'px'});
                $(window).resize(function() { // On resize
                    $('.block').css({'height': (($(window).height() * 1)) + 'px'});
                });
            });
        </script>
    </head>
    <body>
        <div class="block">
            <div class="centered">
                <p>Serwer zrozumiał zapytanie lecz konfiguracja bezpieczeństwa zabrania mu zwrócić żądany zasób.</p>
                <h1>403 Zabroniony.</h1>
            </div>
        </div>
        <img src="/error_pages/img/logo-atthost-white.png" class="logo" title="AttHost : Serwery, Domeny, Aplikacje" alt="Logo AttHost"/>
    </body>
</html>
