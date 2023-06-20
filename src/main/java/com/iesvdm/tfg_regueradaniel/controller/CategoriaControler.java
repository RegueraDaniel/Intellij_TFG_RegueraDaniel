package com.iesvdm.tfg_regueradaniel.controller;
import com.iesvdm.tfg_regueradaniel.domain.Categoria;
import com.iesvdm.tfg_regueradaniel.domain.Usuario;
import com.iesvdm.tfg_regueradaniel.service.CategoriaService;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:8000")
@RequestMapping("/api/categorias")
public class CategoriaControler {
    private final CategoriaService categoriaService;
    private final UsuarioController usuarioController;

    public CategoriaControler (CategoriaService categoriaService, UsuarioController usuarioController){
        this.categoriaService = categoriaService;
        this.usuarioController = usuarioController;
    }

    /*GENERICOS PARA PRUEBAS ---ANULAR PARA USO NORMAL---**/
    @GetMapping({"","/"})
    public List<Categoria> all() {
        return this.categoriaService.all();
    }

    /*10 DASHBOARD ***/
    @GetMapping(("/estadisticasMes/{id}"))
    public List<Object[]> estadisticasMes(@PathVariable("id") Long id) {
        return this.categoriaService.estadisticasMes(id);
    }
    @GetMapping(("/misGastosMaxInicializados/{id}"))
    public List<Categoria> misGastosMaxInicializados(@PathVariable("id") Long id) {
        return this.categoriaService.misGastosMaxInicializados(id);
    }
    @GetMapping(("/historico/{id}"))
    public List<Object[]> historico(@PathVariable("id") Long id) {
        return this.categoriaService.historico(id);
    }

    /* 11 MOVIMIENTOS ***/
    @GetMapping(("/boxCat/{id}"))
    public List<String> catBox(@PathVariable("id") Long id) {
        return this.categoriaService.catBox(id);
    }

    /* 12 CATEGORIAS ***/
    @GetMapping(("/misCategorias/{id}"))
    public List<Categoria> misCategorias(@PathVariable("id") Long id) {
        return this.categoriaService.misCategorias(id);
    }

    @PostMapping({"","/"})
    public Categoria newCat(@RequestBody Categoria categoria) {
        //Usuario userCat = usuarioController.one(categoria.getUsuario().getId());
        // categoria.setUsuario(userCat);
        return this.categoriaService.save(categoria);
    }

    @PutMapping("/{id}")
    public Categoria replaceCat(@PathVariable("id") Long id, @RequestBody Categoria categoria) {
        return this.categoriaService.replace(id, categoria);
    }

    @ResponseBody
    @ResponseStatus(HttpStatus.NO_CONTENT)
    @DeleteMapping("/{id}")
    public void deleteCat(@PathVariable("id") Long id){this.categoriaService.delete(id);
    }
    @GetMapping("/{id}")
    public Categoria one(@PathVariable("id") Long id){ return this.categoriaService.one(id);}


    /* 13 PRESUPUESTOS ***/
    @GetMapping(("/boxCatMaxExpenses/{id}"))
    public List<String> catBoxMaxExpenses(@PathVariable("id") Long id) {
        List<String> listaCategoriaGastosMaximos = this.categoriaService.catBox(id);
        listaCategoriaGastosMaximos.add("GLOBAL");
        return listaCategoriaGastosMaximos;
    }

}
