package com.gestion.absence.absenceapp.abseneceapp.models;

import jakarta.persistence.*;
import lombok.*;

import java.sql.Date;

@Entity


@NoArgsConstructor @AllArgsConstructor @Getter @Setter @ToString @Builder
public class Employe {



    @Id
    private String id;

    private String firstName;

    private String lastName;

    private String code;

    private String postId;





}


