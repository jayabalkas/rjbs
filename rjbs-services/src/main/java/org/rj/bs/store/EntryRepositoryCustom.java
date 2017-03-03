package org.rj.bs.store;

import java.sql.Date;
import java.util.List;

public interface EntryRepositoryCustom {

	List<Entry> findByExpDate(Date searchTerm);
}
