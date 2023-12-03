package com.example.imsbackend.service.impl;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.example.imsbackend.entity.User;
import com.example.imsbackend.mapper.UserMapper;
import org.springframework.stereotype.Service;
import com.example.imsbackend.service.UserService;

import java.util.List;

/**
 * (User)表服务实现类
 *
 * @author makejava
 * @since 2023-12-03 10:25:06
 */
@Service("userService")
public class UserServiceImpl extends ServiceImpl<UserMapper, User> implements UserService {

    @Override
    public List<User> listUser() {
        return baseMapper.selectList(null);
    }

    @Override
    public User getUserById(Integer id) {
        return baseMapper.selectById(id);
    }

    @Override
    public boolean insertUser(User user) {
        return baseMapper.insert(user) == 1;
    }

    @Override
    public boolean updateUserById(User user) {
        return baseMapper.updateById(user) == 1;
    }

    @Override
    public boolean deleteUserById(Integer id) {
        return baseMapper.deleteById(id) == 1;
    }
}

