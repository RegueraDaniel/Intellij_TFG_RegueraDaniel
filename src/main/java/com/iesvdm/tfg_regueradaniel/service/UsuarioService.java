package com.iesvdm.tfg_regueradaniel.service;

import com.iesvdm.tfg_regueradaniel.domain.Categoria;
import com.iesvdm.tfg_regueradaniel.domain.Login;
import com.iesvdm.tfg_regueradaniel.domain.Usuario;
import com.iesvdm.tfg_regueradaniel.exception.EmailUsedException;
import com.iesvdm.tfg_regueradaniel.exception.NameUsedException;
import com.iesvdm.tfg_regueradaniel.repository.CategoriaRepository;
import com.iesvdm.tfg_regueradaniel.repository.UsuarioRepository;
import com.iesvdm.tfg_regueradaniel.exception.UsuarioNotFoundException;
import org.jetbrains.annotations.NotNull;
import org.springframework.stereotype.Service;

import com.iesvdm.tfg_regueradaniel.security.SecurityConfig;

import java.math.BigDecimal;
import java.util.*;
@Service
public class UsuarioService {
    private UsuarioRepository usuarioRepository;
    private SecurityConfig securityConfig;
    private CategoriaService categoriaService;
    private CategoriaRepository categoriaRepository;

    public UsuarioService(UsuarioRepository usuarioRepository,
                          SecurityConfig securityConfig,
                          CategoriaRepository categoriaRepository,
                          CategoriaService categoriaService){

        this.usuarioRepository = usuarioRepository;
        this.securityConfig = securityConfig;
        this.categoriaRepository = categoriaRepository;
        this.categoriaService = categoriaService;
    }

    /*GENERICOS PARA PRUEBAS ---ANULAR PARA USO NORMAL---**/
    public List<Usuario> all(){return this.usuarioRepository.findAll();}

    /*01 REGISTRO**/
    public Usuario save(@NotNull Usuario usuario){
        //falseo id para reusar la misma funcion de comprobar correo y luego lo devuelvo a null
        usuario.setId(-1L);
        checkEmail(usuario);
        usuario.setId(null);

        usuario.setPassword(securityConfig.encrypt(usuario.getPassword()));
        usuario.setMaxGastoGlobal(new BigDecimal("0"));

        this.usuarioRepository.save(usuario);
        //carga catecorías predeficinas
        this.categoriasPredefinidas(usuario);
        System.out.println("2. usuario nuevo id dif null " + (usuario.getId() != null) );
        //this.usuarioRepository.save(usuario);
        return usuario;
    }

    //inicializar categorias predefinidas; se llama al crear usuario
    private void categoriasPredefinidas(Usuario usuario){
        System.out.println("entrando en categoriasPredefinidas");
        this.categoriaService.save(new Categoria
                (null, "moda", "iconoModa", "color1", true, new BigDecimal("0"), usuario, null));
        this.categoriaService.save
                (new Categoria(null, "pago", "iconopago", "color2", true, new BigDecimal("0"), usuario, null));
        this.categoriaService.save
                (new Categoria(null, "hogar", "iconohogar", "color3", true, new BigDecimal("0"), usuario, null));
        this.categoriaService.save
                (new Categoria(null, "compras", "iconocompras", "color4", true, new BigDecimal("0"), usuario, null));
        this.categoriaService.save
                (new Categoria(null, "ocio", "iconoocio", "color5", true, new BigDecimal("0"), usuario, null));
        this.categoriaService.save
                (new Categoria(null, "salud", "iconosalud", "color6", true, new BigDecimal("0"), usuario, null));
        this.categoriaService.save
                (new Categoria(null, "transporte", "iconotransp", "color7", true, new BigDecimal("0"), usuario, null));
        this.categoriaService.save
                (new Categoria(null, "restauracion", "iconorestau", "color8", true, new BigDecimal("0"), usuario, null));
    }

    /*02 LOGIN**/
    public Usuario loginComfirm(Login login){
        String correo = login.getEmail();
        System.out.println(login);
        System.out.println("correo: "+correo);
        Usuario userLogin = null;

        if(this.usuarioRepository.findByEmail(correo).isPresent()){
            Usuario usuarioConCorreo = this.usuarioRepository.findByEmail(correo).get();
            System.out.println("usuario id: "+usuarioConCorreo.getId());
            if (usuarioConCorreo.getPassword().equals(securityConfig.encrypt(login.getPassword()))){
                System.out.println("usuario pass encript: "+usuarioConCorreo.getPassword());
                userLogin = usuarioConCorreo;
            }
        }
        return userLogin;
    }

    /*10 DASHBOARD ***/
    public Integer obtenerGlobal(Long id){
        Usuario miUsuario = this.usuarioRepository.findById(id).get();
        return miUsuario.getMaxGastoGlobal().intValue();
    }

    /*public Integer obtenerGlobalConConsultas(Long id) {
    Usuario usuario = usuarioRepository.findById(id);
    usuario.setEstadisticasMes(categoriaService.estadisticasMes(id));
    usuario.setMisGastosMaxInicializados(categoriaService.misGastosMaxInicializados(id));
    usuario.setHistorico(categoriaService.historico(id));
    usuario.setGlobal(obtenerGlobal(id));
    return usuario.getGlobal();
    }*/

    private void checkEmail(Usuario usuario){
        Optional<Usuario> yaExisteMail;
        if(usuario.getId() == -1){
            yaExisteMail = this.usuarioRepository.findByEmail(usuario.getEmail());
        }else{
            yaExisteMail = this.usuarioRepository.findByEmailEqualsAndIdNot(usuario.getEmail(), usuario.getId());
        }
        if(yaExisteMail.isPresent()){
            throw new EmailUsedException();
        }
    }

    public Usuario one(Long id){
        return this.usuarioRepository.findById(id)
                .orElseThrow(() -> new UsuarioNotFoundException(id));
    }

    public Usuario replace(Long id, Usuario usuario){
        checkEmail(usuario);
        return this.usuarioRepository.findById(id).map( p -> (id.equals(usuario.getId()) ?
                        this.usuarioRepository.save(usuario) : null))
        .orElseThrow(() -> new UsuarioNotFoundException(id));
    }

    public void delete(Long id){
        Usuario usuario = this.usuarioRepository.findById(id)
                .orElseThrow(() -> new UsuarioNotFoundException(id));

        // Eliminar todas las categorías asociadas al usuario
        List<Categoria> categorias = usuario.getCategorias();
        for (Categoria categoria : categorias) {
            this.categoriaService.delete(categoria.getId());
        }

        this.usuarioRepository.delete(usuario);
    }


    /* 13 PRESUPUESTOS ***/
    public Categoria actualizarMax(Long idUsu, Categoria categoria){
        String nombreCat = categoria.getNombreCat();
        Integer importe = categoria.getMaxMensualCat().intValue();
        if(importe < 0){ importe = 0; }
        /*
        if(nombreCat.equalsIgnoreCase("global")){
            this.actualizarGlobal(idUsu, importe);
            return categoria;
        }*/

        if(this.categoriaRepository.findByNombreCatEqualsAndIdNotAndUsuarioId(nombreCat, categoria.getId(), idUsu).isPresent()){
            throw new NameUsedException();}

        BigDecimal importeBig = new BigDecimal(""+importe);
        Categoria categoriaAactualizar = this.categoriaRepository.findById(categoria.getId()).get();
        categoriaAactualizar.setMaxMensualCat(importeBig);

        return this.categoriaService.replaceInternal( categoriaAactualizar.getId(), categoriaAactualizar);
    }
    public Categoria maxCero(Long idUsu, Categoria categoria){
        /*
        if(categoria.getNombreCat().equalsIgnoreCase("global")){
            this.globalCero(idUsu);
            return categoria;
        }*/
        categoria.setMaxMensualCat(BigDecimal.ZERO);
        return this.categoriaService.replaceInternal(categoria.getId(), categoria);
    }
    public Usuario actualizarGlobal(Long id, Integer importe){
        System.out.println("actualizar global");
        Usuario usuario = null;
        if(!this.usuarioRepository.findById(id).isPresent() || importe < 0){
            return usuario;
        }
        BigDecimal bigImporte = new BigDecimal(""+importe);
        usuario = this.usuarioRepository.findById(id).get();
        usuario.setMaxGastoGlobal(bigImporte);
        return this.usuarioRepository.save(usuario);
    }

    public Usuario globalCero(Long id){
        return this.actualizarGlobal( id, 0);
    }
}
