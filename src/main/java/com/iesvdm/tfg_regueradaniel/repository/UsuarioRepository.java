package com.iesvdm.tfg_regueradaniel.repository;

import com.iesvdm.tfg_regueradaniel.domain.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;
@Repository
public interface UsuarioRepository extends JpaRepository<Usuario, Long> {

    Optional<Usuario> findById(Long id);
    Optional<Usuario> findByEmail(String email);

    Optional<Usuario> findByEmailEqualsAndIdNot(String email, Long id);
}
