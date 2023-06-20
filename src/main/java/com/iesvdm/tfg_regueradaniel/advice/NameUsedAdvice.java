package com.iesvdm.tfg_regueradaniel.advice;

import com.iesvdm.tfg_regueradaniel.exception.NameUsedException;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

@ControllerAdvice
public class NameUsedAdvice {
    @ResponseBody
    @ExceptionHandler(NameUsedException.class)
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    String nameUsedHandler(NameUsedException nameUsedException){
        return nameUsedException.getMessage();
    }
}
