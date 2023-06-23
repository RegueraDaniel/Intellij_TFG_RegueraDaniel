package com.iesvdm.tfg_regueradaniel.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.*;
import org.springframework.beans.factory.annotation.Autowired;

import java.math.BigDecimal;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@ToString

@EqualsAndHashCode(of = "id")

@Entity
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
@Table(name = "categories")
public class Categoria {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id_cat")
    private Long id;

    //@Enumerated(EnumType.STRING)
    @Size(max = 20)
    //@Column(unique = true)
    @NotNull
    @NotBlank
    private String nombreCat;

    @Size(max = 12) //hexadecimal
    private String icono;

    @Size(max = 7) //hexadecimal
    private String color;

    private boolean porDefecto;
    private BigDecimal maxMensualCat;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "id_usu", nullable = false)
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    @ToString.Exclude
    private Usuario usuario;

    @OneToMany(mappedBy = "categoria",
            cascade = {CascadeType.MERGE})
    private List<Movimiento> movimientos;

}
