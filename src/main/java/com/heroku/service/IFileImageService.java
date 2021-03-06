package com.heroku.service;

import java.util.List;

import com.heroku.model.FileUploadBean;

public interface IFileImageService {
	public List<FileUploadBean> findAll();
    public void saveFileUploadBean(FileUploadBean fileUploadBean);
    public FileUploadBean findOne(long fileUploadBeanId);
    public void remove(String filename);
    public long getPIDCount();
    public void insertNew();
    public long getMaxPid();
}
