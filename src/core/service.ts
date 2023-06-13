

export function parseJSON(response:any) {
    const statusCode = response.status
    const json = response.json()
    return Promise.all([statusCode, json])
}
export function logout() {
    localStorage.clear();
    window.open('/','_self')
}
export const call_api = ({ address_api, method_api, body, file } : any) => {
    let headers
    if (file) {
        headers = {
            Accept: 'application/json',
            Authorization: `Bearer ${window.localStorage.getItem('token')}`,
        }
    } else {
        headers = {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            // Authorization: `Bearer ${window.localStorage.getItem('token')}`,
            // "Access-Control-Allow-Origin": 'true', 
            // "Access-Control-Allow-Methods": "*",
            // "Access-Control-Allow-Credentials": "true",
        }
    }
    if (window.localStorage.getItem('token')) {
        headers.Authorization = `Bearer ${window.localStorage.getItem('token')}`
    }
    return fetch(address_api, {
        method: method_api,
        headers,
        body
    })
}
