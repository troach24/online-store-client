const API_URL = 'http://localhost:5000/';

export default {

  // async getRockets() {
  //   const res = await fetch(API_URL);
  //   return res.json();
  // },

  async getInventory() {
    const res = await fetch(`${API_URL}inventory`, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
    });
    return res.json();
    // .then((data) => {
    //   this.inventory = data.inventory;
    // });
  },

  // async getInventory() {
  //   fetch((API_URL), {
  //     headers: {
  //       'Access-Control-Allow-Origin': '*',
  //       'Access-Control-Allow-Headers': 'Content-Type',
  //     },
  //   })
  //     .then(res => res.json())
  //     .then((data) => {
  //       this.inventory = data.inventory;
  //     });
  // },
};
