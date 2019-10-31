import React from 'react';
import axios from 'axios';
export default class TypicodeSerivce {
    _apiBase = "https://jsonplaceholder.typicode.com";

    getResource = async (url) => {
        return await axios.get(`${this._apiBase}${url}`);
    }

    getPosts = () => {
        return this.getResource("/posts");
    }

    getPost = (postId) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(this.getResource(`/posts/${postId}`))
            }, 1000);
        })
    }

    getTodos = () => {
        return this.getResource("/todos");
    }

}