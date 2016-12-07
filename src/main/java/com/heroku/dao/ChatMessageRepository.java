package com.heroku.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.repository.CrudRepository;


import com.heroku.model.ChatMessageModel;


 
public interface ChatMessageRepository {
	public List<ChatMessageModel> getMessages(int messageIndex);
	public void addMessage(ChatMessageModel ChatMessageModel) ;
    
}