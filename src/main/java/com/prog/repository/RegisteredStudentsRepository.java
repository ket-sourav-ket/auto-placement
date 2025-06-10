package com.prog.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.prog.entity.RegisteredStudents;

@Repository
public interface RegisteredStudentsRepository extends JpaRepository<RegisteredStudents,String>{

}
