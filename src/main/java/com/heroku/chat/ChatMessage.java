package com.heroku.chat;

import java.sql.Date;

public class ChatMessage {
	  
	  private String recipient;
	  
	  public String getRecipient() { return recipient; }
	  public void setRecipient(String recipient) { this.recipient = recipient; }
	  
	  private String sender;
	  
	  public String getSender() { return sender; }
	  public void setSender(String sender) { this.sender = sender; }
	  
	  private String message;
	  
	  private Date date;
	  
	  public Date getDate() {return date;}
	  public void setDate(Date date) {
		this.date = (Date) new java.util.Date();
	}
	public String getMessage() { return message; }
	  public void setMessage(String message) { this.message = message; }

	}