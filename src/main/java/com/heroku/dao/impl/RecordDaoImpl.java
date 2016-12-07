package com.heroku.dao.impl;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import javax.annotation.PostConstruct;
import org.apache.tomcat.jdbc.pool.DataSource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.support.JdbcDaoSupport;
import org.springframework.stereotype.Repository;

import com.heroku.dao.RecordDao;
import com.heroku.demo.Record;

@Repository
public class RecordDaoImpl extends JdbcDaoSupport implements RecordDao{
	@Autowired
	protected DataSource dataSource;
	 
	 @PostConstruct
	 private void initialize(){
	        setDataSource(dataSource);
	 }
	    //...
	 
	@Override
	public void deletebyId(long id) {
		String sql = "DELETE  FROM record where id=?";
		 this.getJdbcTemplate().update(sql, id);
		
	}
	@Override
	public List<Record> loadAll(){
	    String sql = "SELECT id,data FROM record";
	    List< Map < String, Object>> rows = this.getJdbcTemplate().queryForList(sql);
	 
	    List<Record> result = new ArrayList<Record>();
	    for(Map <String, Object> row:rows){
	    	Record rec = new Record();
	    	rec.setId((int)row.get("id"));
	        rec.setData((String)row.get("data"));
	        result.add(rec);
	    }
	    return result;
	}

	@Override
	public void insertRecord(Record rec) {
		String sql = "INSERT INTO record " +"(data) VALUES (?)" ;
        this.getJdbcTemplate().update(sql, new Object[]{rec.getData()});
		
	}
	
}
