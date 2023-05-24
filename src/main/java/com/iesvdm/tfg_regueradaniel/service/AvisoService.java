package com.iesvdm.tfg_regueradaniel.service;
import com.iesvdm.tfg_regueradaniel.domain.Aviso;
import com.iesvdm.tfg_regueradaniel.exception.AvisoNotFoundException;
import com.iesvdm.tfg_regueradaniel.repository.AvisoRepository;
import org.jetbrains.annotations.NotNull;
import org.springframework.stereotype.Service;

import java.util.*;
@Service
public class AvisoService{

    private AvisoRepository avisoRepository;


    public AvisoService (AvisoRepository avisoRepository){
        this.avisoRepository = avisoRepository;
    }

    public List<Aviso> all(){return this.avisoRepository.findAll();}

    public Aviso save(@NotNull Aviso aviso){
        return this.avisoRepository.save(aviso);
    }

    public Aviso one(Long id){
        return this.avisoRepository.findById(id)
                .orElseThrow(() -> new AvisoNotFoundException(id));
    }

    public Aviso replace(Long id, Aviso aviso){
        return this.avisoRepository.findById(id).map( p -> (id.equals(aviso.getId()) ?
                        this.avisoRepository.save(aviso) : null))
                .orElseThrow(() -> new AvisoNotFoundException(id));
    }

    public void delete(Long id){
        this.avisoRepository.findById(id).map(p ->{
            this.avisoRepository.delete(p);
            return p;
        }).orElseThrow(() -> new AvisoNotFoundException(id));
    }
}
