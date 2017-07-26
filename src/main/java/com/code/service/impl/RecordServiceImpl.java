package com.code.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.code.dao.RecordDao;
import com.code.demo.Record;
import com.code.service.RecordService;
@Service
public class RecordServiceImpl implements RecordService{
	 @Autowired RecordDao recordDao;
	@Override
	public void delete(long id) {
		recordDao.deletebyId(id);	
	}
	@Override
	public List<Record> showAll() {
		
		return recordDao.loadAll();
		
	}
	@Override
	public void insertRecord(Record rec) {
		recordDao.insertRecord(rec);
		
	}
}
