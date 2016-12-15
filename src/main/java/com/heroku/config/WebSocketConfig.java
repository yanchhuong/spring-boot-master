package com.heroku.config;

import java.util.List;


import org.eclipse.jetty.websocket.api.WebSocketBehavior;
import org.eclipse.jetty.websocket.api.WebSocketPolicy;
import org.eclipse.jetty.websocket.server.WebSocketServerFactory;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.web.PageableHandlerMethodArgumentResolver;
import org.springframework.messaging.converter.ByteArrayMessageConverter;
import org.springframework.messaging.converter.DefaultContentTypeResolver;
import org.springframework.messaging.converter.MappingJackson2MessageConverter;
import org.springframework.messaging.converter.MessageConverter;
import org.springframework.messaging.converter.StringMessageConverter;
import org.springframework.messaging.handler.invocation.HandlerMethodArgumentResolver;
import org.springframework.messaging.handler.invocation.HandlerMethodReturnValueHandler;
import org.springframework.messaging.simp.config.ChannelRegistration;
import org.springframework.messaging.simp.config.MessageBrokerRegistry;
import org.springframework.util.MimeTypeUtils;

import org.springframework.web.socket.config.annotation.EnableWebSocketMessageBroker;
import org.springframework.web.socket.config.annotation.StompEndpointRegistry;
import org.springframework.web.socket.config.annotation.WebSocketMessageBrokerConfigurer;
import org.springframework.web.socket.config.annotation.WebSocketTransportRegistration;
import org.springframework.web.socket.server.jetty.JettyRequestUpgradeStrategy;
import org.springframework.web.socket.server.support.DefaultHandshakeHandler;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.heroku.service.impl.ActiveUserService;

@Configuration
@EnableWebSocketMessageBroker

//public class WebSocketConfig extends AbstractWebSocketMessageBrokerConfigurer {
public class WebSocketConfig implements WebSocketMessageBrokerConfigurer {

  /*  @Override
    public void configureMessageBroker(MessageBrokerRegistry config) {
    //    config.enableSimpleBroker("/topic");
        
        config.enableSimpleBroker("/queue", "/topic");
        config.setApplicationDestinationPrefixes("/app");
    }

    @Override
    public void registerStompEndpoints(StompEndpointRegistry registry) {
      //  registry.addEndpoint("/gs-guide-websocket").withSockJS();
        
        registry.addEndpoint("/chat", "/activeUsers").withSockJS();
    }*/
    
	 public static final int MAX_TEXT_MESSAGE_SIZE = 2048000; // 2 Megabytes.
     public static final int BUFFER_SIZE = MAX_TEXT_MESSAGE_SIZE * 5;


	private  ObjectMapper objMapper;
	
	
	WebSocketConfig(ObjectMapper objMapper){
		this.objMapper = objMapper;
	}
	
	@Override
	  public void configureMessageBroker(MessageBrokerRegistry config) {
	    config.enableSimpleBroker("/queue", "/topic");
	    config.setApplicationDestinationPrefixes("/app");
	  }

	  @Override
	  public void registerStompEndpoints(StompEndpointRegistry registry) {
	    registry.addEndpoint("/chat", "/activeUsers").withSockJS().setSessionCookieNeeded(false).setStreamBytesLimit(512*1024).setHttpMessageCacheSize(1000).setDisconnectDelay(30*1000);
	    
	  }

	  @Override
	  public void configureClientInboundChannel(ChannelRegistration channelRegistration) {
	  }

	  @Override
	  public void configureClientOutboundChannel(ChannelRegistration channelRegistration) {
		  channelRegistration.taskExecutor().corePoolSize(50);
	  }

	  @Override
	  public boolean configureMessageConverters(List<MessageConverter> converters) {
		  
		  MappingJackson2MessageConverter converter = new MappingJackson2MessageConverter();
			converter.setObjectMapper(this.objMapper);
			DefaultContentTypeResolver resolver = new DefaultContentTypeResolver();
			resolver.setDefaultMimeType(MimeTypeUtils.APPLICATION_JSON);
			converter.setContentTypeResolver(resolver);
			converters.add(new StringMessageConverter());
			converters.add(new ByteArrayMessageConverter());
			converters.add(converter);
			return false;
	  }
	  
	  @Bean
	  public ActiveUserService activeUserService() {
	    return new ActiveUserService();
	  }
	  
	   @Bean
	  public DefaultHandshakeHandler handshakeHandler() {
//	        LOGGER.info("Websocket buffer size: " + BUFFER_SIZE + " bytes.");
	        WebSocketPolicy policy = new WebSocketPolicy(WebSocketBehavior.SERVER);
	        policy.setMaxTextMessageBufferSize(BUFFER_SIZE);
	        policy.setMaxTextMessageSize(MAX_TEXT_MESSAGE_SIZE);
	        policy.setMaxBinaryMessageBufferSize(BUFFER_SIZE);
	        policy.setMaxBinaryMessageSize(MAX_TEXT_MESSAGE_SIZE);
	        policy.setInputBufferSize( BUFFER_SIZE);
	        policy.setIdleTimeout(600000);

	        return new DefaultHandshakeHandler(
	                new JettyRequestUpgradeStrategy(new WebSocketServerFactory(policy)));
	   }

	 @Override
	 public void addArgumentResolvers(List<HandlerMethodArgumentResolver> arg0) {
		  PageableHandlerMethodArgumentResolver resolver = new PageableHandlerMethodArgumentResolver();
		    resolver.setFallbackPageable(new PageRequest(0, 5));
		    arg0.add((HandlerMethodArgumentResolver) resolver);
		
	 }

	 @Override
	 public void addReturnValueHandlers(List<HandlerMethodReturnValueHandler> arg0) {
		// TODO Auto-generated method stub
		
	 }

	 @Override
	 public void configureWebSocketTransport(WebSocketTransportRegistration registration) {
		    registration.setMessageSizeLimit(500 * 1024);
		    registration.setSendBufferSizeLimit(1024 * 1024);
		    registration.setSendTimeLimit(20000);
	}
	
}