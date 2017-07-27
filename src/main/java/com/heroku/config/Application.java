/*
 * Copyright 2015 Benedikt Ritter
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package com.heroku.config;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceBuilder;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.boot.context.web.SpringBootServletInitializer;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Primary;

import com.heroku.model.StorageProperties;
import com.heroku.service.StorageService;

import org.apache.tomcat.jdbc.pool.DataSource;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.Banner;
import org.springframework.boot.CommandLineRunner;

@ComponentScan("com.heroku")
@SpringBootApplication
@EnableConfigurationProperties(StorageProperties.class)

public class Application extends SpringBootServletInitializer{
	private static  Logger LOGGER =  LoggerFactory.getLogger(Application.class);


	
	@Override
	protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
		return application.sources(Application.class);
	}

    public static void main(String[] args) {
      //  SpringApplication.run(Application.class, args);
    	 LOGGER.info("Start to Access URLs:HEROKU.......");
        SpringApplication app = new SpringApplication(Application.class);
      //  app.setBannerMode(Banner.Mode.OFF);
        app.run(args);   
        LOGGER.info("Finish Access URLs:HEROKU");
    }
    
   @Bean
	CommandLineRunner init(StorageService storageService) {
		return (args) -> {
            storageService.deleteAll();
            storageService.init();
		};
	}
   @ConfigurationProperties(prefix = "datasource.postgres")
	 @Bean
	 @Primary
	 public DataSource dataSource() {
	     return (DataSource) DataSourceBuilder
	    		     .create()
	    	        .username("byblymbwplvqok")
	    	        .password("cae2b0e11df826f8bda5648a56006aa2355bdf9baf64e70d537b7d5c64e1f149")
	    	        .url("postgres://byblymbwplvqok:cae2b0e11df826f8bda5648a56006aa2355bdf9baf64e70d537b7d5c64e1f149@ec2-50-17-236-15.compute-1.amazonaws.com:5432/d2lgq83l6p58h5")
	    	        .driverClassName("org.postgresql.Driver")
	    	        .build();
	 }
}
