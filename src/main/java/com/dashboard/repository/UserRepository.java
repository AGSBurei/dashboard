package com.dashboard.repository;

import com.dashboard.models.User;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Optional;

public interface UserRepository extends MongoRepository<User, String> {
    Optional<User> findByUsername(String username);

    Optional<User> findByGoogleId(String id);

    Boolean existsByGoogleId(String id);

    Boolean existsByUsername(String username);

    Boolean existsByEmail(String email);
}