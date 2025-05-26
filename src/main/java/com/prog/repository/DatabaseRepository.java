package com.prog.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.prog.entity.FileUpload;

@Repository
public interface DatabaseRepository extends JpaRepository<FileUpload,Integer> {

}