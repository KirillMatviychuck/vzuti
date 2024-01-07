import axios from 'axios';

import { BootsEntityType } from './api-types';

const instance = axios.create({
    baseURL: 'http://localhost:8008/'
});

export const bootsAPI = {
    getAllBoots() {
        return instance.get<BootsEntityType[]>('shoes');
    },
};