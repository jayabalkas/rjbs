package org.rj.bs.store;


import java.sql.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Entry {
	
	public Entry() {		
	}
	
	public Date getExpDate() {
		return expDate;
	}

	public void setExpDate(Date expDate) {
		this.expDate = expDate;
	}

	public Float getAmount() {
		return amount;
	}

	public void setAmount(Float amount) {
		this.amount = amount;
	}

	public Long getEntryId() {
		return entryId;
	}
	public void setEntryId(Long entryId) {
		this.entryId = entryId;
	}
	public String getEntryDesc() {
		return entryDesc;
	}
	public void setEntryDesc(String entryDesc) {
		this.entryDesc = entryDesc;
	}
	public String getTypeOfExp() {
		return typeOfExp;
	}
	public void setTypeOfExp(String typeOfExp) {
		this.typeOfExp = typeOfExp;
	}
	public String getStoreName() {
		return storeName;
	}
	public void setStoreName(String storeName) {
		this.storeName = storeName;
	}
	
	
	@Override
	public String toString(){
		return String.format("Entry entryId=%s, entryDesc=%s, typeOfExp=%s, storeName=%s, expDate=%s, amount=%s", entryId, entryDesc, typeOfExp, storeName, expDate!=null?expDate.toString():null, amount);
	}
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private Long entryId;
	private String entryDesc;
	private String typeOfExp;
	private String storeName;
	private Date expDate;
	private Float amount;
}
