package com.code.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.ModelMap;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.stereotype.Controller;

import com.code.demo.Record;
import com.code.service.impl.RecordServiceImpl;

@Controller
@RequestMapping("/record")
public class RecordController{
	 private RecordServiceImpl recordServiceImpl;

	 @Autowired
     public RecordController(RecordServiceImpl recordServiceImpl){
    	 this.recordServiceImpl = recordServiceImpl;
     }
	
	 @RequestMapping(method = RequestMethod.GET)
	 public String home(ModelMap model) {
	 List<Record> records = recordServiceImpl.showAll();
	        model.addAttribute("records", records);
	        model.addAttribute("insertRecord", new Record());
	        return "welcome";
	 }

	 @RequestMapping(method = RequestMethod.POST)
	 public String insertData(ModelMap model, 
	                          @ModelAttribute("insertRecord") @Valid Record record,
	                             BindingResult result) {
	        if (!result.hasErrors()) {
	           recordServiceImpl.insertRecord(record);
	        }
	        return home(model);
	  }
	 
	  @RequestMapping(value="/delete", method=RequestMethod.GET)
	  @ResponseBody
	  public String DeleteCustomer(HttpServletRequest request) {
		//  Long id = Long.valueOf(request.getParameter("id"));
		  System.out.println("Test==========================");
		  recordServiceImpl.delete(2);	                 
	      return "Delete sucess!";
	       
	  }

	  @RequestMapping(value="/loadall", method=RequestMethod.GET)
	  @ResponseBody
      public List<Record> list(HttpServletRequest request){
			 return recordServiceImpl.showAll();
	  }
	  
}