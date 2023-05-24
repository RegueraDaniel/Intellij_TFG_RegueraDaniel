package com.iesvdm.tfg_regueradaniel.exception;

public class AvisoNotFoundException extends RuntimeException{
    public AvisoNotFoundException(Long id){super("Aviso no encontrado con el id "+id);}
}
