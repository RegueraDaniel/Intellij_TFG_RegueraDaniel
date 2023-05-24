package com.iesvdm.tfg_regueradaniel.controller;
import com.iesvdm.tfg_regueradaniel.domain.Categoria;
import com.iesvdm.tfg_regueradaniel.domain.Usuario;
import com.iesvdm.tfg_regueradaniel.service.CategoriaService;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api/categorias")
public class CategoriaControler {
    private final CategoriaService categoriaService;
    private final UsuarioController usuarioController;

    public CategoriaControler (CategoriaService categoriaService, UsuarioController usuarioController){
        this.categoriaService = categoriaService;
        this.usuarioController = usuarioController;
    }

    @GetMapping({"","/"})
    public List<Categoria> all() {
        return this.categoriaService.all();
    }

    @PostMapping({"","/"})
    public Categoria newCat(@RequestBody Categoria categoria) {
        //Usuario userCat = usuarioController.one(categoria.getUsuario().getId());
       // categoria.setUsuario(userCat);
        return this.categoriaService.save(categoria);
    }

    @GetMapping("/{id}")
    public Categoria one(@PathVariable("id") Long id){ return this.categoriaService.one(id);}

    @PutMapping("/{id}")
    public Categoria replaceCat(@PathVariable("id") Long id, @RequestBody Categoria categoria) {
        return this.categoriaService.replace(id, categoria);
    }

    @ResponseBody
    @ResponseStatus(HttpStatus.NO_CONTENT)
    @DeleteMapping("/{id}")
    public void deleteCat(@PathVariable("id") Long id){this.categoriaService.delete(id);
    }
}
