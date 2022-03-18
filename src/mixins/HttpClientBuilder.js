import axios from 'axios';
import Vue from 'vue'

export default class HttpClientBuilder {

    static buildClient(options) {
        configDefaultOptions(options);
        const client = axios.create(options);

        //default interceptor for request
        //TODO : refresh token
        client.interceptors.request.use(config => {
            return config;
        });

        client.interceptors.response.use(
            res => {
                return res;
            },
            error => {
                const problemDetails = getProblemDetails(error);
                throw problemDetails;
            }
        );
        return client;
    }

}

function configDefaultOptions(options) {
    try {
        if (options.timeout === undefined) {
            options.timeout = 300000;
        }
        if (options.headers === undefined) {
            options.headers = {
                Accept: "application/json",
                "Content-Type": "application/json"
            };
        }
    } catch (error) {
      
    }
}

function getProblemDetails(error) {
    try {
        if (error && error.response && error.response.data) {
            if (error.response.data.type && error.response.data.title) {
                if ((error.config.notifyError !== false) && Vue.notify) {
                    Vue.notify({
                        type: 'error',
                        title:  `${error.response.data.title}, Status: ${error.response.data.status}`,
                        text: error.response.data.detail,
                        position: 'top center'
                    })
                }
                return error.response.data;
            }
        } else {
            if (error && error.message) {
                return {
                    type: "about:blank",
                    title: error.message
                };
            }
        }
    } catch (error) {
       
    }
    return error.response;
}