package com.code.controller;

import java.security.SecureRandom;
import java.util.Random;

import javax.mail.MessagingException;
import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.code.mail.SmtpMailSender;
import com.code.service.UserService;

@RestController
public class ResetPasswordController {
	@Autowired
	UserService userService;
	
	@Autowired
	private SmtpMailSender smtpMailSender;
	
	@RequestMapping(value="/resetpassword",method = RequestMethod.POST)
	public String sendMail(HttpServletRequest request) throws MessagingException{
		String result="successfull!";
		String username = request.getParameter("username");
		String newpass  = request.getParameter("newpassword");
		if(newpass.equals("")){
			char values[] = new char['Z'-'A'];
			newpass = generatePassword(values,12);
			
			// forgetpassword
			smtpMailSender.send(username, "Reset Password", "This is you temperay password: " + newpass);
		}	
		if(!userService.resetPassword(username, newpass)){
			result = "You input wrong email ";
		}
		
		return result;
	}
	public  String generatePassword(char[] validchars, int len) {
	    char[] password = new char[len];
	    Random rand = new Random(System.nanoTime());
	    for (int i = 0; i < len; i++) {
	        password[i] = validchars[rand.nextInt(validchars.length)];
	    }
	    return new String(password);
	}
}
