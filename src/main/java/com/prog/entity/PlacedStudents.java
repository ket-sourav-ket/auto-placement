package com.prog.entity;
import jakarta.persistence.*;



@Entity
@Table(name="Placed_Students")
public class PlacedStudents {
	
	public interface ProjectPlacedStudents{
		String getCollege_roll();
		String getName();
		String getGender();
		String getPersonal_mail();
		String getDepartment();
		String getPhone();
		String getCompany_name();
		Integer getPlaced_year();
		Double getCtc();
	}
	
	@Id
	private String College_roll;
	
	private String company_name;
	private int placed_year;
	private String job_role;
	private Double ctc;
	
	@OneToOne
	@MapsId
	private StudentDetails studentDtls;
	public PlacedStudents() {}
	public PlacedStudents(String college_roll, String company_name, int placed_year, String job_role, Double ctc,
			StudentDetails studentDtls) {
		super();
		College_roll = college_roll;
		this.company_name = company_name;
		this.placed_year = placed_year;
		this.job_role = job_role;
		this.ctc = ctc;
		this.studentDtls = studentDtls;
	}

	public String getCollege_roll() {
		return College_roll;
	}

	public void setCollege_roll(String college_roll) {
		this.College_roll = college_roll;
	}

	public String getCompany_name() {
		return company_name;
	}

	public void setCompany_name(String company_name) {
		this.company_name = company_name;
	}

	public int getPlaced_year() {
		return placed_year;
	}

	public void setPlaced_year(int placed_year) {
		this.placed_year = placed_year;
	}

	public String getJob_role() {
		return job_role;
	}

	public void setJob_role(String job_role) {
		this.job_role = job_role;
	}

	public Double getCtc() {
		return ctc;
	}

	public void setCtc(Double ctc) {
		this.ctc = ctc;
	}

	public StudentDetails getStudentDtls() {
		return studentDtls;
	}

	public void setStudentDtls(StudentDetails studentDtls) {
		this.studentDtls = studentDtls;
	}

	@Override
	public String toString() {
		return "PlacedStudents [College_roll=" + College_roll + ", company_name=" + company_name + ", placed_year="
				+ placed_year + ", job_role=" + job_role + ", ctc=" + ctc + ", studentDtls=" + studentDtls + "]";
	}
	
	
	
}
