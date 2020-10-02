import * as axios from "axios";

const instanse = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "01527b21-6502-4c79-bf73-80a720265e50"
    }
});

export const usersAPI = {
    getUsers: (currentPage, pageSize) => {
        return instanse.get(`users?page=${currentPage}&count=${pageSize}`).then(response => {
            return response.data;
        })
    },
    follow: (id) => {
        return instanse.post(`follow/${id}`).then(respons => {
            return respons.data;
        })
    },
    unfollow: (id) => {
        return instanse.delete(`follow/${id}`).then(respons => {
            return respons.data;
        })
    },

}
export const profileAPI = {
    getProfile: (userId) => {
        return instanse.get(`profile/` + userId)
    },
    getStatus: (userId) => {
        return instanse.get(`profile/status/` + userId)
    },
    updateStatus: (status) => {
        return instanse.put(`profile/status`, {status: status})
    }


}

export const authAPI = {
    me() {
        return instanse.get(`auth/me`);

    },
    login(email, password, rememberMe = false) {
        return instanse.post('auth/login', {email, password, rememberMe});
    },
    logout(){
        return instanse.delete('auth/login')
    }
}

