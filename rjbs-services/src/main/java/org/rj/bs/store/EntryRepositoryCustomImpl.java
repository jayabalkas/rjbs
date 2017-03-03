package org.rj.bs.store;

import java.sql.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
public class  EntryRepositoryCustomImpl implements EntryRepositoryCustom {
	
	public EntryRepositoryCustomImpl() {
		super();
	}

	private static final String SEARCH_TODO_ENTRIES = "SELECT * FROM Entry e WHERE " +
	            "e.expDate LIKE CONCAT(:searchTerm, '%')";
		 
	private NamedParameterJdbcTemplate jdbcTemplate;
	 
    @Autowired
    EntryRepositoryCustomImpl(NamedParameterJdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    @Transactional(readOnly = true)
	@Override
	public List<Entry> findByExpDate(Date searchTerm) {
    	Map<String, Date> queryParams = new HashMap<>();
        queryParams.put("searchTerm", searchTerm);
 
        List<Entry> searchResults = jdbcTemplate.query(SEARCH_TODO_ENTRIES,
                queryParams,
                new BeanPropertyRowMapper<>(Entry.class)
        );
 
        return searchResults;		
	}

}
