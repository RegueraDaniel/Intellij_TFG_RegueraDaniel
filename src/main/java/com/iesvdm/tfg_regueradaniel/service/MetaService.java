package com.iesvdm.tfg_regueradaniel.service;
import com.iesvdm.tfg_regueradaniel.domain.Categoria;
import com.iesvdm.tfg_regueradaniel.domain.Meta;
import com.iesvdm.tfg_regueradaniel.exception.MetaNotFoundException;
import com.iesvdm.tfg_regueradaniel.exception.NameUsedException;
import com.iesvdm.tfg_regueradaniel.repository.MetaRepository;

import com.iesvdm.tfg_regueradaniel.repository.UsuarioRepository;

import org.jetbrains.annotations.NotNull;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
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
        //el usuario debe no debe tener otra meta con mismo nombre
        if( (this.metaRepository.findByNombreEqualsAndIdNot( meta.getNombre(), meta.getUsuario().getId() )).isPresent()){
            throw new NameUsedException();
        }
        this.comprobarValores( meta);
        this.calcularFecha(meta);

        return this.metaRepository.save(meta);
    }

    //calcula la fecha en la que se llega el ahorro a traves de la mensualidad y el total
    private void calcularFecha(Meta meta){
        LocalDate fechaCreacion = LocalDate.now();
        BigDecimal meses = meta.getImporteTotal().divide(meta.getMensualidad(), 0, BigDecimal.ROUND_CEILING);
        LocalDate fechaFinal = fechaCreacion.plusMonths(meses.longValue());

        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd-MM-yyyy");
        String fechaFinalStr = fechaFinal.format(formatter);

        meta.setFechaFinal(fechaFinalStr);
    }

    //convierte los bigdecimal en valores logicos para la clase
    // como minimo el total sera el doble de la mensualidad
    private void comprobarValores(Meta meta){

        if(meta.getMensualidad().intValue() <= 1 ) {
            meta.setMensualidad(new BigDecimal(1));
        }
        if(meta.getImporteTotal().intValue() <= meta.getMensualidad().intValue() ) {
            meta.setImporteTotal( meta.getMensualidad().multiply(new BigDecimal(2)) );
        }
    }

    public Meta one(Long id){
        return this.metaRepository.findById(id)
                .orElseThrow(() -> new MetaNotFoundException(id));
    }

    public List<Meta> misMetas(Long idUsu){
        return this.metaRepository.findByUsuarioId(idUsu);
    }

    public Meta replace(Long id, Meta meta){
        if( (this.metaRepository.findByNombreEqualsAndIdNot( meta.getNombre(), meta.getUsuario().getId() )).isPresent() ){
            throw new NameUsedException();
        }
        this.comprobarValores(meta);
        this.calcularFecha(meta);
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
