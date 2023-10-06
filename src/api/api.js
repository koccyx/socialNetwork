import axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY' : 'f879f46d-f57a-4e31-9775-274e5794c4f0',
  },
});

const usersApi = {
  getUsers(pageNumber, pageSize) {
    return instance.get(`users?page=${pageNumber}&count=${pageSize}`)
    .then(response => response.data);
  },
  followUser(id) {
    return instance.post(`follow/${id}`, {})
      .then(responce => responce.data)
  },
  unFollowUser(id) {
    return instance.delete(`follow/${id}`, {})
      .then(responce => responce.data)
  },
  getProfile(id) {
    return profileApi.getProfile(id);
  },
};

const profileApi = {
  getProfile(id) {
    return instance.get(`profile/${id}`).then(response => response.data);
  },
  getStatus(id) {
    return instance.get(`profile/status/${id}`).then(response => response.data)
  },
  updateStatus(status) {
    return instance.put(`profile/status`, { status: status });
  }
} 

const authApi = {
  getLogin() {
    return instance.get(`auth/me`).then(response => {
      if (response.data.resultCode === 0) {
        return response.data.data;
      }
      return null;
    });
  },
  login(data) {
    return instance.post('auth/login',{...data});
  },
  logout() {
    return instance.delete('auth/login');
  }
};

export { usersApi, authApi, profileApi } 