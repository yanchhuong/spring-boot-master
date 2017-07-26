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
public interface ICategory extends JpaRepository<CategoryBean,Long>{
	 @Transactional
	 @Query(value=" WITH RECURSIVE category_tree AS "
			 + " (SELECT *,CAST(nm_eng As varchar(1000)) As fullengname,CAST(nm_kh As varchar(1000)) As fullkhname"
			 + " FROM category  WHERE parentid = 0"
			 + " UNION all  SELECT si.*, CAST( sp.fullengname || '>>' || si.nm_eng As varchar(1000)) As fullengname ,"
			 + " CAST( sp.fullkhname || '>>' ||  si.nm_kh As varchar(1000)) As fullkhname"
			 + " FROM category As si INNER JOIN category_tree AS sp"
			 + " ON (si.parentid = cast(sp.catgid as integer))  "
			 + " )SELECT t.* ,f.randname FROM category_tree  t "
			 + " full join  filepicture f on t.pid=f.pid  ORDER BY fullengname;",nativeQuery = true)
	 public List<CategoryBean> findAlls();

	 //Modify
	 @Modifying(clearAutomatically = true)
	 @Query(value="update category set  "
	 		+ "  pid=COALESCE(:#{#pid}, pid),"
	 		+ "  usercd=COALESCE(:#{#usercd},usercd)"
	 		+ "  where catgid= :#{#catgid}", nativeQuery=true)
	 public void updateMenu(@Param(value="pid") long pid,@Param(value="usercd") String usercd,@Param(value="catgid") long catgid); 
	 
	 //Count 
	 @Query(value="select count (catgid) from category ",nativeQuery=true)
	 public int getCatgidCount(); 
	 
	 //Count Seq
	 @Query(value="select count (catgid) from category where lvl=:lvl and parentid=:parentid",nativeQuery=true)
	 public int getSeqCount(@Param(value="lvl") String lvl,@Param(value="parentid") long parentid); 
	 
	 
	 // Remove Tree
	 @Transactional
	 @Modifying
	 @Query(value=" with recursive all_posts as ("
		 		+ "   select catgid, parentid, catgid as rootid from category t1"
		 		+ "   union all"
		 		+ "     select c1.catgid,c1.parentid,p.rootid"
		 		+ "   from category c1 join all_posts p on p.catgid = c1.parentid) "
		 		+ "     DELETE FROM category WHERE catgid IN (SELECT catgid FROM all_posts WHERE rootid=:rootid);", nativeQuery=true)
	 public int removeMenuTree(@Param(value="rootid") int rootid); 
	 
	 
              
}
