package com.prog.entity;
import java.util.Date;
import jakarta.persistence.*;

@Entity
@Table(name="Company_Details")
public class CompanyDetails {
	
		@Id
		@GeneratedValue(strategy= GenerationType.IDENTITY)
		private int company_id;
		
		private String company_name;
		private Date drive_date;
		private String job_role;
		private int appeared_students;
		
		@OneToOne
		@JoinColumn(name="file_id")
		private FileUpload jdFile;
		
		public CompanyDetails(int company_id, String company_name, Date drive_date, String job_role,
				int appeared_students, int selected_candidates) {
			super();
			this.company_id = company_id;
			this.company_name = company_name;
			this.drive_date = drive_date;
			this.job_role = job_role;
			this.appeared_students = appeared_students;
		}
		
		public int getCompany_id() {
			return company_id;
		}
		public void setCompany_id(int company_id) {
			this.company_id = company_id;
		}
		public String getCompany_name() {
			return company_name;
		}
		public void setCompany_name(String company_name) {
			this.company_name = company_name;
		}
		public Date getDrive_date() {
			return drive_date;
		}
		public void setDrive_date(Date drive_date) {
			this.drive_date = drive_date;
		}
		public String getJob_role() {
			return job_role;
		}
		public void setJob_role(String job_role) {
			this.job_role = job_role;
		}
		public int getAppeared_students() {
			return appeared_students;
		}
		public void setAppeared_students(int appeared_students) {
			this.appeared_students = appeared_students;
		}
		public FileUpload getJdFile() {
			return jdFile;
		}

		public void setJdFile(FileUpload jdFile) {
			this.jdFile = jdFile;
		}

		@Override
		public String toString() {
			return "CompanyDetails [company_id=" + company_id + ", company_name=" + company_name + ", drive_date="
					+ drive_date + ", job_role=" + job_role + ", appeared_students=" + appeared_students
					+ ", jdFile=" + jdFile + "]";
			}

		
}
