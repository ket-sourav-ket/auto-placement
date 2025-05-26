package com.prog.entity;
import java.util.Date;
import jakarta.persistence.*;

@Entity
@Table(name="Placed_Students")
public class PlacedStudents {
	
	@Id
	private String college_roll;
	
	private String name;
	private String university_roll;
	private String personal_mail;
	private String company_name;
	private Date placed_date;
	private String job_role;
	private Double ctc;
	
	public PlacedStudents(String college_roll, String name, String university_roll, String personal_mail,
			String company_name, Date placed_date, String job_role, Double ctc) {
		super();
		this.college_roll = college_roll;
		this.name = name;
		this.university_roll = university_roll;
		this.personal_mail = personal_mail;
		this.company_name = company_name;
		this.placed_date = placed_date;
		this.job_role = job_role;
		this.ctc = ctc;
	}

	public String getCollege_roll() {
		return college_roll;
	}

	public void setCollege_roll(String college_roll) {
		this.college_roll = college_roll;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getUniversity_roll() {
		return university_roll;
	}

	public void setUniversity_roll(String university_roll) {
		this.university_roll = university_roll;
	}

	public String getPersonal_mail() {
		return personal_mail;
	}

	public void setPersonal_mail(String personal_mail) {
		this.personal_mail = personal_mail;
	}

	public String getCompany_name() {
		return company_name;
	}

	public void setCompany_name(String company_name) {
		this.company_name = company_name;
	}

	public Date getPlaced_date() {
		return placed_date;
	}

	public void setPlaced_date(Date placed_date) {
		this.placed_date = placed_date;
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

	@Override
	public String toString() {
		return "PlacedStudents [college_roll=" + college_roll + ", name=" + name + ", university_roll="
				+ university_roll + ", personal_mail=" + personal_mail + ", company_name=" + company_name
				+ ", placed_date=" + placed_date + ", job_role=" + job_role + ", ctc=" + ctc + "]";
	}
	
	
}
