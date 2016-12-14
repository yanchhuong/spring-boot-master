package com.heroku.chat;

import java.security.Principal;

import javax.inject.Inject;

import org.springframework.messaging.Message;
import org.springframework.messaging.MessageHeaders;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.simp.SimpMessageHeaderAccessor;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Controller;
import org.springframework.util.MimeTypeUtils;

@Controller
public class MessageController {
  
  private SimpMessagingTemplate template;
  
  @Inject
  public MessageController(SimpMessagingTemplate template) {
    this.template = template;
  }

  @MessageMapping("/chat")
  public void greeting(Message<byte[]> message, @Payload ChatMessage chatMessage) throws Exception {
    Principal principal = message.getHeaders().get(SimpMessageHeaderAccessor.USER_HEADER, Principal.class);
    String authedSender = principal.getName();
   
    
    SimpMessageHeaderAccessor accessor = SimpMessageHeaderAccessor.create();
    accessor.setContentType(MimeTypeUtils.TEXT_PLAIN);
    accessor.setNativeHeader("foo", "bar");
    accessor.setLeaveMutable(true);
    MessageHeaders headers = accessor.getMessageHeaders();
    
    
   
    chatMessage.setSender(authedSender);
    String recipient = chatMessage.getRecipient();
    if (!authedSender.equals(recipient)) {

      template.convertAndSendToUser(authedSender, "/queue/messages", chatMessage,headers);
      
    }
    System.out.println(chatMessage.getMessage());
    template.convertAndSendToUser(recipient, "/queue/messages", chatMessage,headers);
  }

}