package com.iesvdm.tfg_regueradaniel.controller;

import com.iesvdm.tfg_regueradaniel.domain.Usuario;
import com.iesvdm.tfg_regueradaniel.service.UsuarioService;


import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api/usuarios")
public class UsuarioController {

    private final UsuarioService usuarioService;

    public UsuarioController (UsuarioService usuarioService){this.usuarioService = usuarioService;}

    @GetMapping({"","/"})
    public List<Usuario> all() {
        return this.usuarioService.all();
    }

    @PostMapping({"","/"})
    public Usuario newUsuario(@RequestBody Usuario usuario) {return this.usuarioService.save(usuario);}

    @GetMapping("/{id}")
    public Usuario one(@PathVariable("id") Long id){ return this.usuarioService.one(id);}

    @PutMapping("/{id}")
    public Usuario replaceUsuario(@PathVariable("id") Long id, @RequestBody Usuario usuario) {
        return this.usuarioService.replace(id, usuario);
    }

    @ResponseBody
    @ResponseStatus(HttpStatus.NO_CONTENT)
    @DeleteMapping("/{id}")
    public void deleteUsuario(@PathVariable("id") Long id){this.usuarioService.delete(id);
    }

}
