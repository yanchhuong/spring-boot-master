package com.heroku.controller;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.heroku.model.CategoryBean_R001;
import com.heroku.model.MUpdateUserStatusIn_U001;
import com.heroku.model.MUserListIn_R001;
import com.heroku.model.MUserListOut_R001;
import com.heroku.model.RoleCountOut_R001;
import com.heroku.model.UserDetailBean;
import com.heroku.service.UserService;
import com.heroku.validator.PagingUtils;



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
	@RequestMapping(value = "/list", method = RequestMethod.POST)
	 public  @ResponseBody Map<String,Object> getListUsers(@RequestBody MUserListIn_R001 input) {
		   List<MUserListOut_R001> obj = this.userService.getUserList(input);
		   List<RoleCountOut_R001> rolecnt=this.userService.getRoleCount(); 
	       PagingUtils page=new PagingUtils();
	        return new HashMap<String,Object>(){
	            {
	                put("OUT_REC",obj);
	                put("PAGINATION",page);
	                put("ROLE_REC",rolecnt);
	            }
	        };
	}
	@RequestMapping(value = "/update", method = RequestMethod.POST)
	 public  @ResponseBody Map<String,Object> updateUsers(@RequestBody MUpdateUserStatusIn_U001 input) {
	        return new HashMap<String,Object>(){
	            {
	                put("ERROR_SMS","");
	                put("CODE","200");
	               
	            }
	        };
	}
	public String nowDateTime(){
		DateFormat dateFormat = new SimpleDateFormat("yyyyMMddHHmmss");
		Date date = new Date();
		
		return dateFormat.format(date);
	}
		 
}
