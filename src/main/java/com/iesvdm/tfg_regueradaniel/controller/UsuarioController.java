package com.iesvdm.tfg_regueradaniel.controller;

import com.iesvdm.tfg_regueradaniel.domain.Categoria;
import com.iesvdm.tfg_regueradaniel.domain.Login;
import com.iesvdm.tfg_regueradaniel.domain.Usuario;
import com.iesvdm.tfg_regueradaniel.service.UsuarioService;


import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:8000")
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

    @GetMapping({"/global/{id}"})
    public Integer obtenerGlobal(@PathVariable("id") Long id) {
        return this.usuarioService.obtenerGlobal(id);
    }
    @PutMapping("/global/{id}/{importe}")
    public Usuario actualizarGlobal(@PathVariable("id") Long id,
                                    @PathVariable("importe") Integer importe
                                    /*, @RequestBody Usuario usuario*/
                                    //puedo mandar formulario con Integer y nombreinteger para ponerlo abajo
                                    //o creo objeto
                                    ) {
        return this.usuarioService.actualizarGlobal(id, importe);
    }
    @PutMapping("/global/{id}")
    public Usuario globalACero(@PathVariable("id") Long id
            /*, @RequestBody Usuario usuario*/) {
        return this.usuarioService.globalCero(id);
    }

    //loginComfirm
    //@PostMapping({"/login/{email}/{pass}"})
    @PostMapping({"/login"})
    public Usuario intentoLogin(//@PathVariable("email") String email,
                                //@PathVariable("pass") String pass,
                                @RequestBody Login login) {
        return this.usuarioService.loginComfirm(login);
    }

    @PostMapping("/actualizarMax/{idUsu}")
    public Categoria actualizarMax(@PathVariable("idUsu") Long idUsu,
                                   //@PathVariable("nombreCat") String nombreCat,
                                   //@PathVariable("importe") Integer importe
                                   @RequestBody Categoria categoria) {
        return this.usuarioService.actualizarMax(idUsu, categoria);
    }

    //para poner a cero un gasto maximo ("borrar")
    @PostMapping("/actualizarMax/{idUsu}/{nombreCat}")
    public Categoria deleteMax(@PathVariable("idUsu") Long idUsu,
                               //@PathVariable("nombreCat") String nombreCat
                               @RequestBody Categoria categoria) {
        return this.usuarioService.maxCero(idUsu, categoria);
    }

}
