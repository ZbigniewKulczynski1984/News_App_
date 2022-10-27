import React from 'react';
import { Typography, TextField, Button, Card } from '@mui/material';
import { useForm } from 'react-hook-form';
import { RegisterFormData } from '../../helpers/interfaces';

const RegisterPage = () => {
	const { register, handleSubmit } = useForm<RegisterFormData>();

    const logData = (data: RegisterFormData ) => console.log(data)

	return (
		<Card sx={{ mt: '1.3rem', p: '10px' }}>
			<form
				style={{ display: 'flex', flexDirection: 'column' }}
				onSubmit={handleSubmit(logData)}
			>
				<Typography align="center" variant="h2" sx={{ fontSize: '1.5rem' }}>
					Register new account
				</Typography>
				<TextField
					type="email"
					placeholder="email"
					sx={{ display: 'block', mx: 'auto', my: '.5rem' }}
					{...register('email', { required: true })}
				/>
				<TextField
					type="password"
					placeholder="password"
					sx={{ display: 'block', mx: 'auto', my: '.5rem' }}
					{...register('password', { required: true })}
				/>
				<TextField
					type="password"
					placeholder="repeat password"
					sx={{ display: 'block', mx: 'auto', my: '.5rem' }}
					{...register('password2', { required: true })}
				/>
				<Button
					variant="contained"
					type="submit"
					sx={{ display: 'block', mx: 'auto' }}
				>
					Register
				</Button>
			</form>
		</Card>
	);
};

export default RegisterPage;
