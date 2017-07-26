package com.code.dao;

import java.util.List;

import com.code.demo.Record;

public interface RecordDao {
	void insertRecord(Record rec);
	void deletebyId (long id);
	List<Record> loadAll();
    
}
