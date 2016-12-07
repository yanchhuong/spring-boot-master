package com.heroku.dao;

import java.util.List;

import com.heroku.demo.Record;

public interface RecordDao {
	void insertRecord(Record rec);
	void deletebyId (long id);
	List<Record> loadAll();
    
}
