package com.heroku.service;

import java.util.List;

import com.heroku.model.MUpdateUserStatusIn_U001;
import com.heroku.model.MUserListIn_R001;
import com.heroku.model.MUserListOut_R001;
import com.heroku.model.RoleCountOut_R001;
import com.heroku.model.UserDetailBean;

public interface UserService {

	boolean  AddUser(UserDetailBean user);
    boolean  resetPassword(String username,String newpass);
    
    public List<MUserListOut_R001> getUserList(MUserListIn_R001 input);
    public List<RoleCountOut_R001> getRoleCount();

}
