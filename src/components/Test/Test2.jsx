// src/components/LoginForm.js
import React, { useState } from 'react';
import { TextField, Button, Container, Typography, IconButton, InputAdornment } from '@mui/material';
import { styled } from '@mui/system';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import axios from 'axios';

const FormContainer = styled(Container)({
    marginTop: 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
});

const LoginForm = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        showPassword: false,
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleTogglePasswordVisibility = () => {
        setFormData({
            ...formData,
            showPassword: !formData.showPassword,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/api/login/', formData);
            console.log(response.data);
            // Handle successful login (e.g., redirect to another page)
        } catch (error) {
            console.error('Login failed:', error);
            // Handle login failure (e.g., display an error message)
        }
    };

    return (
        <FormContainer component="main" maxWidth="xs">
            <Typography component="h1" variant="h5">
                Login
            </Typography>
            <form onSubmit={handleSubmit}>
                <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    id="username"
                    label="Username"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    autoFocus
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    id="password"
                    label="Password"
                    name="password"
                    type={formData.showPassword ? 'text' : 'password'}
                    value={formData.password}
                    onChange={handleChange}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton onClick={handleTogglePasswordVisibility} edge="end">
                                    {formData.showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                />
                <Button type="submit" fullWidth variant="contained" color="primary">
                    Login
                </Button>
            </form>
        </FormContainer>
    );
};

export default LoginForm;
