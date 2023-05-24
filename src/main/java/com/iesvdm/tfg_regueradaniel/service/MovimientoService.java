package com.iesvdm.tfg_regueradaniel.service;
import com.iesvdm.tfg_regueradaniel.domain.Movimiento;
import com.iesvdm.tfg_regueradaniel.exception.MovimientoNotFoundException;
import com.iesvdm.tfg_regueradaniel.repository.MovimientoRepository;
import org.jetbrains.annotations.NotNull;
import org.springframework.stereotype.Service;

import java.util.*;
@Service
public class MovimientoService {

    private MovimientoRepository movimientoRepository;


    public MovimientoService (MovimientoRepository movimientoRepository){
        this.movimientoRepository = movimientoRepository;
    }

    public List<Movimiento> all(){return this.movimientoRepository.findAll();}

    public Movimiento save(@NotNull Movimiento movimiento){
        return this.movimientoRepository.save(movimiento);
    }

    public Movimiento one(Long id){
        return this.movimientoRepository.findById(id)
                .orElseThrow(() -> new MovimientoNotFoundException(id));
    }

    public Movimiento replace(Long id, Movimiento movimiento){
        return this.movimientoRepository.findById(id).map( p -> (id.equals(movimiento.getId()) ?
                        this.movimientoRepository.save(movimiento) : null))
                .orElseThrow(() -> new MovimientoNotFoundException(id));
    }

    public void delete(Long id){
        this.movimientoRepository.findById(id).map(p ->{
            this.movimientoRepository.delete(p);
            return p;
        }).orElseThrow(() -> new MovimientoNotFoundException(id));
    }
}
