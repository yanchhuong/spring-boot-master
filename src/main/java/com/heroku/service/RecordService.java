package com.heroku.service;

import java.util.List;

import com.heroku.demo.Record;

public interface RecordService {

	List<Record> showAll();
	void delete(long id);
	void insertRecord(Record rec);
}
