package com.gestion.absence.absenceapp.abseneceapp.repository;

import com.gestion.absence.absenceapp.abseneceapp.models.Absence;
import com.gestion.absence.absenceapp.abseneceapp.models.AbsenceMotif;
import com.gestion.absence.absenceapp.abseneceapp.models.AbsenceType;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDate;
import java.util.List;


public interface AbsenceRepository extends JpaRepository<Absence,Long> {
   List<Absence> findByEmployeCode(String code);


   List<Absence> findByMotif(AbsenceMotif motif);

   List<Absence> findByType(AbsenceType type);
}

