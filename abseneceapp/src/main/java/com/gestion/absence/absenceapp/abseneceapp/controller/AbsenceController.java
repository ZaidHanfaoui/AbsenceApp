package com.gestion.absence.absenceapp.abseneceapp.controller;

import com.gestion.absence.absenceapp.abseneceapp.dtos.NewAbsenceDTO;
import com.gestion.absence.absenceapp.abseneceapp.models.Absence;
import com.gestion.absence.absenceapp.abseneceapp.models.AbsenceMotif;
import com.gestion.absence.absenceapp.abseneceapp.models.AbsenceType;
import com.gestion.absence.absenceapp.abseneceapp.models.Employe;
import com.gestion.absence.absenceapp.abseneceapp.repository.AbsenceRepository;
import com.gestion.absence.absenceapp.abseneceapp.repository.EmployeRepository;
import com.gestion.absence.absenceapp.abseneceapp.service.AbsenceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.awt.*;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.time.LocalDate;
import java.util.List;
@RestController
@CrossOrigin("*")
 public class AbsenceController {
  private EmployeRepository employeRepository;

  private AbsenceRepository absenceRepository;
  @Autowired
  private AbsenceService absenceService;

  public AbsenceController(EmployeRepository employeRepository, AbsenceRepository absenceRepository){
    this.employeRepository = employeRepository;
    this.absenceRepository = absenceRepository;
  }

  @GetMapping(path="/absences")
  public List<Absence> allAbsences(){
    return absenceRepository.findAll();
  }
  @GetMapping(path="/employes/{code}/absences")
  public List<Absence> absencesByEmployee(@PathVariable String code){
    return absenceRepository.findByEmployeCode(code);
  }
  @GetMapping(path="/absences/byMotif")
  public List<Absence> absencesByMotif(@RequestParam AbsenceMotif motif){
    return absenceRepository.findByMotif(motif);
  }
  @GetMapping(path="/absences/byType")
  public List<Absence> absencesByType(@PathVariable AbsenceType type){
    return absenceRepository.findByType(type);
  }

  @GetMapping(path="/absences/{id}")
  public Absence getAbsenceById(@PathVariable Long id){
    return absenceRepository.findById( id).get();
  }
  @GetMapping("/employes")
  public List<Employe> allEmployees(){
    return employeRepository.findAll();
  }
  @GetMapping("/employes/{code}")
  public Employe getEmployeByCode(@PathVariable String code){
    return employeRepository.findByCode(code);

  }
  @GetMapping("/employesByPostId")
  public List<Employe> getEmployesByPostId(String postId){
    return employeRepository.findByPostId(postId);
  }
  @PutMapping("/absences/{id}")
  public Absence updateAbsenceMotif(@RequestParam AbsenceMotif motif,@PathVariable Long id){
    return absenceService.updateAbsenceMotif(motif, id);
  }
  @PostMapping(path="/absences",consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
  public Absence saveAbsence(NewAbsenceDTO newAbsenceDTO) throws IOException {
    return this.absenceService.saveAbsence(newAbsenceDTO);


  }
 }
