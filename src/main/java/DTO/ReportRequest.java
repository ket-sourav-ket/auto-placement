package DTO;

import java.util.List;

public class ReportRequest {
	private List<String> stream;
	private List<String> company;
	private List<String> gender;
	private List<Integer> year;
	
	public List<String> getStream() {
		return stream;
	}
	public void setStream(List<String> stream) {
		this.stream = stream;
	}
	public List<String> getCompany() {
		return company;
	}
	public void setCompany(List<String> company) {
		this.company = company;
	}
	public List<String> getGender() {
		return gender;
	}
	public void setGender(List<String> gender) {
		this.gender = gender;
	}
	public List<Integer> getYear() {
		return year;
	}
	public void setYear(List<Integer> year) {
		this.year = year;
	}
	@Override
	public String toString() {
		return "ReportRequest [stream=" + stream + ", company=" + company
				+ ", gender=" + gender + ", year=" + year + "]";
	}
		
	
	
	
	

}
