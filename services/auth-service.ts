import axios from 'axios';

const API_URL = 'http://192.168.3.7:4000/login'; // เปลี่ยนเป็น URL จริงของคุณ

export const loginService = async (userid: string, password: string) => {
    try {
        const response = await axios.post(API_URL, { Userid: userid, EMployeeid: password }); 
        return response.data;
    } catch (error) {
        throw error;
    }
};

