package com.iesvdm.tfg_regueradaniel.service;
import com.iesvdm.tfg_regueradaniel.domain.Categoria;
import com.iesvdm.tfg_regueradaniel.exception.CategoriaNotFoundException;
import com.iesvdm.tfg_regueradaniel.exception.NameUsedException;
import com.iesvdm.tfg_regueradaniel.repository.CategoriaRepository;
import org.jetbrains.annotations.NotNull;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.util.*;
@Service
public class CategoriaService{

    private CategoriaRepository categoriaRepository;

    public CategoriaService (CategoriaRepository categoriaRepository){
        this.categoriaRepository = categoriaRepository;
    }

    /*GENERICOS PARA PRUEBAS ---ANULAR PARA USO NORMAL---**/
    public List<Categoria> all(){return this.categoriaRepository.findAll();}


    /*10 DASHBOARD ***/
    public List<Object[]> estadisticasMes(Long idUsu){
        return this.categoriaRepository.calcularPorcentajeMensualCategorías(idUsu);
    }
    public List<Categoria> misGastosMaxInicializados(Long idUsu){
        BigDecimal importeBig = new BigDecimal(""+0);
        return this.categoriaRepository.findByUsuarioIdAndAndMaxMensualCatGreaterThan(idUsu, importeBig);
    }
    public List<Object[]> historico(Long idUsu){
        return this.categoriaRepository.historico(idUsu);
    }

    public Categoria save(@NotNull Categoria categoria){

        if(this.categoriaRepository.findByNombreCatEqualsAndIdNotAndUsuarioId(categoria.getNombreCat(), categoria.getId(), categoria.getUsuario().getId()).isPresent()){
            throw new NameUsedException();
        }
        categoria.setMaxMensualCat(new BigDecimal("0"));
        return this.categoriaRepository.save(categoria);
    }


    public Categoria one(Long id){
        return this.categoriaRepository.findById(id)
                .orElseThrow(() -> new CategoriaNotFoundException(id));
    }

    public Categoria replace(Long id, Categoria categoria){
        String nombre = categoria.getNombreCat();
        boolean nombreDuclicado = false;

        //no dejo que se actualice con nombre de categoría ya existente
        for(Categoria cat : this.categoriaRepository.findByUsuarioId(categoria.getUsuario().getId())){
            if(cat.getId() != id && cat.getNombreCat().equals(nombre) ){
                nombreDuclicado = true;
                break;
            }
        }
        System.out.println("boolean duplicado "+nombreDuclicado);
        if(nombreDuclicado){throw new NameUsedException();}

        return this.replaceInternal( id, categoria);
    }

    public Categoria replaceInternal(Long id, Categoria categoria){
        return this.categoriaRepository.findById(id).map( p -> (id.equals(categoria.getId()) ?
                        this.categoriaRepository.save(categoria) : null))
                .orElseThrow(() -> new CategoriaNotFoundException(id));
    }


    public void delete(Long id){
        this.categoriaRepository.findById(id).map(p ->{
            this.categoriaRepository.delete(p);
            return p;
        }).orElseThrow(() -> new CategoriaNotFoundException(id));
    }

    /* 11 MOVIMIENTOS ***/
    public List<String> catBox(Long idUsu){
        return this.categoriaRepository.listaNombreCat(idUsu);
    }

    /* 12 CATEGORIAS ***/
    public List<Categoria> misCategorias(Long idUsu){
        return this.categoriaRepository.findByUsuarioId(idUsu);
    }

}
