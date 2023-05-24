package com.iesvdm.tfg_regueradaniel.exception;

public class GastomaximoNotFoundException extends RuntimeException{
    public GastomaximoNotFoundException(Long id){super("Gasto máximo no encontrado con el id "+id);}
}
