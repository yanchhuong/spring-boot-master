package com.heroku.config;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

@Configuration
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {
	@Autowired
	DataSource dataSource;

	@Autowired
	public void configAuthentication(AuthenticationManagerBuilder auth) throws Exception {
		auth.jdbcAuthentication().dataSource(dataSource)
				.usersByUsernameQuery("select username,password, enabled from users where username=?")
				.authoritiesByUsernameQuery("select username, role from user_roles where username=?");
		        

	}
	@Override
	protected void configure(HttpSecurity http) throws Exception {
		http.authorizeRequests()

				// control by log in for page
				.antMatchers("/")
				.access("hasRole('ROLE_USER') or hasRole('ROLE_ADMIN') or hasRole('ROLE_EMPLOYEE')")

				.antMatchers("/users").access("hasRole('ROLE_ADMIN')")
				.antMatchers("/users/add").access("hasRole('ROLE_ADMIN')")
				.antMatchers("/users/**/update").access("hasRole('ROLE_ADMIN')")
				.antMatchers("/users/**/delete").access("hasRole('ROLE_ADMIN')")

				.anyRequest().permitAll()
				
				.anyRequest().permitAll()
		   .and()
		   		.formLogin().loginPage("/login")
		   		.usernameParameter("username")
				.passwordParameter("password")
				
			.and()
				.logout().logoutSuccessUrl("/login?logout")
				
			.and()
				.exceptionHandling().accessDeniedPage("/403")
			.and().csrf();
	}

}