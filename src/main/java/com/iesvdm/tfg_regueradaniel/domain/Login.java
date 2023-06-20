package com.iesvdm.tfg_regueradaniel.domain;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class Login {
    //@NotBlank
    //@Size(max = 50)
   // @Email
    private String email;

    //@NotBlank
    //@Size(max = 120)
    private String password;
}
