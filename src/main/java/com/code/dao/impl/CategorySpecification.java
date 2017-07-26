package com.code.dao.impl;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;

import org.apache.commons.lang3.StringUtils;
import org.springframework.data.jpa.domain.Specification;

import com.code.model.CategoryBean;

public class CategorySpecification  implements Specification<CategoryBean> {

	private  CategoryBean category;
	
	public CategorySpecification(CategoryBean category){
		this.category=category;
	}
	
	@Override
	public Predicate toPredicate(Root<CategoryBean> root, CriteriaQuery<?> cq, CriteriaBuilder cb) {
		// TODO Auto-generated method stub
		
		 List<Predicate> predicates = new ArrayList<>();
		 
		 if(StringUtils.isNotBlank(category.getNm_eng())){
			 predicates.add(cb.like(cb.lower(root.get("ng_eng")), category.getNm_eng()+"%"));
		 }
		
		return andTogether(predicates, cb);
	}
	
	 private Predicate andTogether(List<Predicate> predicates, CriteriaBuilder cb) {
		    return cb.and(predicates.toArray(new Predicate[0]));
     }


}
