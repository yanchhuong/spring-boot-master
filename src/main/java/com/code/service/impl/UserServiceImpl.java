package com.code.service.impl;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.code.dao.UserDao;
import com.code.model.MUpdateUserStatusIn_U001;
import com.code.model.MUserListIn_R001;
import com.code.model.MUserListOut_R001;
import com.code.model.RoleCountOut_R001;
import com.code.model.UserDetailBean;
import com.code.service.UserService;

@Service 
public class UserServiceImpl implements UserService{

	@Autowired
    UserDao userDao;
	
	@Override
	public boolean AddUser(UserDetailBean user) {
		userDao.insertUserLog(user);
		userDao.insertRole(user);
		userDao.insertUserDetail(user);
		return true;
	}

	@Override
	public boolean resetPassword(String username, String newpass) {
		return userDao.resetPassword(username, newpass);
	}

	@Override
	public List<MUserListOut_R001> getUserList(MUserListIn_R001 input) {
		return this.userDao.getUserList(input);
	}

	@Override
	public List<RoleCountOut_R001> getRoleCount() {
		return this.userDao.getRoleCount();
	}


}
