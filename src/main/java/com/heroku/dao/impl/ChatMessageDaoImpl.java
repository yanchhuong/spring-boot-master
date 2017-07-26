package com.heroku.dao.impl;
/*package com.code.dao.impl;

import java.util.List;

import javax.annotation.PostConstruct;

import org.apache.tomcat.jdbc.pool.DataSource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.support.JdbcDaoSupport;
import org.springframework.stereotype.Repository;

import com.code.chat.ChatMessage;
import com.code.dao.ChatMessageRepository;



@Repository
public class ChatMessageDaoImpl extends JdbcDaoSupport implements ChatMessageRepository{
	
	@Autowired
	protected DataSource dataSource;
	 
	 @PostConstruct
	 private void initialize(){
	        setDataSource(dataSource);
	 }
	    //...

	@Override
	public List<ChatMessage> getMessages(int messageIndex) {
		// TODO Auto-generated method stub
		return null;
	}
	@Override
	public void addMessage(ChatMessage chatMessage) {
		String sql = "INSERT INTO CHATMESSAGE " +"(message,sender,recipient,ip,dtm) VALUES (?,?,?,?,?)" ;
        this.getJdbcTemplate().update(sql, new Object[]{chatMessage.getMessage(),chatMessage.getSender(),chatMessage.getRecipient(),chatMessage.getIp(),chatMessage.getDate()});
		
	}

}
*/