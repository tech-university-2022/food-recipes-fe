import Fetch from "@frontend/services/fetch/index.js";

export default class AuthService {
    static register = async ({ ...params }) => {
        try {
            const [user, errRes] = await Fetch.post(`users/register`, { ...params });

            if (errRes) throw errRes;
            console.log(errRes)

            return user;
        } catch (e) {
            throw e;
        }
    };

    static login = async ({ ...params }) => {
        try {
            const [user, errRes] = await Fetch.post(`users/login`, { ...params });

            if (errRes) throw errRes;
            console.log(errRes)

            return user;
        } catch (e) {
            throw e;
        }
    };

    static change_password = async ({ ...params }) => {
        try {
            const [user, errRes] = await Fetch.post(`users/change-password`, { ...params });

            if (errRes) throw errRes;
            console.log(errRes)

            return user;
        } catch (e) {
            throw e;
        }
    };
}