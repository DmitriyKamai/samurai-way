import * as axios from 'axios';


const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: { 'API-KEY': '49ea7a73-ff67-49c4-b332-1f9bef8e582a' }
})

export const usersAPI = {
    getUsers(pageNumber, pageSize) {
        return instance.get(`users?page=${pageNumber}&count=${pageSize}`)
            .then(response => response.data)
    }
}

export const authAPI = {
    getAuthUserData() {
        return instance.get(`auth/me`)
            .then(response => response.data)
    }
}

export const profileAPI = {
    getProfileInfo(id) {
        return instance.get(`profile/${id}`)
        .then(response => response.data)
    },

    getStatus(id) {
        return instance.get(`profile/status/${id}`)
        .then(response => response.data)
    }
}

export const followAPI = {
    follow(userId) {
        return instance.post(`follow/${userId}`)
        .then(response => response.data)
    },

    unFollow(userId) {
        return instance.delete(`follow/${userId}`)
        .then(response => response.data)
    } 
}