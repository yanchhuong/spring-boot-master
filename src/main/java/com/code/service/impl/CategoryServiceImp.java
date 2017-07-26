package com.code.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.code.dao.ICategory;
import com.code.dao.ICategoryCustom;
import com.code.dao.IFileImageDao;
import com.code.model.CategoryBean;
import com.code.model.CategoryBean_R001;
import com.code.service.ICategoryService;


@Service(value = "categoryService")
public class CategoryServiceImp implements ICategoryService{
	
	private ICategory iCategory;
	private ICategoryCustom iCategoryCustom;
	
	@Autowired(required = true)
	public CategoryServiceImp(ICategory iCategory,ICategoryCustom iCategoryCustom){
		this.iCategory=iCategory;
		this.iCategoryCustom =iCategoryCustom;
		
	}

	    
	@Transactional(readOnly = true)
	@Override
	public List<CategoryBean_R001> findAll() {
		// TODO Auto-generated method stub
		
		return this.iCategoryCustom.findAlls();
	}
	
	@Transactional(readOnly = false)
	@Override
	public void updateMenu(long pid,String usercd,long catgid){
		this.iCategory.updateMenu(pid,usercd,catgid);
		
	}
	
	@Transactional(readOnly = false)
	@Override
	public void saveCategoryBean(CategoryBean CategoryBean) {
		this.iCategory.saveAndFlush(CategoryBean);
	}

	@Override
	public CategoryBean findOne(long CategoryBeanId) {
		// TODO Auto-generated method stub
		return this.iCategory.findOne(CategoryBeanId);
	}

	@Override
	public void delete(long CategoryBeanId) {
	   this.iCategory.delete(CategoryBeanId);
		
	}
	@Override
	public long getCatgidCount() {
		return this.iCategory.getCatgidCount();
	}
	@Override
	public void removeMenuTree(int rootid) {
		this.iCategory.removeMenuTree(rootid);
	}
	@Override
	public List<CategoryBean> findByCategoryBeanFirstName(String CategoryBeanFirstName) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<CategoryBean> findByCategoryBeanNameAndSalary(String CategoryBeanFirstName, long CategoryBeanSalary) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<CategoryBean> findBySalary(long salary) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<CategoryBean> findByPriceRange(long price1, long price2) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<CategoryBean> findByNameMatch(String name) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<CategoryBean> findByNamedParam(String name, String author, long price) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public long getSeqCount(String lvl, long parentid) {
		// TODO Auto-generated method stub
		return this.iCategory.getSeqCount(lvl, parentid);
	}

}


