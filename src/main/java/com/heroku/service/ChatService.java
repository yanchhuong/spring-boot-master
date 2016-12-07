package com.heroku.service;

import java.util.List;

import com.heroku.model.ChatMessageModel;

public interface ChatService {

	 List<ChatMessageModel> getMessages(int messageIndex);
	 void addMessage(String ChatMessageModel) ;

}
