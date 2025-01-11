package com.gestion.absence.absenceapp.abseneceapp.dtos;
import com.gestion.absence.absenceapp.abseneceapp.models.AbsenceType;
import lombok.*;


import java.time.LocalDate;
@Getter @Setter @NoArgsConstructor @AllArgsConstructor
public class NewAbsenceDTO {
  private double absnumber;
  private AbsenceType type;
  private LocalDate date;
  private String employeCode;
}
