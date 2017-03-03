package org.rj.bs.store;

import org.springframework.context.annotation.Profile;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
@Profile({"in-memory", "mysql"})
public interface JpaEntryRepository extends JpaRepository<Entry, Long>, EntryRepositoryCustom  {
	
}