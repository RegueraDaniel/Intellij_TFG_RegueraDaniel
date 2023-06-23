package com.iesvdm.tfg_regueradaniel.domain;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.math.BigDecimal;

@Data
@AllArgsConstructor
public class MovimientoDTO {

    private Long id;

    private String fecha;

    private BigDecimal importe;

    private String descripcion;

    private String miCategoria;

    public MovimientoDTO(Movimiento movimiento) {

        this.id = movimiento.getId();
        this.fecha = movimiento.getFecha();
        this.importe = movimiento.getImporte();
        this.descripcion = movimiento.getDescripcion();
        this.miCategoria = movimiento.getCategoria().getNombreCat();
    }

    public Movimiento devolverMovimiento(Categoria categoria){
        System.out.println(categoria.toString());
        Movimiento movimiento = new Movimiento( this.getFecha(), this.getImporte(), this.descripcion, categoria);
        movimiento.setId(this.getId());

        return movimiento;
    }



}


