package com.code.service;

import java.util.List;

import com.code.model.ChatMessageModel;

public interface ChatService {

	 List<ChatMessageModel> getMessages(int messageIndex);
	 void addMessage(String ChatMessageModel) ;

}
