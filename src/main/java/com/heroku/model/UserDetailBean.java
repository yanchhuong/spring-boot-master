package com.heroku.model;
public class UserDetailBean extends UserBean {


	public String getFirst() {
		return first;
	}
	public void setFirst(String first) {
		this.first = first;
	}
	public String getLast() {
		return last;
	}
	public void setLast(String last) {
		this.last = last;
	}
	public boolean isSex() {
		return sex;
	}
	public void setSex(boolean sex) {
		this.sex = sex;
	}
	public String getBirthOfDate() {
		return birthOfDate;
	}
	public void setBirthOfDate(String birthOfDate) {
		this.birthOfDate = birthOfDate;
	}
	public String getPhone() {
		return phone;
	}
	public void setPhone(String phone) {
		this.phone = phone;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getLocat_id() {
		return locat_id;
	}
	public void setLocat_id(String locat_id) {
		this.locat_id = locat_id;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getRegisterDate() {
		return registerDate;
	}
	public void setRegisterDate(String registerDate) {
		this.registerDate = registerDate;
	}
	public String getProfile_fname() {
		return profile_fname;
	}
	public void setProfile_fname(String profile_fname) {
		this.profile_fname = profile_fname;
	}

    private String first;
    private String last;
    private boolean sex;
    private String birthOfDate;
    private String phone;
    private String email;
    private String locat_id;
    private String address;
    private String registerDate ;
    private String profile_fname;
	

}
