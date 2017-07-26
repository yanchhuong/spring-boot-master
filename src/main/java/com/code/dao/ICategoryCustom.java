package com.code.dao;
import com.code.model.CategoryBean;
import com.code.model.CategoryBean_R001;

import java.util.List;
import java.util.Locale.Category;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;
@Repository
public interface ICategoryCustom extends JpaRepository<CategoryBean_R001,Long>{
	 @Transactional
	 @Query(value=" WITH RECURSIVE category_tree AS "
			 + " (SELECT *,CAST(nm_eng As varchar(1000)) As fullengname,CAST(nm_kh As varchar(1000)) As fullkhname"
			 + " FROM category  WHERE parentid = 0"
			 + " UNION all  SELECT si.*, CAST( sp.fullengname || '>>' || si.nm_eng As varchar(1000)) As fullengname ,"
			 + " CAST( sp.fullkhname || '>>' ||  si.nm_kh As varchar(1000)) As fullkhname"
			 + " FROM category As si INNER JOIN category_tree AS sp"
			 + " ON (si.parentid = cast(sp.catgid as integer))  "
			 + " )SELECT t.* ,f.randname FROM category_tree  t "
			 + " left join  filepicture f on t.pid=f.pid  ORDER BY fullengname;",nativeQuery = true)
	 public List<CategoryBean_R001> findAlls();
	 

       
}
