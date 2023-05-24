package com.iesvdm.tfg_regueradaniel.exception;

public class MovimientoNotFoundException extends RuntimeException{
    public MovimientoNotFoundException(Long id){super("Movimiento no encontrado con el id "+id);}
}
