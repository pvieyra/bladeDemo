<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class MiControlador extends Controller
{
  public function contactar(){
    return view('contacto');
  }

  public function proveedores(){
    return view('proveedores.proveedores');
  }
}
