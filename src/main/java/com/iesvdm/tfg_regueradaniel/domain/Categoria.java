package com.iesvdm.tfg_regueradaniel.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import jakarta.validation.constraints.Size;
import lombok.*;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

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

    @Enumerated(EnumType.STRING)
    @Size(max = 20)
    private ECategoria nombreCat;

    @Size(max = 12) //hexadecimal
    private String icono;

    @Size(max = 7) //hexadecimal
    private String color;

    @OneToMany(mappedBy = "categoria")
    @JsonIgnore
    @ToString.Exclude
    private List<Movimiento> movimientos;

    @OneToMany(mappedBy = "categoria")
    @JsonIgnore
    @ToString.Exclude
    private List<Gastomaximo> gastosmaximos;

    @ManyToMany(
            mappedBy = "categorias", fetch = FetchType.EAGER)
    @ToString.Exclude
    @JsonIgnore
    Set<Usuario> usuarios = new HashSet<>();

}
