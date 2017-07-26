package com.heroku.service;

import java.util.List;

import com.heroku.model.CategoryBean;
import com.heroku.model.CategoryBean_R001;


public interface ICategoryService {
	public List<CategoryBean_R001> findAll();
    public void saveCategoryBean(CategoryBean CategoryBean);
    public CategoryBean findOne(long CategoryBeanId);
    public void delete(long CategoryBeanId);
    
    public List<CategoryBean> findByCategoryBeanFirstName(String CategoryBeanFirstName);
    public List<CategoryBean> findByCategoryBeanNameAndSalary(String CategoryBeanFirstName, long CategoryBeanSalary);
    public List<CategoryBean> findBySalary(long salary);
    List<CategoryBean> findByPriceRange(long price1, long price2);
    List<CategoryBean> findByNameMatch(String name);
    List<CategoryBean> findByNamedParam(String name, String author, long price);
    
    public void updateMenu(long pid,String usercd,long catgid);
    public long getSeqCount(String lvl,long parentid);
    public long getCatgidCount();
    public void removeMenuTree(int rootid);
}
