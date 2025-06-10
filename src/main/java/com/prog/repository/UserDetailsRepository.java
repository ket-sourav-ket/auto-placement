package com.prog.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import com.prog.entity.UserDtls;

public interface UserDetailsRepository extends JpaRepository<UserDtls,Integer> {


}