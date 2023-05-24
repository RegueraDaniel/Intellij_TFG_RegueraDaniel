package com.iesvdm.tfg_regueradaniel.controller;

import com.iesvdm.tfg_regueradaniel.domain.Meta;
import com.iesvdm.tfg_regueradaniel.service.MetaService;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api/metas")
public class MetaController {
    private final MetaService metaService;

    public MetaController (MetaService metaService){this.metaService = metaService;}

    @GetMapping({"","/"})
    public List<Meta> all() {
        return this.metaService.all();
    }

    @PostMapping({"","/"})
    public Meta newMeta(@RequestBody Meta meta) {return this.metaService.save(meta);}

    @GetMapping("/{id}")
    public Meta one(@PathVariable("id") Long id){ return this.metaService.one(id);}

    @PutMapping("/{id}")
    public Meta replaceMeta(@PathVariable("id") Long id, @RequestBody Meta meta) {
        return this.metaService.replace(id, meta);
    }

    @ResponseBody
    @ResponseStatus(HttpStatus.NO_CONTENT)
    @DeleteMapping("/{id}")
    public void deleteMeta(@PathVariable("id") Long id){this.metaService.delete(id);
    }

}
