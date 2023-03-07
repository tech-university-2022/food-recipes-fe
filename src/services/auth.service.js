import Fetch from "./fetch/index";

export default class AuthService {
    static create = async ({ ...params }) => {
        try {
            const [user, errRes] = await Fetch.post(`users/create`, { ...params });

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