package com.iesvdm.tfg_regueradaniel.repository;

import com.iesvdm.tfg_regueradaniel.domain.Categoria;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.math.BigDecimal;
import java.util.List;
import java.util.Optional;

@Repository
public interface CategoriaRepository extends JpaRepository<Categoria, Long>{

    Optional<Categoria> findByNombreCat(String nombre);

    List<Categoria> findByUsuarioId(Long id);

    Categoria findByUsuarioIdAndNombreCat(Long id, String nombre);
    Optional<Categoria>findByNombreCatEqualsAndIdNotAndUsuarioId(String nombre, Long id, Long idUsu);
    //findByNombreCatEqualsAndIdNot(String nombre, Long id).isPresent()

    List<Categoria> findByUsuarioIdAndAndMaxMensualCatGreaterThan(Long id, BigDecimal valor);

    @Query(value = "SELECT  c.nombre_cat, SUM(m.importe) as Total, m.importe as Importe, (SUM(m.importe)*100/(SELECT SUM(m2.importe) FROM movements as m2 INNER JOIN categories as c2 ON m2.id_cat = c2.id_cat WHERE c2.id_usu=:id AND YEAR(m.fecha) = YEAR(CURRENT_DATE) AND MONTH(m.fecha) = MONTH(CURRENT_DATE) )) as porciento FROM movements as m INNER join categories as c ON m.id_cat = c.id_cat WHERE c.id_usu = :id AND YEAR(m.fecha) = YEAR(CURRENT_DATE) AND MONTH(m.fecha) = MONTH(CURRENT_DATE) GROUP BY c.id_cat",nativeQuery = true)
    List<Object[]> calcularPorcentajeMensualCategorías(@Param("id") Long id);

    @Query(value = "SELECT c.nombre_cat, YEAR(m.fecha) as anio, MONTH(m.fecha) as mes, SUM(m.importe) as Total, m.importe as Importe, (SUM(m.importe)*100/(SELECT SUM(m2.importe) FROM movements as m2 INNER JOIN categories as c2 ON m2.id_cat = c2.id_cat WHERE c2.id_usu=:id AND YEAR(m2.fecha) = YEAR(m.fecha) AND MONTH(m2.fecha) = MONTH(m.fecha))) as porciento FROM movements as m INNER join categories as c ON m.id_cat = c.id_cat WHERE c.id_usu = :id AND (m.fecha BETWEEN DATE_SUB(CURRENT_DATE, INTERVAL 11 MONTH) AND CURRENT_DATE) GROUP BY c.id_cat, YEAR(m.fecha), MONTH(m.fecha) ORDER BY YEAR(m.fecha), MONTH(m.fecha)", nativeQuery = true)
    List<Object[]> historico(@Param("id") Long id);

    @Query(value = "SELECT  nombre_cat FROM categories WHERE id_usu=:id",nativeQuery = true)
    List<String> listaNombreCat(@Param("id") Long id);


}

