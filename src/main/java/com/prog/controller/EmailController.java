package com.prog.controller;

import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.tika.exception.TikaException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.xml.sax.SAXException;

import com.prog.Service.EmailService;
import com.prog.Service.FileService;
import com.prog.entity.StudentDetails.ProjectStudentDetails;
import com.prog.proxy.EmailSender;

import DTO.MailReq;
import DTO.StudentRes;
import jakarta.mail.MessagingException;

@RestController
public class EmailController {
	@Autowired
	EmailService emailService;
	@Autowired
	FileService fileService;

    @PostMapping("/sendEmail")
    public String sendEmail(@RequestParam String recipientMail,@RequestParam String subject, @RequestParam String mailBody) throws UnsupportedEncodingException, MessagingException {	
    	
    	emailService.sendMail(recipientMail, mailBody, subject);

        return "Email sent successfully!";
    }
    
    @GetMapping("/getMails")
    public Map<String , List<StudentRes>> getMails(@RequestParam int fileId) throws UnsupportedEncodingException, MessagingException, IOException, SAXException, TikaException
    {
    	Map<String , List<StudentRes>> response = new HashMap<>();
    	response.put("mailList", emailService.getMails(fileService.extractKeyword(fileId)));
    	return response;
    	
    }
    
    
    @PostMapping("/sendMails")
    public String sendMails(@RequestBody MailReq req) throws UnsupportedEncodingException, MessagingException, IOException, SAXException, TikaException
    {
    	String textDoc = fileService.getPlainText(req.getFileId());
    	return emailService.sendMails(req.getMails(), textDoc);
    	
    }
//    @GetMapping("/getText")
//    public String getText(@RequestParam int fileId) throws IOException, SAXException, TikaException
//    {
//    	return fileService.getPlainText(fileId);
//    }
}