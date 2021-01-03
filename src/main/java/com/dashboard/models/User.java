package com.dashboard.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import java.util.*;

@Document(collection = "users")
public class User {
    @Id
    private String id;

    @NotBlank
    @Size(max = 20)
    private String username;

    @NotBlank
    @Size(max = 50)
    @Email
    private String email;

    @NotBlank
    @Size(max = 255)
    private String password;

    private String token;

    private Date tokenExpiration;

    private boolean is_validated = false;

    private String googleId;

    @DBRef
    private Set<Role> roles = new HashSet<>();

    @DBRef
    private List<Widget> widgets = new ArrayList<>();


    public User(String username, String email, String password, String token, Date tokenExpiration, String googleId) {
        this.username = username;
        this.email = email;
        this.password = password;
        this.token = token;
        this.tokenExpiration = tokenExpiration;
        this.googleId = googleId;
    }



    public String getGoogleId() {
        return googleId;
    }

    public void setGoogleId(String googleId) {
        this.googleId = googleId;
    }

    public Date getTokenExpiration() {
        return tokenExpiration;
    }

    public String getToken() {
        return token;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Set<Role> getRoles() {
        return roles;
    }

    public void setRoles(Set<Role> roles) {
        this.roles = roles;
    }

    public List<Widget> getWidgets() {
        return widgets;
    }

    public void setWidgets(List<Widget> widgets) {
        this.widgets = widgets;
    }

    public void addWidget(Widget widget) {
        this.widgets.add(widget);
    }

    public void removeWidgets(Widget widget) {
        this.widgets.remove(widget);
    }

    public boolean isIs_validated() {
        return is_validated;
    }

    public void setIs_validated(boolean is_validated) {
        this.is_validated = is_validated;
    }
}