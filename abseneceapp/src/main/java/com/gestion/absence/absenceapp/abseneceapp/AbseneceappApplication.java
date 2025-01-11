package com.gestion.absence.absenceapp.abseneceapp;
import com.gestion.absence.absenceapp.abseneceapp.models.AbsenceMotif;
import com.gestion.absence.absenceapp.abseneceapp.models.AbsenceType;
import com.gestion.absence.absenceapp.abseneceapp.models.Employe;
import com.gestion.absence.absenceapp.abseneceapp.models.Absence;
import com.gestion.absence.absenceapp.abseneceapp.repository.AbsenceRepository;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import com.gestion.absence.absenceapp.abseneceapp.repository.EmployeRepository;

import java.sql.Date;
import java.time.LocalDate;
import java.util.Random;
import java.util.UUID;
@SpringBootApplication
public class AbseneceappApplication {

  public static void main(String[] args) {
    SpringApplication.run(AbseneceappApplication.class, args);
  }

  @Bean
  CommandLineRunner commandLineRunner(EmployeRepository employeRepository, AbsenceRepository absenceRepository) {
    return args -> {

      employeRepository.save(Employe.builder().id(UUID.randomUUID().toString()).firstName("Mohamed").lastName("Ali").code("112233").postId("ING")
        .build());
      employeRepository.save(Employe.builder().id(UUID.randomUUID().toString()).firstName("Nabil").lastName("Dolmi").code("114433").postId("ING")
        .build());
      employeRepository.save(Employe.builder().id(UUID.randomUUID().toString()).firstName("Malika").lastName("molatdjaj").code("112244").postId("TEC")
        .build());
      employeRepository.save(Employe.builder().id(UUID.randomUUID().toString()).firstName("Sa3id").lastName("busila").code("442233").postId("MEN")
        .build());
      employeRepository.save(Employe.builder().id(UUID.randomUUID().toString()).firstName("anouar").lastName("mohi").code("12233").postId("I" +
          "G")
        .build());
      employeRepository.save(Employe.builder().id(UUID.randomUUID().toString()).firstName("sumo").lastName("Digor").code("14433").postId("IG")
        .build());
      employeRepository.save(Employe.builder().id(UUID.randomUUID().toString()).firstName("morad").lastName("molatdjaj").code("12244").postId("TC")
        .build());
      employeRepository.save(Employe.builder().id(UUID.randomUUID().toString()).firstName("So3aad").lastName("bla").code("44233").postId("MN")
        .build());
      AbsenceType[] absenceTypes = AbsenceType.values();
      Random random = new Random();
      employeRepository.findAll().forEach(st -> {
        for (int i = 0; i < 1; i++) {
          int index = random.nextInt(absenceTypes.length);
          Absence absence = Absence.builder().
            absnumber(10 + (int) (Math.random() + 2)).
            type(absenceTypes[index]).
            motif(AbsenceMotif.Maladie).
            date(LocalDate.now()).
            employe(st).
            build();
          absenceRepository.save(absence);
        }
      });
    };
  }
}




