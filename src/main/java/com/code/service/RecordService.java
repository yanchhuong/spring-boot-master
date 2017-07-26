package com.code.service;

import java.util.List;

import com.code.demo.Record;

public interface RecordService {

	List<Record> showAll();
	void delete(long id);
	void insertRecord(Record rec);
}
