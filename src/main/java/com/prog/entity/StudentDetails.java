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
	private String gender;
	private String personal_mail;
	private String college_mail;
	private String university_roll;
	private String department;
	private String degree;
	private String phone;
	private int passout_year;
	private Double secondary;
	private Double higher_secondary;
	private Double under_graduate;
	private Double post_graduate;
	private int yearGap;
	private Boolean backlog_status;
	private String skills;
	
	@OneToOne(mappedBy="studentDtls" )
	private PlacedStudents placedStudent;
	
	public StudentDetails() {}

	public StudentDetails(String college_roll, String name, String gender, String personal_mail, String college_mail,
			String university_roll, String department, String degree, String phone, int passout_year, Double secondary,
			Double higher_secondary, Double under_graduate, Double post_graduate, int yearGap, Boolean backlog_status,
			String skills, PlacedStudents placedStudent) {
		super();
		College_roll = college_roll;
		this.name = name;
		this.gender = gender;
		this.personal_mail = personal_mail;
		this.college_mail = college_mail;
		this.university_roll = university_roll;
		this.department = department;
		this.degree = degree;
		this.phone = phone;
		this.passout_year = passout_year;
		this.secondary = secondary;
		this.higher_secondary = higher_secondary;
		this.under_graduate = under_graduate;
		this.post_graduate = post_graduate;
		this.yearGap = yearGap;
		this.backlog_status = backlog_status;
		this.skills = skills;
		this.placedStudent = placedStudent;
	}

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

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
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

	public String getUniversity_roll() {
		return university_roll;
	}

	public void setUniversity_roll(String university_roll) {
		this.university_roll = university_roll;
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

	public int getYearGap() {
		return yearGap;
	}

	public void setYearGap(int yearGap) {
		this.yearGap = yearGap;
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

	public PlacedStudents getPlacedStudent() {
		return placedStudent;
	}

	public void setPlacedStudent(PlacedStudents placedStudent) {
		this.placedStudent = placedStudent;
	}

	@Override
	public String toString() {
		return "StudentDetails [College_roll=" + College_roll + ", name=" + name + ", gender=" + gender
				+ ", personal_mail=" + personal_mail + ", college_mail=" + college_mail + ", university_roll="
				+ university_roll + ", department=" + department + ", degree=" + degree + ", phone=" + phone
				+ ", passout_year=" + passout_year + ", secondary=" + secondary + ", higher_secondary="
				+ higher_secondary + ", under_graduate=" + under_graduate + ", post_graduate=" + post_graduate
				+ ", yearGap=" + yearGap + ", backlog_status=" + backlog_status + ", skills=" + skills
				+ ", placedStudent=" + placedStudent + "]";
	}
	
}
