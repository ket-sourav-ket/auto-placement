package com.prog.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.prog.entity.PlacedStudents;
import com.prog.entity.PlacedStudents.ProjectPlacedStudents;
import com.prog.entity.StudentDetails;

@Repository
public interface PlacedStudentsRepository extends JpaRepository<PlacedStudents , String> {
	//SDS.name,SDS.College_roll,SDS.gender,SDS.personal_mail,SDS.department,SDS.phone,PS.company_name,PS.placed_year,PS.ctc
	
	@Query(value = "SELECT SDS.name as name ,SDS.College_roll as college_roll ,SDS.gender as gender,SDS.personal_mail as personal_mail ,SDS.department as department,SDS.phone as phone ,PS.company_name as company_name ,PS.placed_year as placed_year ,PS.ctc as ctc FROM PlacedStudents PS INNER JOIN PS.studentDtls SDS WHERE SDS.department IN :streams AND PS.placed_year IN :years AND PS.company_name IN :company AND SDS.gender IN :gender ")
	List<ProjectPlacedStudents> getFilteredList(@Param("streams")List<String> streams, @Param("years")List<Integer> years ,@Param("company") List<String> company, @Param("gender")List<String> gender );
	
	@Query(value = "SELECT SDS FROM PlacedStudents PS INNER JOIN PS.studentDtls SDS")
	List<StudentDetails> getList();
	
}