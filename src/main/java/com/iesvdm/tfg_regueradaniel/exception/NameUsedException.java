package com.iesvdm.tfg_regueradaniel.exception;

public class NameUsedException extends RuntimeException{
    public NameUsedException(){super("El nombre ya está en uso. Pruebe con otro.");}
}
