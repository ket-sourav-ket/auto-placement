package com.prog.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.JavaMailSenderImpl;
import org.springframework.stereotype.Service;

import java.util.*;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import com.prog.entity.StudentDetails;
import com.prog.entity.StudentDetails.ProjectStudentDetails;
import com.prog.proxy.EmailSender;
import com.prog.repository.StudentDetailsRepository;

import DTO.StudentRes;
import jakarta.mail.*;
import java.io.UnsupportedEncodingException;

@Service
public class EmailService {
	private List<Boolean> ALLOWALL;
	private List<Boolean> NOBACKLOG;
	
	
	
	public EmailService() {
		super();
		ALLOWALL = new LinkedList<>();
		ALLOWALL.add(false);
		ALLOWALL.add(true);
		NOBACKLOG = new LinkedList<>();
		NOBACKLOG.add(false);
	}

	@Autowired
	private StudentDetailsRepository studentRepo;
	
	@Autowired
	private JavaMailSender mailSender;
	public void sendMail(String recipientMail, String mailBody , String subject) throws MessagingException, UnsupportedEncodingException {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setFrom("souravsaha1999@gmail.com");
        message.setTo(recipientMail);
        message.setSubject(subject);
        message.setText(mailBody +"\n"+"Register yourself for this drive by clicking the link given below within 24 hours from reciving this mail."+ "\n" + "http://localhost:5173/register");

        try {
			mailSender.send(message);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
	public String sendMails(List<String> mails, String textDocument) throws UnsupportedEncodingException, MessagingException
	{
		for( String mail : mails)
			sendMail(mail , textDocument, "Placement Opportunity" ); 
		
		return "e-mail sent successfully";
		
		
	}
	
	
	
	public List<StudentRes> getMails(Map<String , ArrayList<String>> keywordMap) throws UnsupportedEncodingException, MessagingException
	{
		/*List<String> deg = new LinkedList<>();
		deg.add("MCA");
		List<StudentDetails> sd = studentRepo.findByDegree(deg); 
		
		System.out.println("find by degree: " + sd); */
		List<ProjectStudentDetails> records = studentRepo.findEmails(keywordMap.get("degree"), keywordMap.get("stream"), keywordMap.get("others").get(3) == "FALSE"? NOBACKLOG:ALLOWALL , Double.parseDouble(keywordMap.get("others").get(0)), Integer.parseInt(keywordMap.get("others").get(2)), Integer.parseInt(keywordMap.get("others").get(1)));
		System.out.println("till here:" + records.get(0).getPersonal_mail());
		List<StudentRes> mails = records.stream().filter((ProjectStudentDetails record)->{
			if(keywordMap.get("skill") == null) return true;
			for(String skill : record.getSkills().split(","))
			{
				if(keywordMap.get("skill").contains(skill)) return true;
			}
			return false;
		}).map((e) -> new StudentRes(e.getName() , e.getDepartment() , e.getPersonal_mail())).collect(Collectors.toList());
		
		//System.out.println("mails: " + mails);
		return mails;
		
		
		
	}
	
	
}