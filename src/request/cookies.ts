export function setCookie (key:string, value:string) {
    const expireTime = new Date()
    expireTime.setTime(expireTime.getTime() + 24 * 3600 * 1000 * 7)
    document.cookie = key + '=' + value + ';expires=' + expireTime
}

export function getCookie (key:string):string {
    let sessionId = ''
    if (document.cookie.length > 0) {
        const str = document.cookie
        if (str.indexOf(key + '=') > -1) {
            // let reg = new RegExp(/(?:sessionId=).+(;*?)/)
            sessionId = str.split('=')[1]
        }
    }
    return sessionId
}

export function delCookie (key:string) {
    if (document.cookie.length > 0) {
        document.cookie = key + '=;expires=Thu, 01-Jan-70 00:00:01 GMT'
    }
}
