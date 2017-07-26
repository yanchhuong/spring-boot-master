package com.code.model;
import java.io.Serializable;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity(name = "category")
@Table(name="category")
public class CategoryBean_R001 implements Serializable { 
	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	
	@Column(name="catgid")
	private long catgid;  
	
	@Column(name="nm_eng")	
	private String nm_eng;
	
	@Column(name="nm_kh")	
	private String nm_kh;
	
	@Column(name="parentid")	
	private long parentid;
	
	@Column(name="lvl")	
	private String lvl;
	
	@Column(name="pid")	
	private long pid;
	
	@Column(name="usercd")	
	private String usercd;
	
	@Column(name="seq")	
	private int seq;
	
	@Column(name="regdate")	
	private String regdate;
	
	@Column(name="vscatgid")	
	private int vscatgid;
	
	@Column(name="randname")	
	private String randname;
	
	@Column(name="fullengname")	
	private String fullengname;
	
	@Column(name="fullkhname")	
	private String fullkhname;
	
	public String getFullengname() {
		return fullengname;
	}

	public void setFullengname(String fullengname) {
		this.fullengname = fullengname;
	}

	public String getFullkhname() {
		return fullkhname;
	}

	public void setFullkhname(String fullkhname) {
		this.fullkhname = fullkhname;
	}

	public String getRandname() {
		return randname;
	}

	public void setRandname(String randname) {
		this.randname = randname;
	}

	public int getVscatgid() {
		return vscatgid;
	}

	public void setVscatgid(int vscatgid) {
		this.vscatgid = vscatgid;
	}

	public long getCatgid() {
		return catgid;
	}

	public int getSeq() {
		return seq;
	}

	public void setSeq(int seq) {
		this.seq = seq;
	}

	public String getRegdate() {
		return regdate;
	}

	public void setRegdate(String regdate) {
		this.regdate = regdate;
	}

	public void setParentid(long parentid) {
		this.parentid = parentid;
	}

	public void setCatgid(long catgid) {
		this.catgid = catgid;
	}
	public String getNm_eng() {
		return nm_eng;
	}

	public void setNm_eng(String nm_eng) {
		this.nm_eng = nm_eng;
	}

	public String getNm_kh() {
		return nm_kh;
	}

	public void setNm_kh(String nm_kh) {
		this.nm_kh = nm_kh;
	}

	public long getParentid() {
		return parentid;
	}

	
	public String getLvl() {
		return lvl;
	}

	public void setLvl(String lvl) {
		this.lvl = lvl;
	}

	public long getPid() {
		return pid;
	}

	public void setPid(long pid) {
		this.pid = pid;
	}

	public String getUsercd() {
		return usercd;
	}

	public void setUsercd(String usercd) {
		this.usercd = usercd;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}


	
	
}  