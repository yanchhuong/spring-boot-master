package com.heroku.service;

import java.util.List;

import com.heroku.model.UserDetailBean;

public interface UserService {

	boolean  AddUser(UserDetailBean user);
    List<String> Listname(List<String> username);
}
