package com.iesvdm.tfg_regueradaniel.domain;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.*;

import java.math.BigDecimal;
import java.util.Date;
import java.util.List;

@Entity
@Table(name="movements")
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@ToString
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class Movimiento {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id_mov")
    private Long id;
    @NotBlank
    @NotNull
    //@JsonFormat(pattern = "yyyy-MM-dd-HH:mm:ss",  shape = JsonFormat.Shape.STRING)
    private String fecha;

    @NotNull
    private BigDecimal importe;

    private String descripcion;

    @ManyToOne(fetch = FetchType.LAZY)
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    @ToString.Exclude
    @JoinColumn(name = "id_cat", nullable = false)
    private Categoria categoria;

    public Movimiento(String fecha, BigDecimal importe, String descripcion, Categoria categoria) {
        this.fecha = fecha;
        this.importe = importe;
        this.descripcion = descripcion;
        this.categoria = categoria;
    }

}
