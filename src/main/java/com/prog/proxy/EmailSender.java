package com.prog.proxy;

import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import jakarta.mail.*;
import jakarta.mail.internet.MimeMessage;
import java.io.UnsupportedEncodingException;

public class EmailSender {
	@SuppressWarnings("unused")
	private JavaMailSender mailSender;

	public EmailSender(JavaMailSender mailSender) {
		this.mailSender = mailSender;
		}
}
//	public void sendEmail(String email, String subject, String content) throws MessagingException, UnsupportedEncodingException {
//	MimeMessage message = mailSender.createMimeMessage();
//	MimeMessageHelper helper = new MimeMessageHelper(message);
//
//	helper.setFrom("souravsaha1999@gmail.com", "Sourabh Saha");
//	helper.setTo(email);
//	helper.setSubject(subject);
//	helper.setText(content, true);
//	mailSender.send(message);
//	}
