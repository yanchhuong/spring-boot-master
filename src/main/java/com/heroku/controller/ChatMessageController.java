package com.heroku.controller;


import java.security.Principal;
import java.util.ArrayList;
import java.util.List;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.MessageExceptionHandler;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.simp.SimpMessageSendingOperations;
import org.springframework.messaging.simp.annotation.SendToUser;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Controller;

import com.heroku.model.Chat;
import com.heroku.service.RandomFactService;



 
@Controller
public class ChatMessageController {
 /*
	private static final Log logger = LogFactory.getLog(ChatMessageController.class);

	private  SimpMessageSendingOperations messagingTemplate;
	private  RandomFactService randomFactService;
	private List<String> users = new ArrayList<String>();
	
	@Autowired
	public ChatMessageController(RandomFactService randomFactService, SimpMessageSendingOperations messagingTemplate) {
		this.messagingTemplate = messagingTemplate;
		this.randomFactService = randomFactService;
	}
		
	@SubscribeEvent("/join")
	public List<String> join(Principal principal) {
		if(!users.contains(principal.getName())) {
			users.add(principal.getName());
		}
		
		// notify all subscribers of new user
		messagingTemplate.convertAndSend("/topic/join", principal.getName());
		
		return users;
	}

	@MessageMapping(value="/chat")
	public void chatReveived(Chat chat, Principal principal) {
		chat.setFrom(principal.getName());
		
		if("all".equals(chat.getTo())) {
			messagingTemplate.convertAndSend("/queue/chats", chat);
		}
		else {
			messagingTemplate.convertAndSendToUser(chat.getTo(), "/queue/chats", chat);
		}
		
	}
	
	@MessageExceptionHandler
	@SendToUser(value="/queue/errors")
	public String handleException(Throwable exception) {
		return exception.getMessage();
	}
	
	@Scheduled(fixedDelay=5000)
	public void sendRandomFact() {
		this.messagingTemplate.convertAndSend("/queue/random-fact", randomFactService.randomFact());
	}*/
}