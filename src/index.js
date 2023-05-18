import React from 'react';
import ReactDOM from 'react-dom';
import Crudapp from './Crudapp';
import './index.css';

import {BrowserRouter} from "react-router-dom";
//import * as serviceWorker from "./serviceWorker";

//import "bootstrap/dist/css/bootstrap.min.css";

// function App(){
//   return "Helllo World ................"
// }

ReactDOM.render(
  <BrowserRouter>
    <Crudapp />
  </BrowserRouter>,
  document.getElementById('root')
);

ServiceWorker.unregister();


// git status
//git add .
//git commit "update"
//git commit
//git push
//git status
//git add .
//git commit -m
//git commit -m "message"
//git -b
//git branch
//git push origin master

/*
//api route in laravel
<?php
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\Reactapi\ReactCrudController;

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
  return $request->user();
});

Route::post('/tutorials',[ReactCrudController::class, 'reactcrud_create']);
Route::get('/tutorials',[ReactCrudController::class, 'reactcrud_getall']);
Route::get('/tutorialsfindbytitle',[ReactCrudController::class, 'reactcrud_findbytitle']);
Route::post('/tutorialsdeletealldata',[ReactCrudController::class, 'reactcrud_turncatetable']);
Route::get('/tutorialsgetdatabyid',[ReactCrudController::class, 'reactcrud_getdatabyid']);
Route::post('/tutorialsupdate',[ReactCrudController::class, 'reactcrud_update']);
Route::get('/tutorialsdestroy',[ReactCrudController::class, 'reactcrud_destroy']);
?>


//all controller function in laravel 
<?php

namespace App\Http\Controllers\API\Reactapi;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Tutorial;

class ReactCrudController extends Controller
{
    public function reactcrud_create(Request $request){
        $data['title'] = $request->input('title');
        $data['description'] = $request->input('description');
        $model = new Tutorial();
        $model->title = $data['title'];
        $model->description = $data['description'];
        //$model->published = str_to_date(date('YY-MM-DD H:i:S'), date('d-m-Y H:i'));
        $model->published = date('Y-m-d H:i:s');
        $model->save();
        $id=   $model->id;
        $tutorial_details = [];
        if ($id > 0) {
            $tutorial_details = Tutorial::where('id',$id)->first();
        }
        return response()->json([
            'status'=> 200,
            'success' => true,
            'data'=> $tutorial_details,
            //'messages'=>$validator->errors()->all(),
            'messages'=> "Data submitted successfully",
          ]);
    }

    public function reactcrud_getall(){
        $all_data = Tutorial::get();
        $all_data = json_decode($all_data);
        if($all_data){
            //$all_data =  json_decode($all_data);
            return response()->json([
                'status'=> 200,
                'success' => true,
                'data'=> $all_data,
                //'messages'=>$validator->errors()->all(),
                'messages'=> "Data get successfully",
              ]);
        }else{
            return response()->json([
                'status'=> 201,
                'success' => false,
                
                //'messages'=>$validator->errors()->all(),
                'messages'=> "Data not found",
              ]);
        }
    }

    public function reactcrud_findbytitle(Request $request){
        $title = $request->get('title');
        $all_data = Tutorial::where('title', 'LIKE', "%{$title}%")->get();
        $all_data = json_decode($all_data);
        if($all_data){
            //$all_data =  json_decode($all_data);
            return response()->json([
                'status'=> 200,
                'success' => true,
                'data'=> $all_data,
                //'messages'=>$validator->errors()->all(),
                'messages'=> "Data get successfully",
              ]);
        }else{
            return response()->json([
                'status'=> 201,
                'success' => false,
                //'messages'=>$validator->errors()->all(),
                'messages'=> "Data not found",
              ]);
        }
    }
    public function reactcrud_turncatetable(){
        //$all_data = Tutorial::truncate(); 
        $all_data = Tutorial::whereNotNull('id')->delete();
        //$all_data = Tutorial::where('id', 'like' '%%')->delete();
        if($all_data){
            return response()->json([
                'status'=> 200,
                'success' => true,
                'messages'=> "All date successfully deleted",
              ]);
        }else{
            return response()->json([
                'status'=> 201,
                'success' => false,
                'messages'=> "Table is empty",
              ]);
        }
    }

    public function reactcrud_getdatabyid(Request $request){
        $id = $request->get('id');
        $all_data = Tutorial::where('id', "=", $id)->first();
        //$all_data = Tutorial::where('id', 'like' '%%')->delete();
        if($all_data){
            return response()->json([
                'status'=> 200,
                'success' => true,
                'data' => $all_data,
                'messages'=> "Single date get successfully",
              ]);
        }else{
            return response()->json([
                'status'=> 201,
                'success' => false,
                'messages'=> "Data not found",
              ]);
        }
    }


    public function reactcrud_update(Request $request){
        //echo "<pre>";
        //return $request->input('published');
        // return print_r($_POST);
        // die();
        $id = $request->get('id');
        $all_data = Tutorial::where('id', "=", $id)->first();
        if($all_data){
            $all_data->title = $request->input('title');
            $all_data->description = $request->input('description');
            //$publish = null;
            if($request->input('published') == 1){
                $publish = date('Y/m/d H:i:s');
            }else{
                $publish = null;
            }
            $all_data->published = $publish;
            $all_data->save();
            return response()->json([
                'status'=> 200,
                'success' => true,
                'data' => $all_data,
                'messages'=> "Published status changed",
              ]);
        }else{
            return response()->json([
                'status'=> 201,
                'success' => false,
                'messages'=> "Data not found",
              ]);
        }
    }

    public function reactcrud_destroy(Request $request){
        $id = $request->get('id');
        $all_data = Tutorial::findorfail($id);
        if($all_data){
            $all_data->delete();
            return response()->json([
                'status'=> 200,
                'success' => true,
                'messages'=> "Data delete successfully",
              ]);
        }else{
            return response()->json([
                'status'=> 201,
                'success' => false,
                'messages'=> "Data not found",
              ]);
        }
        
    }
}

*/