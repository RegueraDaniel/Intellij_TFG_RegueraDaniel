package com.iesvdm.tfg_regueradaniel.repository;

import com.iesvdm.tfg_regueradaniel.domain.Meta;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface MetaRepository extends JpaRepository<Meta, Long>{

    Meta findByUsuarioIdAndNombre(Long id, String nombre);

    Optional<Meta> findByNombreEqualsAndIdNot(String nombre, Long id);

    List<Meta> findByUsuarioId(Long id);
}
