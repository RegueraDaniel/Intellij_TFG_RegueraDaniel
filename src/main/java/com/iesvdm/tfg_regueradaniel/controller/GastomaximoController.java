package com.iesvdm.tfg_regueradaniel.controller;

import com.iesvdm.tfg_regueradaniel.domain.Gastomaximo;
import com.iesvdm.tfg_regueradaniel.service.GastomaximoService;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api/gastosmaximos")
public class GastomaximoController {
    private final GastomaximoService gastomaximoService;

    public GastomaximoController (GastomaximoService gastomaximoService){this.gastomaximoService = gastomaximoService;}

    @GetMapping({"","/"})
    public List<Gastomaximo> all() {
        return this.gastomaximoService.all();
    }

    @PostMapping({"","/"})
    public Gastomaximo newMaxex(@RequestBody Gastomaximo gastomaximo) {return this.gastomaximoService.save(gastomaximo);}

    @GetMapping("/{id}")
    public Gastomaximo one(@PathVariable("id") Long id){ return this.gastomaximoService.one(id);}

    @PutMapping("/{id}")
    public Gastomaximo replaceMaxex(@PathVariable("id") Long id, @RequestBody Gastomaximo gastomaximo) {
        return this.gastomaximoService.replace(id, gastomaximo);
    }

    @ResponseBody
    @ResponseStatus(HttpStatus.NO_CONTENT)
    @DeleteMapping("/{id}")
    public void deleteMaxex(@PathVariable("id") Long id){this.gastomaximoService.delete(id);
    }
}
