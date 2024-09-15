import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { TextField, Button, Box, Typography } from '@mui/material';
import { signinUser } from '../redux/UserSlice';

const Signin = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const { loading, error } = useSelector((state) => state.user);

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        let userCredentials = {
            username: username,
            password: password
        }
        dispatch(signinUser(userCredentials)).then(result => {
            if (result.payload) {
                setUsername('');
                setPassword('');
                navigate('/');
            }
        });
        console.log("Username:", userCredentials.username, "Password:", userCredentials.password);
    };

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '100vh',
                padding: 3,
                backgroundColor: '#f5f5f5'
            }}
        >
            <Typography variant="h4" component="h1" sx={{ mb: 3 }}>
                Sign In
            </Typography>

            <form onSubmit={handleSubmit} style={{ width: '100%', maxWidth: '400px' }}>
                <TextField
                    fullWidth
                    label="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    margin="normal"
                    variant="outlined"
                    required
                />

                <TextField
                    fullWidth
                    label="Password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    margin="normal"
                    variant="outlined"
                    required
                />

                <Button
                    type="submit"
                    variant="contained"
                    fullWidth
                    disabled={loading}
                    sx={{ mt: 2, backgroundColor: '#2980b9', '&:hover': { backgroundColor: '#1c5985' } }}
                >
                    {loading ? "Signing in..." : "Sign in"}
                </Button>
                {
                    error && (
                        <p>problem signing in</p>
                    )
                }
            </form>
        </Box>
    );
};

export default Signin;
