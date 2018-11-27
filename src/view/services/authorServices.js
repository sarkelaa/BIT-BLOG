import React from 'react';
import { AUTHOR_ENDPOINT } from '../../shared/constants';
import { Author } from '../entities/Author';

const fetchAuthor = () => {
    return fetch(AUTHOR_ENDPOINT)
        .then((response) => {
            return response.json();
        })
        .then((rawAuthor) => {
            const myAuthor = rawAuthor.map(({ name, username, email, phone, street, city, zipcode, company }) => {
                return new Author(name, username, email, phone, street, city, zipcode, company)

            })
            return myAuthor;
        })
};


export { fetchAuthor };