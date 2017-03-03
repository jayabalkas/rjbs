package org.rj.bs.web.controller;

import java.sql.Date;
import java.util.ArrayList;
import java.util.List;

import org.rj.bs.store.Entry;
import org.rj.bs.store.JpaEntryRepository;
import org.slf4j.Logger;

import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "https://rjbs-web.cfapps.io")
public class RJBSRestController {
	private static final Logger logger = LoggerFactory.getLogger(RJBSRestController.class);
	
	private JpaEntryRepository repository;

    @Autowired
    public RJBSRestController(JpaEntryRepository repository) {
        this.repository = repository;
    }
	
	@RequestMapping(value="/gretting")
	public String gretting(@RequestParam(value="name", defaultValue="World") String name){
		logger.debug("Inside greeting");
		return String.format("Hello, %s!!!", name);
	}
	
	@RequestMapping(value="/saveEntry", method=RequestMethod.POST)
	public Status saveEntry(@RequestBody Entry entry){
		Status s = new Status();
		s.setStatus(false);
		logger.info("entry--->"+ entry.toString());
		try{
			repository.save(entry);
			s.setStatus(true);
		}catch(Exception e){
			e.printStackTrace();			
		}	
		return s;
	}
	
	@RequestMapping(value="/showEntry", method=RequestMethod.GET)
	public List<Entry> saveEntry(){		
		try{
			return (List<Entry>) repository.findAll();
		}catch(Exception e){
			e.printStackTrace();
			return null;
		}
	}
	
	@RequestMapping(value="/getReport", method=RequestMethod.GET)
	public List<Entry> getReport(@RequestParam(value="year") int year, @RequestParam(value="month") int month){
		logger.info("year--->"+ year);
		logger.info("month--->"+ month);
		
		String m = month+"";
		int len = 7; 
		if(month == 0){
			m = "";
			len = 5;
		}		
		String searchTerm = year+"-"+(m.length() == 1 ? "0" + m : m);
		List<Entry> result = new ArrayList<Entry>();
		
		try{
			List<Entry> entryList = (List<Entry>) repository.findAll();
			 for (Entry entry : entryList) {
				if(entry.getExpDate().toString().substring(0, len).equals(searchTerm)){
					result.add(entry);
				}
			}
		}catch(Exception e){
			e.printStackTrace();
			return null;
		}		
		return result;
	}
}
