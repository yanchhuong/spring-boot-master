package com.heroku.dao;

import com.heroku.model.UserDetailBean;
public interface UsersDao {
   
	void  insertRole(UserDetailBean user);
    void  insertUserLog(UserDetailBean user);
    void insertUserDetail(UserDetailBean user);

}
