package com.code.model;



import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

import org.springframework.data.annotation.Id;
 
/**
 * @author huseyinbabal
 */


/*@Entity
@Table(name = "chatmessage")*/
public class ChatMessageModel {
    @Id
    @Column(name = "id")
    private String id;
    @Column(name = "text")
    private String text;
    @Column(name = "author")
    private String author;
    @Column(name = "date")
    private Date date;
 
    public ChatMessageModel() {
    }
 
    public ChatMessageModel(String text, String author, Date date) {
        this.text = text;
        this.author = author;
        this.date = date;
    }

    public String getText() {
        return text;
    }
 
    public void setText(String text) {
        this.text = text;
    }
 
    public String getAuthor() {
        return author;
    }
 
    public void setAuthor(String author) {
        this.author = author;
    }
 
    public Date getCreateDate() {
        return date;
    }
 
    public void setCreateDate(Date date) {
        this.date = date;
    }
 
    @Override
    public String toString() {
        return "{" +
                "\"id\":\"" + id + '\"' +
                ",\"text\":\"" + text + '\"' +
                ",\"author\":\"" + author + '\"' +
                ",\"date\":\"" + date + "\"" +
                '}';
    }
}