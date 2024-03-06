// StudentService.js
import { MYAXIOS } from "./Helper";

const Login = async (obj) => {
    console.log("login email: " + obj.userName);
    console.log("login password: " + obj.password);
    try { 
        const response = await MYAXIOS.post('/api/login', obj, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        localStorage.setItem('token', response.data.token);
        return response.data; // Access the response data directly
    } catch (error) {
        throw error; // Rethrow the error for the calling code to handle
    }
};

export default Login;

