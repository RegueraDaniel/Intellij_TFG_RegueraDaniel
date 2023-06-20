package com.iesvdm.tfg_regueradaniel.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
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
    @NotNull
    private String nombre;

    @NotNull
    private BigDecimal mensualidad;

    @NotNull
    private BigDecimal importeTotal;

    private String fechaFinal;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "id_usu", nullable = false)
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    @ToString.Exclude
    private Usuario usuario;


}
