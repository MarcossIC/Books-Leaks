package com.noCountry.library.service;

import com.noCountry.library.dto.User.ResponseUserDto;
import com.noCountry.library.dto.User.UpdatePasswordDto;
import com.noCountry.library.dto.User.UserDto;
import com.noCountry.library.entities.User;
import com.noCountry.library.dto.RegisterRequest;

import java.util.Optional;

public interface UserService {

    User registeUser(RegisterRequest newUser);

    Optional<User> findByEmail(String email);

    public ResponseUserDto updateUser(UserDto userDTO);

    public void updatePasswordUser(UpdatePasswordDto userDTO);

    public void deleteUser(String id);

    public User getUserById(String id);

    public void unsubscribeEmailUser(String id);


}
