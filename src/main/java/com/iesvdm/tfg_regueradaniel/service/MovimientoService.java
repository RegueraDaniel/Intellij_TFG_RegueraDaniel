package com.iesvdm.tfg_regueradaniel.service;
import com.iesvdm.tfg_regueradaniel.domain.Categoria;
import com.iesvdm.tfg_regueradaniel.domain.Movimiento;
import com.iesvdm.tfg_regueradaniel.domain.MovimientoDTO;
import com.iesvdm.tfg_regueradaniel.exception.MovimientoNotFoundException;
import com.iesvdm.tfg_regueradaniel.repository.CategoriaRepository;
import com.iesvdm.tfg_regueradaniel.repository.MovimientoRepository;
import org.jetbrains.annotations.NotNull;
import org.springframework.stereotype.Service;

import java.util.*;
@Service
public class MovimientoService {

    private MovimientoRepository movimientoRepository;

    private CategoriaRepository categoriaRepository;

    public MovimientoService (MovimientoRepository movimientoRepository, CategoriaRepository categoriaRepository){
        this.movimientoRepository = movimientoRepository;
        this.categoriaRepository = categoriaRepository;
    }

    public List<Movimiento> all(){return this.movimientoRepository.findAll();}

    /*11 MOVIMIENTOS ***/
    public List<MovimientoDTO> misMovimientos(Long idUsuario){

        List<Movimiento> movimientos = this.movimientoRepository.findByCategoria_Usuario_IdOrderByFechaDesc(idUsuario);

        List<MovimientoDTO> movimientoDTOs = new ArrayList<>();
        for (Movimiento movimiento : movimientos) {
            MovimientoDTO movimientoDTO = new MovimientoDTO(movimiento);
            movimientoDTOs.add(movimientoDTO);
        }

        return movimientoDTOs;
    }

    public Movimiento crearMiMovimiento(Long idUsuario, @NotNull MovimientoDTO movimientoDto){
        //movimientoDto.setId(idUsuario);
        Categoria miCategoria = this.categoriaRepository.findCategoriaByNombreAndUsuarioId(
                                                                movimientoDto.getMiCategoria(), idUsuario);
        Movimiento miMovimiento = movimientoDto.devolverMovimiento(miCategoria);
        return this.movimientoRepository.save(miMovimiento);
    }

    public Movimiento replace(Long idUsu, MovimientoDTO movimientoDTO){

        return this.movimientoRepository.save(this.crearMiMovimiento(idUsu, movimientoDTO));
    }


    public Movimiento save(@NotNull Movimiento movimiento){
        //movimiento.setMiCategoria(movimiento.getCategoria().getNombreCat());
        return this.movimientoRepository.save(movimiento);
    }




    public MovimientoDTO one(Long id){

        Movimiento movimiento = (this.movimientoRepository.findById(id))
                .orElseThrow(() -> new MovimientoNotFoundException(id));
        MovimientoDTO movimientoDTO = new MovimientoDTO(movimiento);
        return movimientoDTO;
    }

//reemplazar normal
    /*
    public Movimiento replace(Long id, Movimiento movimiento){
        return this.movimientoRepository.findById(id).map( p -> (id.equals(movimiento.getId()) ?
                        this.movimientoRepository.save(movimiento) : null))
                .orElseThrow(() -> new MovimientoNotFoundException(id));
    }*/

    public void delete(Long id){
        this.movimientoRepository.findById(id).map(p ->{
            this.movimientoRepository.delete(p);
            return p;
        }).orElseThrow(() -> new MovimientoNotFoundException(id));
    }
}
