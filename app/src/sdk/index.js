import axios from "axios";
import { config } from "../config";

/**
 * Get formatted Api URL
 * @param {string} path Path to follow
 * @returns {string} url formatted
 */
const getApiUrl = (path) => `${config.API_URL}${path}`;

/**
 * Get formatted Auth URL
 * @param {string} path Path to follow
 * @returns {string} url formatted
 */
const getAuthUrl = (path) => `${config.AUTH_URL}${path}`;

/**
 * @param {object} auth
 * @param {function} auth.login Do user login
 * @param {function} auth.register Register a new user
 */
export const SDK = {
    auth: {
        /**
         * Do user login
         * @param {object} payload 
         * @param {string} payload.email
         * @param {string} payload.password
         * @returns {Promise<{ user: Record<string, any>, token: string }>}
         */
        login: async (payload) => {
            return (await axios({
                url: getAuthUrl("/token"),
                method: 'POST',
                data: payload,
            })).data;
        },
        /**
         * Register a new user
         * @param {object} payload 
         * @param {string} payload.email
         * @param {string} payload.password
         * @param {string} payload.first_name
         * @param {string} payload.last_name
         * @returns {Promise<Record<string, any>>}
         */
        register: async (payload) => {
            return (await axios({
                url: getApiUrl("/users"),
                method: 'POST',
                data: payload,
            })).data;
        },
    },
    pages: {
        getAll: async (token, options = { is_archived: false, startDate: null }) => {
            options = { is_archived: false, start_date: null, ...options };
            return (await axios({
                url: getApiUrl(`/pages?archived=${options.is_archived}&start_date=${options.start_date}`),
                method: 'GET',
                headers: { "Authorization": `Bearer ${token}` },
            })).data;
        },
        getOneById: async (id, token) => {
            return (await axios({
                url: getApiUrl(`/pages/${id}`),
                method: 'GET',
                headers: { "Authorization": `Bearer ${token}` },
            })).data;
        },
        create: async (payload, token) => { // { title, content }
            return (await axios({
                url: getApiUrl(`/pages`),
                method: 'POST',
                data: payload,
                headers: { "Authorization": `Bearer ${token}` },
            })).data;
        },
    }
}