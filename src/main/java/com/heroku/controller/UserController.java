package com.heroku.controller;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Random;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.heroku.model.UserDetailBean;
import com.heroku.service.UserService;

@RestController
@RequestMapping(value = "/users")
public class UserController {
	UserService userService;
	@Autowired
	public UserController(UserService userService) {
		this.userService=userService;
	}
	
	@RequestMapping(value = "/sign_up",method = RequestMethod.POST)
	public String AddUser(ModelMap model,HttpServletRequest request){
	
		System.out.println(request.getParameter("email") +request.getParameter("password") );
		
		UserDetailBean record=new UserDetailBean();
		record.setFirst(request.getParameter("firstname")); 
		record.setLast(request.getParameter("lastname"));
		record.setUsername(request.getParameter("email"));
		record.setPassword(request.getParameter("password"));
        record.setEmail(request.getParameter("email"));
        record.setRegisterDate(nowDateTime());
        record.setEnable(true);
        record.setUserCd(nowDateTime());
        userService.AddUser(record); 
		
		
		return "Welcome !";
	}
/*	public String userCd(){
		Random r = new Random(System.currentTimeMillis());
	    int pick = 100000000 + r.nextInt(200000000);
	    System.out.println(pick);
		return ""+pick;	
	}*/
	public String nowDateTime(){
		DateFormat dateFormat = new SimpleDateFormat("yyyyMMddHHmmss");
		Date date = new Date();
		
		return dateFormat.format(date);
	}
		 
}
