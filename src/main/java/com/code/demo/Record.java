package com.code.demo;

/*import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;*/

import org.hibernate.validator.constraints.NotEmpty;

/*@Entity*/
public class Record {
/*
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)*/
    private long id;
    @NotEmpty
    private String data;

    public String getData() {
        return data;
    }


    public long getId() {
		return id;
	}


	public void setId(long id) {
		this.id = id;
	}


	public void setData(String data) {
        this.data = data;
    }

}
