import config from "../config";
import http from "../utils/http";

const { api } = config;

/**
 * Get users.
 *
 * @return {Object}
 */
export async function fetchNews() {
    const url = `${api.endpoints.all}`;
    const response = await http.get(url);

    return response;
}

/**
 * Get users.
 *
 * @return {Object}
 */
export async function filterNews(data) {
    const url = `${api.endpoints.filter}`;
    const response = await http.post(url, data);

    return response;
}
