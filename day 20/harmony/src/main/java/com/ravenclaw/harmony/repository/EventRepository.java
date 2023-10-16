package com.ravenclaw.harmony.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ravenclaw.harmony.model.Event;

@Repository
public interface EventRepository  extends JpaRepository<Event, Integer>  {

	List<Event> findByOrganizer_OrgID(Integer orgID);

}
