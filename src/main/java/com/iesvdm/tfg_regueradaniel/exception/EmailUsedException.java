package com.iesvdm.tfg_regueradaniel.exception;

public class EmailUsedException extends RuntimeException{
    public EmailUsedException(){super("Otro ousuario ya usa ese correo. Pruebe con otro.");}
}

