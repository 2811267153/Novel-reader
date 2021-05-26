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
export function getSubCategories() {
    return axios.get('/sub-categories')
}
export function getBookId(id) {
    return axios.get(`/book-info/${id}`)
}

export function getComment(bookId) {
    return axios.get(`/book/short-reviews?book=${bookId}`)
}

export function getChapterList(id){
  return axios.get(`/book-chapters/${id}`)
}

export function getRecommend(id) {
    return axios.get(`/recommend/${id}`)
}