package com.iesvdm.tfg_regueradaniel.controller;
import com.iesvdm.tfg_regueradaniel.domain.Movimiento;
import com.iesvdm.tfg_regueradaniel.domain.MovimientoDTO;
import com.iesvdm.tfg_regueradaniel.service.MovimientoService;

import org.jetbrains.annotations.NotNull;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:8000")
@RequestMapping("/api/movimientos")
public class MovimientoController {
    private final MovimientoService movimientoService;

    public MovimientoController (MovimientoService movimientoService){this.movimientoService = movimientoService;}

    /*GENERICOS PARA PRUEBAS ---ANULAR PARA USO NORMAL---**/
    @GetMapping({"","/"})
    public List<Movimiento> all() {
        return this.movimientoService.all();
    }

    /* 11 MOVIMIENTOS ***/
    @GetMapping("/misMovimientos/{idUsuario}")
    public List<MovimientoDTO> misMovimientos(@PathVariable("idUsuario") Long idUsuario){
        return this.movimientoService.misMovimientos(idUsuario);}

    @PostMapping({"","/"})
    public Movimiento newMov(@RequestBody Movimiento movimiento) {
        return this.movimientoService.save(movimiento);}

    @PostMapping({"/crearMiMovimiento/{idUsuario}"})
    public Movimiento crearMiMovimiento(@PathVariable("idUsuario") Long idUsuario, @RequestBody MovimientoDTO movimientoDTO) {
        return this.movimientoService.crearMiMovimiento(idUsuario, movimientoDTO);}
/*
    @GetMapping("/{id}")
    public Movimiento one(@PathVariable("id") Long id){ return this.movimientoService.one(id);}
*/
    @GetMapping("/{id}")
    public MovimientoDTO one(@PathVariable("id") Long id){ return this.movimientoService.one(id);}

    @PutMapping("/{id}")
    public Movimiento replaceMov(@PathVariable("id") Long id, @RequestBody MovimientoDTO movimientodto) {
        return this.movimientoService.replace(id, movimientodto);
    }

    @ResponseBody
    @ResponseStatus(HttpStatus.NO_CONTENT)
    @DeleteMapping("/{id}")
    public void deleteMov(@PathVariable("id") Long id){this.movimientoService.delete(id);
    }
}
