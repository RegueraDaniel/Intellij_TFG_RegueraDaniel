package com.iesvdm.tfg_regueradaniel.domain;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import lombok.*;

import java.math.BigDecimal;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@ToString

@EqualsAndHashCode(of = "id")

@Entity
@Table(name = "maxexpenses")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class Gastomaximo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id_maxex")
    private Long id;
    @NotBlank
    private String nombre;

    private BigDecimal importe;

    @ManyToOne()
    @JoinColumn(name = "id_cat", nullable = false)
    private Categoria categoria;
}
