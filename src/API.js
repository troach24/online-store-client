const API_URL = 'http://localhost:5000/';

export default {
  async getInventory() {
    try {
      const res = await fetch(`${API_URL}inventory`, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers': 'Content-Type',
        },
      });
      return res.json();
    } catch (error) {
      error.message = 'error';
      return error.message;
    }
  },
  async getCartItems() {
    try {
      const res = await fetch(`${API_URL}cart`, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers': 'Content-Type',
        },
      });
      return res.json();
    } catch (error) {
      error.message = 'error';
      return error.message;
    }
  },
};
