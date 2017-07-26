package com.code.controller;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.hadoop.mapred.gethistory_jsp;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.code.session.SessionManager;
import com.code.session.UserSession;
@Controller
public class ViewsController {
	
	@RequestMapping(value="/",method = RequestMethod.GET)
	public String welcome(HttpServletRequest request, HttpServletResponse response) {
		return "main_page";
	}
	@RequestMapping(value="/post",method = RequestMethod.GET)
	public String postAds() {
		return "post_control_001_view";
	}
	@RequestMapping(value="/preview",method = RequestMethod.GET)
	public String previewPage() {
		return "preview_page";
	}
	@RequestMapping(value="/admin",method = RequestMethod.GET)
	public String admin() {
		return "admin";
	}
	@RequestMapping(value="/cfeedback",method = RequestMethod.GET)
	public String feedback() {
		return "feedback_control_001_view";
	}
	@RequestMapping(value="/cuser",method = RequestMethod.GET)
	public String User() {
		return "user_control_001_view";
	}
	@RequestMapping(value="/cmenu",method = RequestMethod.GET)
	public String menuControl() {
		return "menu_control_001_view";
	}
	@RequestMapping(value="/cmessage",method = RequestMethod.GET)
	public String messageControl() {
		return "message_control_001_view";
	}

}
