package com.gestion.absence.absenceapp.abseneceapp.repository;

import com.gestion.absence.absenceapp.abseneceapp.models.Employe;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;
import java.util.Optional;

public interface EmployeRepository extends JpaRepository<Employe, String> {
  Employe findByCode(String code);
  List<Employe> findByPostId(String postId);

}

