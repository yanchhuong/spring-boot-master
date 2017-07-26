package com.code.controller;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;


import com.code.service.UserService;

import javax.servlet.http.HttpServletRequest;


@Controller
public class LoginController  {
    @Autowired
	UserService userService;
	@RequestMapping(value = "/login")
	public String showForm(ModelMap model,HttpServletRequest request) {
	/*	HttpSession session=request.getSession(false);
		model.addAttribute("login", new LoginForm());
		if(session==null){
			model.addAttribute("status", "Log In");
		}*/
		return "login";
	}
	@RequestMapping(value = "/home",method = RequestMethod.GET)
	public String home(
			ModelMap model,HttpServletRequest request,RedirectAttributes redir) {
		return "home";
	}
	@RequestMapping(value = "/hello",method = RequestMethod.GET)
	public String hello(
			ModelMap model,HttpServletRequest request,RedirectAttributes redir) {
		return "hello";
	}
	@RequestMapping(value = "/403",method = RequestMethod.GET)
	public String error(
			ModelMap model,HttpServletRequest request,RedirectAttributes redir) {
		return "403";
	}
}