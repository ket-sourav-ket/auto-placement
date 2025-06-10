package com.prog.entity;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="Student_Registration")
public class RegisteredStudents {
	@Id
	private String collegeRoll;
	
	private String fullname;
	private String genderChoice;
	private String stream;
	private String universityRoll;
	private String session;
	private String qualification;
	private Double marks;
	private Boolean backlogChoice;
	private String contact;
	private Boolean relocateChoice;
	private String techSkill;
	
	public RegisteredStudents() {}
	
	public RegisteredStudents(String collegeRoll, String fullname, String genderChoice, String stream,
			String universityRoll, String session, String qualification, Double marks, Boolean backlogChoice,
			String contact, Boolean relocateChoice, String techSkill) {
		super();
		this.collegeRoll = collegeRoll;
		this.fullname = fullname;
		this.genderChoice = genderChoice;
		this.stream = stream;
		this.universityRoll = universityRoll;
		this.session = session;
		this.qualification = qualification;
		this.marks = marks;
		this.backlogChoice = backlogChoice;
		this.contact = contact;
		this.relocateChoice = relocateChoice;
		this.techSkill = techSkill;
	}
	public String getCollegeRoll() {
		return collegeRoll;
	}
	public void setCollegeRoll(String collegeRoll) {
		this.collegeRoll = collegeRoll;
	}
	public String getFullname() {
		return fullname;
	}
	public void setFullname(String fullname) {
		this.fullname = fullname;
	}
	public String getGenderChoice() {
		return genderChoice;
	}
	public void setGenderChoice(String genderChoice) {
		this.genderChoice = genderChoice;
	}
	public String getStream() {
		return stream;
	}
	public void setStream(String stream) {
		this.stream = stream;
	}
	public String getUniversityRoll() {
		return universityRoll;
	}
	public void setUniversityRoll(String universityRoll) {
		this.universityRoll = universityRoll;
	}
	public String getSession() {
		return session;
	}
	public void setSession(String session) {
		this.session = session;
	}
	public String getQualification() {
		return qualification;
	}
	public void setQualification(String qualification) {
		this.qualification = qualification;
	}
	public Double getMarks() {
		return marks;
	}
	public void setMarks(Double marks) {
		this.marks = marks;
	}
	public Boolean getBacklogChoice() {
		return backlogChoice;
	}
	public void setBacklogChoice(Boolean backlogChoice) {
		this.backlogChoice = backlogChoice;
	}
	public String getContact() {
		return contact;
	}
	public void setContact(String contact) {
		this.contact = contact;
	}
	public Boolean getRelocateChoice() {
		return relocateChoice;
	}
	public void setRelocateChoice(Boolean relocateChoice) {
		this.relocateChoice = relocateChoice;
	}
	public String getTechSkill() {
		return techSkill;
	}
	public void setTechSkill(String techSkill) {
		this.techSkill = techSkill;
	}
	@Override
	public String toString() {
		return "RegisteredStudents [collegeRoll=" + collegeRoll + ", fullname=" + fullname + ", genderChoice="
				+ genderChoice + ", stream=" + stream + ", universityRoll=" + universityRoll + ", session=" + session
				+ ", qualification=" + qualification + ", marks=" + marks + ", backlogChoice=" + backlogChoice
				+ ", contact=" + contact + ", relocateChoice=" + relocateChoice + ", techSkill=" + techSkill + "]";
	}


}
