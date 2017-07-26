package com.code.dao;

import com.code.model.UserDetailBean;
public interface UsersDao {
   
	void  insertRole(UserDetailBean user);
    void  insertUserLog(UserDetailBean user);
    void insertUserDetail(UserDetailBean user);

}
