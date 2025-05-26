package DTO;

public class StudentRes {
	private String name;
	private String department;
	private String personal_mail;
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getDepartment() {
		return department;
	}
	public void setDepartment(String department) {
		this.department = department;
	}
	public String getPersonal_mail() {
		return personal_mail;
	}
	public void setPersonal_mail(String personal_mail) {
		this.personal_mail = personal_mail;
	}
	public StudentRes(String name, String department, String personal_mail) {
		super();
		this.name = name;
		this.department = department;
		this.personal_mail = personal_mail;
	}
	
	

}
