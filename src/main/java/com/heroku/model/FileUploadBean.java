package com.heroku.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity(name = "filepicture")
@Table(name="filepicture")
public class FileUploadBean  implements Serializable {
	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="pid")
	private long pid;  
	@Column(name="orname")
	private  String orname  ;
	@Column(name="randname")
	private	String  randname ;
	@Column(name="regdate")
	private	String  regdate ;
	@Column(name="path")
	private	 String path ;
	@Column(name="type")	
	private	 String type;
	@Column(name="size")	
	private	long size ;
	
	@Column(name="prid")
	private	 long  prid ;
	
	@Column(name="username")
	private	 String username ;
	public long getPid() {
		return pid;
	}
	public void setPid(long pid) {
		this.pid = pid;
	}
	public String getOrname() {
		return orname;
	}
	public void setOrname(String orname) {
		this.orname = orname;
	}
	public String getRandname() {
		return randname;
	}
	public void setRandname(String randname) {
		this.randname = randname;
	}
	public String getRegdate() {
		return regdate;
	}
	public void setRegdate(String regdate) {
		this.regdate = regdate;
	}
	public String getPath() {
		return path;
	}
	public void setPath(String path) {
		this.path = path;
	}
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	public long getSize() {
		return size;
	}
	public void setSize(long size) {
		this.size = size;
	}
	public long getPrid() {
		return prid;
	}
	public void setPrid(long prid) {
		this.prid = prid;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public static long getSerialversionuid() {
		return serialVersionUID;
	}
	
			
	
}
