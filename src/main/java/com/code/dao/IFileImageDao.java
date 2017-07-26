package com.code.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.code.model.FileUploadBean;

@Repository
public interface IFileImageDao  extends JpaRepository<FileUploadBean,Long>{
	 //Modify
	 @Modifying(clearAutomatically = true)
	 @Query(value="update filepicture  set randname='null' where randname =:filename",nativeQuery=true)
	 @Transactional
	 public void remove(@Param(value="filename") String filename); 
	 
	 @Modifying
	 @Query(value="insert into filepicture (orname) values('addnew')",nativeQuery=true)
	 @Transactional
	 public void insertNew(); 
	 
	 @Query(value="select count(pid) as mx from filepicture",nativeQuery=true)
	 public long findMaxPid();
}
