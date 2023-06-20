package com.iesvdm.tfg_regueradaniel.controller;
import com.iesvdm.tfg_regueradaniel.domain.Movimiento;
import com.iesvdm.tfg_regueradaniel.service.MovimientoService;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:8000")
@RequestMapping("/api/movimientos")
public class MovimientoController {
    private final MovimientoService movimientoService;

    public MovimientoController (MovimientoService movimientoService){this.movimientoService = movimientoService;}

    @GetMapping({"","/"})
    public List<Movimiento> all() {
        return this.movimientoService.all();
    }

    /* 11 MOVIMIENTOS ***/
    @GetMapping("/misMovimientos/{id}")
    public List<Movimiento> misMovimientos(@PathVariable("id") Long id){ return this.movimientoService.misMovimientos(id);}
    @PostMapping({"","/"})
    public Movimiento newMov(@RequestBody Movimiento movimiento) {return this.movimientoService.save(movimiento);}

    @GetMapping("/{id}")
    public Movimiento one(@PathVariable("id") Long id){ return this.movimientoService.one(id);}

    @PutMapping("/{id}")
    public Movimiento replaceMov(@PathVariable("id") Long id, @RequestBody Movimiento movimiento) {
        return this.movimientoService.replace(id, movimiento);
    }

    @ResponseBody
    @ResponseStatus(HttpStatus.NO_CONTENT)
    @DeleteMapping("/{id}")
    public void deleteMov(@PathVariable("id") Long id){this.movimientoService.delete(id);
    }
}
