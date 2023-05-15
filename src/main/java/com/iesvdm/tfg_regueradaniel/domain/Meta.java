package com.iesvdm.tfg_regueradaniel.domain;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import lombok.*;

import java.math.BigDecimal;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@ToString

@Entity
@Table(name = "goals")
public class Meta {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id_goal")
    private Long id;
    @NotBlank
    private String nombre;

    private BigDecimal mensualidad;

    private BigDecimal importeTotal;

    private String fechaFinal;

    @ManyToOne()
    @JoinColumn(name = "id_usu", nullable = false)
    private Usuario usuario;


}
