package com.iesvdm.tfg_regueradaniel.exception;

public class CategoriaNotFoundException extends RuntimeException{
    public CategoriaNotFoundException(Long id){super("Categoria no encontrada con el id "+id);}

}
