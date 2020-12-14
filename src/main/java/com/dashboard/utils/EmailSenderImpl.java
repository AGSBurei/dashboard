package com.dashboard.utils;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Component;


    @Component
    public class EmailSenderImpl implements EmailService {

        @Autowired
        private JavaMailSender emailSender;

        public void sendSimpleMessage(String to, String subject, String text) {
            SimpleMailMessage message = new SimpleMailMessage();
            message.setFrom("Dasboard");
            message.setTo(to);
            message.setSubject(subject);
            message.setText(text);
            System.out.println(message);
            emailSender.send(message);
        }
    }

