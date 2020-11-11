import axios from 'axios'
import * as constAPI from './const'

export const mockAPI = (endpoint, method = 'GET', body) => {
    return axios({
        method: method,
        url: `${constAPI.configURL.MOCK_API}/${endpoint}`,
        data: body
    }).catch(err => {
        console.log(err);
    })
}