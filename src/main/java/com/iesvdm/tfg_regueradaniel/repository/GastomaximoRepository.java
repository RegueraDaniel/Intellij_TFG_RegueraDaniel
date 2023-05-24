package com.iesvdm.tfg_regueradaniel.repository;

import com.iesvdm.tfg_regueradaniel.domain.Gastomaximo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;
@Repository
public interface GastomaximoRepository extends JpaRepository<Gastomaximo, Long>{
    Optional<Gastomaximo> findById(Long id);
}
