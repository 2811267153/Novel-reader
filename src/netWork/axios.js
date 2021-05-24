import axios from "axios";

export function getCategories() {
    return axios.get(`/rank/54d42d92321052167dfb75e3`)
}   
export function getHot() {
    return axios.get(`/categories`)
}   

export function getCategoriesY(sex, type, major, minor, start, limit) {
    return axios.get(`/category-info?gender=${sex}&type=${type}&major=${major}&minor=${minor}&start=${start}&limit=${limit}`)
}
