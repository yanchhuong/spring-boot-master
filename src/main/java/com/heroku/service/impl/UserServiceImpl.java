package com.heroku.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.heroku.dao.UsersDao;
import com.heroku.model.UserDetailBean;
import com.heroku.service.UserService;

@Service 
public class UserServiceImpl implements UserService{

	@Autowired
    UsersDao userDao;
	
	@Override
	public boolean AddUser(UserDetailBean user) {
		userDao.insertUserLog(user);
		userDao.insertRole(user);
		userDao.insertUserDetail(user);
		return true;
	}

	@Override
	public List<String> Listname(List<String> username) {
		// TODO Auto-generated method stub
		return null;
	}

}
