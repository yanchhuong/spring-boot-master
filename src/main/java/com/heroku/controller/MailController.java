package com.heroku.controller;

import javax.mail.MessagingException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.heroku.mail.SmtpMailSender;

@RestController
public class MailController {
	
	@Autowired
	private SmtpMailSender smtpMailSender;

	@RequestMapping("/send-mail")
	public void sendMail() throws MessagingException {
		
		smtpMailSender.send("jaelsarah7@gmail.com", "Test mail from Springs", "Howdy");
		
	}
}
