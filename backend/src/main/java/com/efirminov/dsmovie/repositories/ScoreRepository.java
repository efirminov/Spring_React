package com.efirminov.dsmovie.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.efirminov.dsmovie.entities.Score;
import com.efirminov.dsmovie.entities.ScorePK;

public interface ScoreRepository extends JpaRepository<Score, ScorePK>{
	
	

}
