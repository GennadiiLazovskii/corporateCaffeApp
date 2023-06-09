import axios from 'axios';

const UserService = {
    async getAll() {
        const response = await axios.get('http://localhost:3000/users')
        return response.data;
    }
}

export default UserService;