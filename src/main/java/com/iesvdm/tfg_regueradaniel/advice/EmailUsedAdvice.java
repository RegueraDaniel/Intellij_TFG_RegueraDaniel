package com.iesvdm.tfg_regueradaniel.advice;

import com.iesvdm.tfg_regueradaniel.exception.EmailUsedException;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

@ControllerAdvice
public class EmailUsedAdvice {
    @ResponseBody
    @ExceptionHandler(EmailUsedException.class)
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    String emailUsedHandler(EmailUsedException emailUsedException){
        return emailUsedException.getMessage();
    }
}
