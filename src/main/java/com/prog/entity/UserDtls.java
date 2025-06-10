package com.prog.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="user")
public class UserDtls {
	
	@Id
	@GeneratedValue(strategy= GenerationType.IDENTITY)
	private int user_id;
	
	private String name;
	private String email;
	private String password;
	
	public UserDtls() {	}
	public UserDtls(int user_id, String name, String email, String password) {
		super();
		this.user_id = user_id;
		this.name = name;
		this.email = email;
		this.password = password;
	}
	
	public int getUser_id() {
		return user_id;
	}
	public void setUser_id(int user_id) {
		this.user_id = user_id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getEmail() { //email
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() { //password
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	@Override
	public String toString() {
		return "UserDetails [user_id=" + user_id + ", name=" + name + ", email=" + email + ", password=" + password
				+ "]";
	}

}

