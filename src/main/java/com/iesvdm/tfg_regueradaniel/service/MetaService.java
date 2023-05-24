package com.iesvdm.tfg_regueradaniel.service;
import com.iesvdm.tfg_regueradaniel.domain.Meta;
import com.iesvdm.tfg_regueradaniel.exception.MetaNotFoundException;
import com.iesvdm.tfg_regueradaniel.repository.MetaRepository;

import com.iesvdm.tfg_regueradaniel.repository.UsuarioRepository;

import org.jetbrains.annotations.NotNull;
import org.springframework.stereotype.Service;

import java.util.*;
@Service
public class MetaService {

    private MetaRepository metaRepository;

    private UsuarioRepository usuarioRepository;

    public MetaService (MetaRepository metaRepository, UsuarioRepository usuarioRepository){
        this.metaRepository = metaRepository;
        this.usuarioRepository = usuarioRepository;
    }

    public List<Meta> all(){return this.metaRepository.findAll();}

    public Meta save(@NotNull Meta meta){
        return this.metaRepository.save(meta);
    }

    public Meta one(Long id){
        return this.metaRepository.findById(id)
                .orElseThrow(() -> new MetaNotFoundException(id));
    }

    public Meta replace(Long id, Meta meta){
        return this.metaRepository.findById(id).map( p -> (id.equals(meta.getId()) ?
                        this.metaRepository.save(meta) : null))
                .orElseThrow(() -> new MetaNotFoundException(id));
    }

    public void delete(Long id){
        this.metaRepository.findById(id).map(p ->{
            this.metaRepository.delete(p);
            return p;
        }).orElseThrow(() -> new MetaNotFoundException(id));
    }
}
