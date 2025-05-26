package com.prog.repository;

import java.util.Collection;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.prog.entity.StudentDetails;
import com.prog.entity.StudentDetails.ProjectStudentDetails;



@Repository
public interface StudentDetailsRepository extends JpaRepository<StudentDetails,String>{
	@Query
	(value = "SELECT SD.personal_mail as personal_mail , SD.skills as skills, SD.name as name , SD.department as department FROM StudentDetails SD WHERE SD.degree IN :degrees AND SD.department IN :departments AND SD.backlog_status IN :backlogvalue AND (SD.secondary + SD.higher_secondary + SD.post_graduate + SD.under_graduate)/4 >= :overall AND SD.passout_year = :year AND SD.yearGap <= :gap")
	List<ProjectStudentDetails> findEmails(@Param("degrees")List<String> degrees, @Param("departments")List<String> departments, @Param("backlogvalue")List<Boolean> backlogvalue, @Param("overall")double overall, @Param("year")int year , @Param("gap")int gap);
	
	@Query(value = "SELECT st FROM StudentDetails st WHERE st.degree IN :degrees")
	List<StudentDetails> findByDegree(@Param("degrees") Collection<String> degrees);
}
