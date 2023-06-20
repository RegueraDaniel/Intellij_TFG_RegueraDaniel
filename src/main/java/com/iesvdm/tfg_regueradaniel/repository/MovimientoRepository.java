package com.iesvdm.tfg_regueradaniel.repository;

import com.iesvdm.tfg_regueradaniel.domain.Movimiento;
import com.iesvdm.tfg_regueradaniel.domain.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MovimientoRepository extends JpaRepository<Movimiento, Long>{


    /*@Query("SELECT m FROM Movimiento m WHERE YEAR(m.fecha) = YEAR(CURRENT_DATE) AND MONTH(m.fecha) = MONTH(CURRENT_DATE)")
    List<Movimiento> findMovimientosDeEsteMes();*/

    List<Movimiento> findAllByOrderByFechaDesc();


    @Query(value="SELECT m FROM movements m WHERE m.users.id = :idUsu ORDER BY m.fecha DESC",nativeQuery = true)
    List<Movimiento> findAllByUsuarioOrderByFechaDesc(@Param("idUsu") Long idUsu);

}
