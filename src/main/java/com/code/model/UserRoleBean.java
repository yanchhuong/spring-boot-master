package com.code.model;

public class UserRoleBean {
  private long id ;
  public long getId() {
	return id;
}
public void setId(long id) {
	this.id = id;
}
public String getUsername() {
	return username;
}
public void setUsername(String username) {
	this.username = username;
}
public String getRole() {
	return role;
}
public void setRole(String role) {
	this.role = role;
}
public String getUserCd() {
	return userCd;
}
public void setUserCd(String userCd) {
	this.userCd = userCd;
}
private String username;
  private String role="ROLE_USER";
  private String userCd;
    

}
