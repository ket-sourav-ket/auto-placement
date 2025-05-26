package com.prog.entity;
import jakarta.persistence.*;

@Entity
@Table(name="Student_Details")
public class StudentDetails {
	public interface ProjectStudentDetails{
		String getPersonal_mail();
		String getSkills();
		String getName();
		String getDepartment();
	}
	@Id
	private String College_roll;
	
	private String name;
	private String university_roll;
	private String personal_mail;
	private String college_mail;
	private String department;
	private String degree;
	private String phone;
	private int passout_year;
	private Double secondary;
	private int yearGap;
	private Double higher_secondary;
	private Double under_graduate;
	private Double post_graduate;
	private Boolean backlog_status;
	private String skills;
	
	
	public StudentDetails() {}


	public String getCollege_roll() {
		return College_roll;
	}


	public void setCollege_roll(String college_roll) {
		College_roll = college_roll;
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


	public String getCollege_mail() {
		return college_mail;
	}


	public void setCollege_mail(String college_mail) {
		this.college_mail = college_mail;
	}


	public String getDepartment() {
		return department;
	}


	public void setDepartment(String department) {
		this.department = department;
	}


	public String getDegree() {
		return degree;
	}


	public void setDegree(String degree) {
		this.degree = degree;
	}


	public String getPhone() {
		return phone;
	}


	public void setPhone(String phone) {
		this.phone = phone;
	}


	public int getPassout_year() {
		return passout_year;
	}


	public void setPassout_year(int passout_year) {
		this.passout_year = passout_year;
	}


	public Double getSecondary() {
		return secondary;
	}


	public void setSecondary(Double secondary) {
		this.secondary = secondary;
	}


	public int getYearGap() {
		return yearGap;
	}


	public void setYearGap(int yearGap) {
		this.yearGap = yearGap;
	}


	public Double getHigher_secondary() {
		return higher_secondary;
	}


	public void setHigher_secondary(Double higher_secondary) {
		this.higher_secondary = higher_secondary;
	}


	public Double getUnder_graduate() {
		return under_graduate;
	}


	public void setUnder_graduate(Double under_graduate) {
		this.under_graduate = under_graduate;
	}


	public Double getPost_graduate() {
		return post_graduate;
	}


	public void setPost_graduate(Double post_graduate) {
		this.post_graduate = post_graduate;
	}


	public Boolean getBacklog_status() {
		return backlog_status;
	}


	public void setBacklog_status(Boolean backlog_status) {
		this.backlog_status = backlog_status;
	}


	public String getSkills() {
		return skills;
	}


	public void setSkills(String skills) {
		this.skills = skills;
	}


	@Override
	public String toString() {
		return "StudentDetails [College_roll=" + College_roll + ", name=" + name + ", university_roll="
				+ university_roll + ", personal_mail=" + personal_mail + ", college_mail=" + college_mail
				+ ", department=" + department + ", degree=" + degree + ", phone=" + phone + ", passout_year="
				+ passout_year + ", secondary=" + secondary + ", yearGap=" + yearGap + ", higher_secondary="
				+ higher_secondary + ", under_graduate=" + under_graduate + ", post_graduate=" + post_graduate
				+ ", backlog_status=" + backlog_status + ", skills=" + skills + "]";
	}


}
