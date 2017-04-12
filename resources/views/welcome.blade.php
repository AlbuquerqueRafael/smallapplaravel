<!DOCTYPE html>
<html ng-app="smallapp" >
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <title>Laravel</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Raleway:100,600" rel="stylesheet" type="text/css">
        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Raleway:100,600" rel="stylesheet" type="text/css">
        <link href="<?= asset('/css/smallapp.css') ?>" rel="stylesheet">

        <!-- CSS -->
        <link href="<?= asset('libs/boostrap/bootstrap.min.css') ?>" rel="stylesheet">
        <link href="<?= asset('libs/font-awesome/font-awesome.min.css') ?>" rel="stylesheet">


        <!-- SCRIPTS -->
        <script src="<?= asset('libs/angular/angular.min.js') ?>" rel="stylesheet"></script>
        <script src="<?= asset('libs/angular/angular-route.min.js') ?>" rel="stylesheet"></script>

        <script src="<?= asset('js/app.js') ?>" rel="stylesheet"></script>
        <script src="<?= asset('js/user/userService.js') ?>" rel="stylesheet"></script>
        <script src="<?= asset('js/user/loginController.js') ?>" rel="stylesheet"></script>
        <script src="<?= asset('js/home/homeController.js') ?>" rel="stylesheet"></script>
        <!-- Alert -->
        <script src="<?= asset('js/alert/alertDirective.js') ?>" rel="stylesheet"></script>
    </head>
    <body class="index-page-color">
		    <div class="index-data-ng-view">
   		     <div data-ng-view></div>
   	     </div>
	 </body>
</html>
