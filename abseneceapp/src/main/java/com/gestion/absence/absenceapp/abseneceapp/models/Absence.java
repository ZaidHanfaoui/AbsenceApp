package com.gestion.absence.absenceapp.abseneceapp.models;
import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;


@SuppressWarnings("unused")

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
@Builder
public class Absence {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;


    private double absnumber;

    private AbsenceType type;

    @ManyToOne
    private Employe employe;

    private LocalDate date;

    private AbsenceMotif motif;



}
