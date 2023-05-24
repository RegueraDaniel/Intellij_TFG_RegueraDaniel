package com.iesvdm.tfg_regueradaniel.controller;
import org.springframework.http.HttpStatus;

import com.iesvdm.tfg_regueradaniel.domain.Aviso;
import com.iesvdm.tfg_regueradaniel.service.AvisoService;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api/avisos")
public class AvisoController  {
    private final AvisoService avisoService;

    public AvisoController (AvisoService avisoService){this.avisoService = avisoService;}

    @GetMapping({"","/"})
    public List<Aviso> all() {
        return this.avisoService.all();
    }

    @PostMapping({"","/"})
    public Aviso newAvi(@RequestBody Aviso aviso) {return this.avisoService.save(aviso);}

    @GetMapping("/{id}")
    public Aviso one(@PathVariable("id") Long id){ return this.avisoService.one(id);}

    @PutMapping("/{id}")
    public Aviso replaceAvi(@PathVariable("id") Long id, @RequestBody Aviso aviso) {
        return this.avisoService.replace(id, aviso);
    }

    @ResponseBody
    @ResponseStatus(HttpStatus.NO_CONTENT)
    @DeleteMapping("/{id}")
    public void deleteAvi(@PathVariable("id") Long id){this.avisoService.delete(id);
    }
}
