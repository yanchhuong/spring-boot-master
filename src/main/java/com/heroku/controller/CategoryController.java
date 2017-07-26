package com.heroku.controller;

import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.apache.commons.lang.time.DateFormatUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.MediaType;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.heroku.dao.ICategory;
import com.heroku.model.CategoryBean;
import com.heroku.model.CategoryBean_R001;
import com.heroku.model.FileUploadBean;
import com.heroku.service.ICategoryService;
import com.heroku.service.IFileImageService;



@RestController
@RequestMapping(value = "/category")
public class CategoryController {
	  
	    @Qualifier(value = "categoryService")
	    private ICategoryService CategoryService;
	    private IFileImageService iFileImageService;
	    
	    @Autowired(required = true)
	    public CategoryController(ICategoryService CategoryService,IFileImageService iFileImageService){
	    	this.CategoryService= CategoryService;
	    	this.iFileImageService=iFileImageService;
	    }
	    
	    @RequestMapping(value = "/find/{CategoryId}"
	            , method = RequestMethod.GET
	            , produces = {"application/json", "application/xml"})
	    public CategoryBean getCategory(@PathVariable int CategoryId) {
	    	CategoryBean Category = CategoryService.findOne(CategoryId);
	        return Category;
	    }
       /*
	   @RequestMapping(value = "/list"
	            , method = RequestMethod.GET
	            , produces=MediaType.APPLICATION_JSON_VALUE)
	    public  @ResponseBody List<CategoryBean> getCategorys() {
	        return this.CategoryService.findAll();
	    }*/
	   
		@RequestMapping(value = "/list", method = RequestMethod.GET , produces=MediaType.APPLICATION_JSON_VALUE)
		 public  @ResponseBody Map<String,Object> getCategorys() {
			   List<CategoryBean_R001> obj = this.CategoryService.findAll();
			   long total= this.CategoryService.getCatgidCount();
		        return new HashMap<String,Object>(){
		            {
		                put("TOTAL",total);
		                put("OUT_REC",obj);
		            }
		        };
		  } 
	    @RequestMapping(value = "/delete/{CategoryId}", method = RequestMethod.DELETE)
	    public Map<String,Object> deleteCategory(@PathVariable final int CategoryId) {
	        this.CategoryService.delete(CategoryId);
	        return new HashMap<String,Object>(){
	            {
	                put("message","Category Deleted");
	                put("CategoryId ",CategoryId);
	            }
	        };
	    }
	    @RequestMapping(value="/save",method = RequestMethod.POST)
	           /*,consumes = {"application/json", "application/xml"}
	            , produces = {"application/json", "application/xml"})*/
	    public Map<String,Object> saveCategory(@RequestBody CategoryBean category){
	    	this.iFileImageService.insertNew();
	    	System.out.println(this.iFileImageService.getMaxPid());
	    	CategoryBean obj= category;
	    	obj.setPid(this.iFileImageService.getMaxPid());
	    	obj.setRegdate(DateFormatUtils.format(new Date(), "yyyyMMddhhmmss"));
	    	obj.setVscatgid(this.CategoryService.getCatgidCount());
	    	obj.setSeq(this.CategoryService.getSeqCount(category.getLvl(),category.getParentid())+1);
	    	this.CategoryService.saveCategoryBean(obj);
	        return new HashMap<String,Object>(){
	            {
	              put("message","Category Saved");
	              put("Category",obj);
	            }
	        };
	    }
/*	    @RequestMapping(value="/update",method = RequestMethod.POST)
        ,consumes = {"application/json", "application/xml"}
         , produces = {"application/json", "application/xml"})
       public Map<String,Object> updateCategory(@RequestBody CategoryBean category){  	
 	   this.CategoryService.updateMenu(category);
          return new HashMap<String,Object>(){
         {
            put("message","Category Saved");
            put("Category",category);
          }
        };
      }*/
	    
	  @RequestMapping(value="/remove",method = RequestMethod.GET)
	  public Map<String,Object> removeMenuTree(@RequestParam(value = "catgid") int rootid){  	
		  this.CategoryService.removeMenuTree(rootid);
			  return new HashMap<String,Object>(){
		           { put("message","Category was delete!"); }
			  };       
	 }
	    
}
