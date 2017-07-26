package com.code.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class PopupViewController {
	@RequestMapping(value="/popup_uploadimg_001",method = RequestMethod.GET)
	public String popupUploadImg001() {
		return "popup/popup_uploadimg_001_view";
	}
	@RequestMapping(value="/popup_uploadimg_002",method = RequestMethod.GET)
	public String popupUploadImg002() {
		return "popup/popup_uploadimg_002_view";
	}

}
