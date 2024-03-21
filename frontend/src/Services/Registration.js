// StudentService.js
import { MYAXIOS } from "./Helper";

const Register = async (user) => {
    try { 
        const response = await MYAXIOS.post('/api/register', user, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (response.data.token === null) {
            return new Error(response.data.message || 'User already exists');
          }
        localStorage.setItem('token', response.data.token);
        return response.data; 
    } catch (error) {
        throw error;
    }
};

export default Register;

