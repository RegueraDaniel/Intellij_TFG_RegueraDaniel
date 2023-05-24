package com.iesvdm.tfg_regueradaniel.exception;

public class MetaNotFoundException extends RuntimeException{
    public MetaNotFoundException(Long id){super("Meta no encontrada con el id "+id);}

}
