package com.code.controller;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

@Controller
public class ChatViewController {

    
	@RequestMapping(value = "/chatting",method = RequestMethod.GET)
	public String chatting(
			ModelMap model,HttpServletRequest request,RedirectAttributes redir) {
		return "index";
	}
	@RequestMapping(value = "/chat",method = RequestMethod.GET)
	public String realtimeChat(
			ModelMap model,HttpServletRequest request,RedirectAttributes redir) {
		return "realtimechat";
	}
	


}
