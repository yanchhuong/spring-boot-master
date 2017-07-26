package com.code.model;

public class MUserListIn_R001{

	private String keyword;
	private String role;
	private String regdate;
	private String birthdate;
	private boolean enbled;
	public boolean isEnbled() {
		return enbled;
	}
	public void setEnbled(boolean enbled) {
		this.enbled = enbled;
	}
	public String getRole() {
		return role;
	}
	public void setRole(String role) {
		this.role = role;
	}
	

	private String status;
	public String getKeyword() {
		return keyword;
	}
	public void setKeyword(String keyword) {
		this.keyword = keyword;
	}
	public String getRegdate() {
		return regdate;
	}
	public void setRegdate(String regdate) {
		this.regdate = regdate;
	}
	public String getBirthdate() {
		return birthdate;
	}
	public void setBirthdate(String birthdate) {
		this.birthdate = birthdate;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
}
