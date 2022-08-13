import axios from 'axios';

const http = axios.create({
  baseURL: 'http://localhost:8000/api'
});

export default {
  async getRecents() {
    let response = await http.get('/recents');
    let data = response.data.dados;
    return trataRetornoGrid(data);
  },
  
  async getCategories(cat, tipoRota) {
    let data = [], response;
    
    switch(tipoRota) {
      case 1: response = await http.get(`/sub-categories/${cat}`); break;
      case 2: response = await http.get(`/category-images/${cat}`); break;
    }
    data = response.data.dados;
    return trataRetornoGrid(data);
  },
};

const trataRetornoGrid = (data) => (
  data.map(item => {
    item.thumbnailURL = item.image;
    item.largeURL = item.image;
    return item;
  })
);