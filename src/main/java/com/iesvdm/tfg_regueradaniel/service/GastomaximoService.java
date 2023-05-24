package com.iesvdm.tfg_regueradaniel.service;

import com.iesvdm.tfg_regueradaniel.domain.Gastomaximo;
import com.iesvdm.tfg_regueradaniel.exception.GastomaximoNotFoundException;
import com.iesvdm.tfg_regueradaniel.repository.GastomaximoRepository;
import org.jetbrains.annotations.NotNull;
import org.springframework.stereotype.Service;

import java.util.*;
@Service
public class GastomaximoService {

    private GastomaximoRepository gastomaximoRepository;

    public GastomaximoService (GastomaximoRepository gastomaximoRepository){
        this.gastomaximoRepository = gastomaximoRepository;
    }

    public List<Gastomaximo> all(){return this.gastomaximoRepository.findAll();}

    public Gastomaximo save(@NotNull Gastomaximo gastomaximo){
        return this.gastomaximoRepository.save(gastomaximo);
    }

    public Gastomaximo one(Long id){
        return this.gastomaximoRepository.findById(id)
                .orElseThrow(() -> new GastomaximoNotFoundException(id));
    }

    public Gastomaximo replace(Long id, Gastomaximo gastomaximo){
        return this.gastomaximoRepository.findById(id).map( p -> (id.equals(gastomaximo.getId()) ?
                        this.gastomaximoRepository.save(gastomaximo) : null))
                .orElseThrow(() -> new GastomaximoNotFoundException(id));
    }

    public void delete(Long id){
        this.gastomaximoRepository.findById(id).map(p ->{
            this.gastomaximoRepository.delete(p);
            return p;
        }).orElseThrow(() -> new GastomaximoNotFoundException(id));
    }
}
