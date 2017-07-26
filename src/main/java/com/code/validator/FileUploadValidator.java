package com.code.validator;

import org.springframework.validation.Errors;
import org.springframework.validation.Validator;

import com.code.model.FileUpload;


public class FileUploadValidator implements Validator{

	@Override
	public boolean supports(Class clss) {
		//just validate the FileUpload instances
		return FileUpload.class.isAssignableFrom(clss);
	}

	@Override
	public void validate(Object target, Errors errors) {

		FileUpload file = (FileUpload)target;

		if(file.getFile().getSize()==0){
			errors.rejectValue("file", "required.fileUpload");
		}
	}
}