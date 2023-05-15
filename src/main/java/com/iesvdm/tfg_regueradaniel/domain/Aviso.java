package com.iesvdm.tfg_regueradaniel.domain;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import jakarta.validation.constraints.Size;
import lombok.*;

import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@ToString

@EqualsAndHashCode(of = "id")

@Entity
@Table(name = "notices")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class Aviso {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id_not")
    private Long id;
    @Enumerated(EnumType.STRING)
    @Size(max = 20)
    private TipoAviso tipo;

    private String icono;

    @JsonFormat(pattern = "yyyy-MM-dd-HH:mm:ss",  shape = JsonFormat.Shape.STRING)
    private Date fecha;

    @ManyToOne()
    @JoinColumn(name = "id_usu", nullable = false)
    private Usuario usuario;

}
