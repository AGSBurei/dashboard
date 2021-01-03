package com.dashboard.repository;

import com.dashboard.models.Widget;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Optional;

public interface WidgetRepository extends MongoRepository<Widget, String> {
    Optional<Widget> findById(String id);
}