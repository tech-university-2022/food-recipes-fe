import { Validator } from "@frontend/utils/validate.util.js";
import useAuth from "@frontend/hooks/auth.js";

const URL = `${process.env.BACKEND_DOMAIN}`;

const handleSuccessResponse = async (response) => {
    try {
        const statusCode = response.status;

        const resData = await response.json();

        if (statusCode === 401 || statusCode == 400 || statusCode == 500) {
            throw {
                code: statusCode,
                message: resData,
            };
        }

        return [resData, null];
    } catch (err) {
        return [null, err];
    }
};

const handleErrorResponse = (errResponse) => {
    return [
        null,
        {
            code: 500,
            message: errResponse,
        },
    ];
};

export default class Fetch {
    static get(route, params = {}, baseUrl = URL) {
        return this.xhr(route, params, "GET", baseUrl);
    }

    static put(route, params = {}, baseUrl = URL) {
        return this.xhr(route, params, "PUT", baseUrl);
    }

    static post(route, params = {}, baseUrl = URL) {
        return this.xhr(route, params, "POST", baseUrl);
    }

    static delete(route, params = {}, baseUrl = URL) {
        return this.xhr(route, params, "DELETE", baseUrl);
    }

    static xhr(url, params, verb, baseUrl) {
        if (!Validator.isValidUrl(url)) {
            url = url.indexOf("/") === 0 ? `${baseUrl}${url}` : `${baseUrl}/${url}`;
        }

        let options = { method: verb };
        options["headers"] = {
            "Content-Type": "application/json",
        };


        const { auth } = useAuth();
        console.log("token", auth)

        if (auth) {
            options["headers"]["Authorization"] = `Bearer ${auth}`;
        }

        if (verb !== "GET") {
            options["body"] = JSON.stringify(params);
        } else {
            if (params) {
                url = `${url}?${Object.keys(params)
                    .filter((key) => !!params[key])
                    .map((key) => `${key}=${params[key]}`)
                    .join("&")}`;
            }
        }

        console.log(url)
        
        const retyFunction = fetch(url, options).then(handleSuccessResponse).catch(handleErrorResponse);
       
        return retyFunction;
    }
}
