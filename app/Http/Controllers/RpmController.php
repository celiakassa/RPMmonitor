<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class RpmController extends Controller
{
    public function index()
    {
       return view("rpm.general");
    }
    public function sbin()
    {
       return view("rpm.sbin");
    }
    public function isocel()
    {
       return view("rpm.isocel");
    }
    public function mtn()
    {
       return view("rpm.mtn");
    }
    public function moov()
    {
       return view("rpm.moov");
    }
    public function  gmbh ()
    {
       return view("rpm.gmbh");
    }


}
