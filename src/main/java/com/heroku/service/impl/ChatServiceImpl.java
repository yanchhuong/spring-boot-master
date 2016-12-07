package com.heroku.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.heroku.dao.ChatMessageRepository;

import com.heroku.model.ChatMessageModel;
import com.heroku.service.ChatService;

@Service
public class ChatServiceImpl  implements ChatService{
	@Autowired ChatMessageRepository chatMessageRepository ;
	

	@Override
	public List<ChatMessageModel> getMessages(int messageIndex) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void addMessage(String ChatMessageModel) {
		// TODO Auto-generated method stub
		
	}

	

}
