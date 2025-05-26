package com.prog.entity;

import java.util.Arrays;
import jakarta.persistence.*;

@Entity
@Table(name="Job_Description")
public class FileUpload {
	
	@Id
	@GeneratedValue(strategy= GenerationType.IDENTITY)
	private int document_id;
	
	@Lob
	@Column(columnDefinition = "longblob")
	private byte[] originalfile;
	private String filename;
	private String filetype;
	

	public FileUpload() {	}
	public FileUpload(byte[] originalfile, String filename, String filetype) {
		super();
		this.originalfile = originalfile;
		this.filename = filename;
		this.filetype = filetype;
	}

	public int getDocument_id() {
		return document_id;
	}

	public void setDocument_id(int document_id) {
		this.document_id = document_id;
	}

	public byte[] getOriginalfile() {
		return originalfile;
	}

	public void setOriginalfile(byte[] originalfile) {
		this.originalfile = originalfile;
	}

	public String getFilename() {
		return filename;
	}

	public void setFilename(String filename) {
		this.filename = filename;
	}

	public String getFiletype() {
		return filetype;
	}

	public void setFiletype(String filetype) {
		this.filetype = filetype;
	}



	@Override
	public String toString() {
		return "FileUpload [document_id=" + document_id + ", originalfile=" + Arrays.toString(originalfile)
				+ ", filename=" + filename + ", fileType=" + filetype + "]";
	}
	
}
