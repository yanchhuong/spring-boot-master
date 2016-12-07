package com.heroku.dao.impl;

import javax.annotation.PostConstruct;

import org.apache.tomcat.jdbc.pool.DataSource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.support.JdbcDaoSupport;
import org.springframework.stereotype.Repository;

import com.heroku.dao.UsersDao;
import com.heroku.model.UserDetailBean;

@Repository
public class UsersDaoImpl extends JdbcDaoSupport implements UsersDao{

	@Autowired
	protected DataSource dataSource;
	 
	 @PostConstruct
	 private void initialize(){
	        setDataSource(dataSource);
	 }
	    //...
	
	@Override
	public void insertRole(UserDetailBean user) {
		String sql = "INSERT INTO USER_ROLES " +"(username,role) VALUES (?,?)" ;
        this.getJdbcTemplate().update(sql, new Object[]{user.getUsername(),user.getRole()});
		
	}
	@Override
	public void insertUserLog(UserDetailBean user) {
		String sql = "INSERT INTO USERS " +"(usercd,username,password) VALUES (?,?,?)" ;
        this.getJdbcTemplate().update(sql, new Object[]{user.getUserCd(),user.getUsername(),user.getPassword()});
        
        
		
	}
	@Override
	public void insertUserDetail(UserDetailBean user) {
		String sql = "INSERT INTO USER_DETAIL " +"(regdate,fname,lname,username_fk,email,usercd) VALUES (?,?,?,?,?,?)" ;
        this.getJdbcTemplate().update(sql, new Object[]{user.getRegisterDate(),user.getFirst(),user.getLast()
        		,user.getUsername(),user.getEmail(),user.getUserCd()});
		
	}

}
