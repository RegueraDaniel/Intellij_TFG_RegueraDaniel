package com.iesvdm.tfg_regueradaniel.service;
import com.iesvdm.tfg_regueradaniel.domain.Categoria;
import com.iesvdm.tfg_regueradaniel.domain.Usuario;
import com.iesvdm.tfg_regueradaniel.exception.CategoriaNotFoundException;
import com.iesvdm.tfg_regueradaniel.repository.CategoriaRepository;
import com.iesvdm.tfg_regueradaniel.repository.UsuarioRepository;
import org.jetbrains.annotations.NotNull;
import org.springframework.stereotype.Service;

import java.util.*;
@Service
public class CategoriaService{

    private CategoriaRepository categoriaRepository;
    private UsuarioRepository usuarioRepository;


    public CategoriaService (CategoriaRepository categoriaRepository, UsuarioRepository usuarioRepository){
        this.categoriaRepository = categoriaRepository;
        this.usuarioRepository = usuarioRepository;
    }

    public List<Categoria> all(){return this.categoriaRepository.findAll();}

    public Categoria save(@NotNull Categoria categoria){
        //Usuario userCat = usuarioRepository.findById(categoria.getUsuario().getId()).get();
        //categoria.setUsuario(userCat);
        /*Set<Usuario> set = new HashSet<>();
         for ( Usuario usuario :  categoria.getUsuarios()) {
            set.add(this.usuarioRepository.findById(usuario.getId()).get());
        }
        categoria.setUsuarios(set);*/
         //categoria.getUsuarios().
        return this.categoriaRepository.save(categoria);
    }

    public Categoria one(Long id){
        return this.categoriaRepository.findById(id)
                .orElseThrow(() -> new CategoriaNotFoundException(id));
    }

    public Categoria replace(Long id, Categoria categoria){
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
}
