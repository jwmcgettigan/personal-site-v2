// Imports
import axios from 'axios';

// App Imports
import { API_URL } from 'setup/config/env';

const api = axios.create({
    baseURL: `${API_URL}/api`,
});

export default {
  insertPage: payload => api.post(`/page`, payload),
  getAllPages: () => api.get(`/pages`),
  updatePageById: (id, payload) => api.put(`/page/${id}`, payload),
  deletePageById: id => api.delete(`/page/${id}`),
  getPageById: id => api.get(`/page/${id}`)
};