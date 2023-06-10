import axios from 'axios';

const ShopService = {
    async getAll() {
        const response = await axios.get('http://localhost:3000/shop')
        return response.data;
    }
}

export default ShopService;