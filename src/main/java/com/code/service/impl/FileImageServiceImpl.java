package com.code.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.code.dao.IFileImageDao;
import com.code.model.FileUploadBean;
import com.code.service.IFileImageService;
@Service(value="fileService")
public class FileImageServiceImpl implements IFileImageService{
 
	IFileImageDao iFileImageDao ;
	@Autowired
	public FileImageServiceImpl(IFileImageDao iFileImageDao){
		this.iFileImageDao=iFileImageDao;
		
	}
	@Override
	public List<FileUploadBean> findAll() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void saveFileUploadBean(FileUploadBean fileUploadBean) {
		this.iFileImageDao.saveAndFlush(fileUploadBean);
	}

	@Override
	public FileUploadBean findOne(long fileUploadBeanId) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void remove(String filename) {
		this.iFileImageDao.remove(filename);
		
	}
	@Override
	public long getPIDCount() {
		// TODO Auto-generated method stub
		return this.iFileImageDao.count();
	}
	@Override
	public void insertNew() {
		this.iFileImageDao.insertNew();
		
	}
	@Override
	public long getMaxPid() {
		// TODO Auto-generated method stub
		return this.iFileImageDao.findMaxPid();
	}

}
