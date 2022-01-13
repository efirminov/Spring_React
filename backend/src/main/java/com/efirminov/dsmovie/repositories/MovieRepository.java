package com.efirminov.dsmovie.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.efirminov.dsmovie.entities.Movie;

public interface MovieRepository extends JpaRepository<Movie, Long>{
	
	

}
