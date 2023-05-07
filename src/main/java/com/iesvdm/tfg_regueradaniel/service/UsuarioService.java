package com.iesvdm.tfg_regueradaniel.service;

import com.iesvdm.tfg_regueradaniel.domain.Usuario;
import com.iesvdm.tfg_regueradaniel.repository.UsuarioRepository;
import com.iesvdm.tfg_regueradaniel.exception.UsuarioNotFoundException;
import org.jetbrains.annotations.NotNull;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.*;
import static java.util.Comparator.*;
import static java.util.stream.Collectors.*;
@Service
public class UsuarioService {
    private UsuarioRepository usuarioRepository;
    private PasswordEncoder passwordEncoder;

    public UsuarioService(UsuarioRepository usuarioRepository, PasswordEncoder passwordEncoder){
        this.usuarioRepository = usuarioRepository;
        this.passwordEncoder = passwordEncoder;
    }

    public List<Usuario> all(){return this.usuarioRepository.findAll();}

    public Usuario save(@NotNull Usuario usuario){
        //encripta pass y guarda el usuario
        usuario.setPassword(passwordEncoder.encode(usuario.getPassword()));
        return this.usuarioRepository.save(usuario);
    }

    public Usuario one(Long id){
        return this.usuarioRepository.findById(id)
                .orElseThrow(() -> new UsuarioNotFoundException(id));
    }

    public Usuario replace(Long id, Usuario usuario){
        return this.usuarioRepository.findById(id).map( p -> (id.equals(usuario.getId()) ?
                        this.usuarioRepository.save(usuario) : null))
        .orElseThrow(() -> new UsuarioNotFoundException(id));
    }

    public void delete(Long id){
        this.usuarioRepository.findById(id).map(p ->{
            this.usuarioRepository.delete(p);
            return p;
        }).orElseThrow(() -> new UsuarioNotFoundException(id));
    }


}
