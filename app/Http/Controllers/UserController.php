<?php

namespace App\Http\Controllers;

use App\User;
use App\Appuser;
use App\Http\Controllers\Controller;
use Log;
use Illuminate\Http\Request;
use DB;

class UserController extends Controller
{
    /**
     * Show the profile for the given user.
     *
     * @param  int  $id
     * @return Response
     */
    public function login(Request $request )
    {
        $username = $request->input('username');
        $password = $request->input('password');
        $match = ['email' => $username, 'password' => $password];

        $user = User::where($match)->first();

        if($user != NULL){
          return $user = array(
                          "username" => $user->email ,
                          "name" => $user->name,
                          );
        }else{
          return response('Invalid username or password', 404);
        }

    }
}
