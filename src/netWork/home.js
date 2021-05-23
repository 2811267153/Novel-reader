import { request } from './axios'

export function getHotBook() {
    return request({
        URL: '/ranking/54d42e72d9de23382e6877fb'
    })
}