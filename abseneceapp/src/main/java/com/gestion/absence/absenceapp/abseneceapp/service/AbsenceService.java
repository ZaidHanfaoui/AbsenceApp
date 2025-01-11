package com.gestion.absence.absenceapp.abseneceapp.service;

import com.gestion.absence.absenceapp.abseneceapp.dtos.NewAbsenceDTO;
import com.gestion.absence.absenceapp.abseneceapp.models.AbsenceMotif;
import com.gestion.absence.absenceapp.abseneceapp.models.AbsenceType;
import com.gestion.absence.absenceapp.abseneceapp.models.Employe;
import com.gestion.absence.absenceapp.abseneceapp.models.Absence;
import com.gestion.absence.absenceapp.abseneceapp.repository.AbsenceRepository;
import com.gestion.absence.absenceapp.abseneceapp.repository.EmployeRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.time.LocalDate;


@Service
@Transactional
public class AbsenceService {
  private AbsenceRepository absenceRepository;
  private EmployeRepository employeRepository;
  public AbsenceService(AbsenceRepository absenceRepository, EmployeRepository employeRepository) {
    this.absenceRepository = absenceRepository;
    this.employeRepository = employeRepository;
  }
  public Absence saveAbsence(NewAbsenceDTO newAbsenceDTO) throws IOException {
    Path folderPath= Paths.get(System.getProperty("user.home"),"enset-data","absences");
    if(Files.exists(folderPath)){
      Files.createDirectories(folderPath);
    }
    Employe employe = employeRepository.findByCode(newAbsenceDTO.getEmployeCode());
    Absence absence =  Absence.builder().
      date(newAbsenceDTO.getDate()).type(newAbsenceDTO.getType()).absnumber(newAbsenceDTO.getAbsnumber()).employe(employe).motif(AbsenceMotif.Maladie).build();

    return absenceRepository.save(absence);

  }
  public Absence updateAbsenceMotif( AbsenceMotif motif,  Long id){
    Absence absence = absenceRepository.findById(id).get();
    absence.setMotif(motif);
    return absenceRepository.save(absence);
  }



}
