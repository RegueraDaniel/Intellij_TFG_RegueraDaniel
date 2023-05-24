package com.iesvdm.tfg_regueradaniel.domain;

import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.*;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString

@EqualsAndHashCode(of = "id")

@Entity
@Table(	name = "users")
public class Usuario {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id_usu")
    private Long id;

    //@NotBlank
    @Size(max = 20)
    private String username;

    //@NotBlank
    @Size(max = 20)
    private String nombrePila;

    //@NotBlank
    @Size(max = 50)
    private String apellidos;

    @Size(max = 9)
    private String tlf;

    @NotBlank
    @Size(max = 50)
    @Column(unique = true, nullable = false)
    @Email
    private String email;

    @NotBlank
    @Size(max = 120)
    private String password;

    @Size(max = 50)
    private String urlImg;

    @OneToMany(mappedBy = "usuario")
    private List<Categoria> categorias;

    @OneToMany(mappedBy = "usuario")
    private List<Meta> metas;

    @OneToMany(mappedBy = "usuario")
    private List<Aviso> avisos;


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getNombrePila() {
        return nombrePila;
    }

    public void setNombrePila(String nombrePila) {
        this.nombrePila = nombrePila;
    }

    public String getApellidos() {
        return apellidos;
    }

    public void setApellidos(String apellidos) {
        this.apellidos = apellidos;
    }

    public String getTlf() {
        return tlf;
    }

    public void setTlf(String tlf) {
        this.tlf = tlf;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getUrlImg() { return urlImg; }

    public void setUrlImg(String urlImg) { this.urlImg = urlImg; }

}
