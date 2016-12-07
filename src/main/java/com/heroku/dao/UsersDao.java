package com.heroku.dao;

import java.util.List;

import com.heroku.model.UserDetailBean;
public interface UsersDao {
   
	void  insertRole(UserDetailBean user);
    void  insertUserLog(UserDetailBean user);
    void insertUserDetail(UserDetailBean user);
    
    List<String> listUsername(List<String> username);
    
    
}
