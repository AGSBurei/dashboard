package com.dashboard.utils;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Component;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;


@Component
    public class EmailSenderImpl implements EmailService {

        @Autowired
        private JavaMailSender emailSender;

        public void sendSimpleMessage(String to, String subject, String text) throws MessagingException {

            MimeMessage message = emailSender.createMimeMessage();
            MimeMessageHelper helper = new MimeMessageHelper(message, true);

            helper.setFrom("Dashboard");
            helper.setTo(to);
            helper.setSubject(subject);
            helper.setText("",text);

            emailSender.send(message);
        }
    }

