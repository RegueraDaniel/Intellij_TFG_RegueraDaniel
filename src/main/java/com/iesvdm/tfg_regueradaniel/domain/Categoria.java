package com.iesvdm.tfg_regueradaniel.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import jakarta.validation.constraints.Size;
import lombok.*;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@ToString

@EqualsAndHashCode(of = "id")

@Entity
@Table(name = "categories")
public class Categoria {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id_cat")
    private Long id;

    //@Enumerated(EnumType.STRING)
    @Size(max = 20)
    //ECategoria
    private String nombreCat;

    @Size(max = 12) //hexadecimal
    private String icono;

    @Size(max = 7) //hexadecimal
    private String color;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JsonIgnore
    @ToString.Exclude
    @JoinColumn(name = "id_usu", nullable = false)
    private Usuario usuario;

    @OneToMany(mappedBy = "categoria")
    private List<Movimiento> movimientos;

    @OneToMany(mappedBy = "categoria")
    private List<Gastomaximo> gastosmaximos;

}