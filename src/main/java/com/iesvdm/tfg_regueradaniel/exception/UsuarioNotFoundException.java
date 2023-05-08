package com.iesvdm.tfg_regueradaniel.exception;

public class UsuarioNotFoundException extends RuntimeException{
    public UsuarioNotFoundException(Long id){super("Usuario no encontrado con el id "+id);}
}
