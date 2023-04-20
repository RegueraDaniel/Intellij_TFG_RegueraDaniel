package com.iesvdm.tfg_regueradaniel.controller;

import com.iesvdm.tfg_regueradaniel.service.UsuarioService;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api/usuarios")
public class UsuarioController {

    private final UsuarioService usuarioService;

    public UsuarioController (UsuarioService usuarioService){this.usuarioService = usuarioService;}
/*
    @GetMapping(value = {"","/"}
    public List<USuario> all() {
        return this.
    }
*/
}
