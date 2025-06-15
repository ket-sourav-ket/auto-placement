package DTO;

import com.prog.entity.PlacedStudents.ProjectPlacedStudents;

public class ProjectedStudents implements ProjectPlacedStudents {
	private String college_roll;
	private String name;
	private String gender;
	private String personal_mail;
	private String department;
	private String phone;
	private String company_name;
	private Integer placed_year;
	private Double ctc;
	public ProjectedStudents(String college_roll, String name, String gender,
			String personal_mail, String department,
			String phone, String company_name, Integer placed_year, Double ctc) {
	//	super();
		this.college_roll = college_roll;
		this.name = name;
		this.gender = gender;
		this.personal_mail = personal_mail;
		this.department = department;
		this.phone = phone;
		this.company_name = company_name;
		this.placed_year = placed_year;
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
	public String getDepartment() {
		return department;
	}
	public void setDepartment(String department) {
		this.department = department;
	}
	public String getPhone() {
		return phone;
	}
	public void setPhone(String phone) {
		this.phone = phone;
	}
	public String getCompany_name() {
		return company_name;
	}
	public void setCompany_name(String company_name) {
		this.company_name = company_name;
	}
	public Integer getPlaced_year() {
		return placed_year;
	}
	public void setPlaced_year(Integer placed_year) {
		this.placed_year = placed_year;
	}
	public Double getCtc() {
		return ctc;
	}
	public void setCtc(Double ctc) {
		this.ctc = ctc;
	}
	@Override
	public String toString() {
		return "ProjectedStudents [college_roll=" + college_roll + ", name=" + name + ", gender=" + gender
				+ ", personal_mail=" + personal_mail + ", department=" + department + ", phone=" + phone
				+ ", company_name=" + company_name + ", placed_year=" + placed_year + ", ctc=" + ctc + "]";
	}
	
	
}
