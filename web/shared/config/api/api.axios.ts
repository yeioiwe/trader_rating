import { MutationCache, QueryCache, QueryClient } from '@tanstack/react-query';
import Axios, { AxiosError, AxiosRequestConfig } from 'axios';

function onError(error: unknown) {
    if (error instanceof AxiosError) {
        let errMessage = error.message;
        if (errMessage === error.response?.data?.message) errMessage = 'error default';
    }
}

export const axios = Axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
});

export const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            retry: false,
        },
    },
    queryCache: new QueryCache({ onError }),
    mutationCache: new MutationCache({ onError }),
});

export const axiosCall = <T>(config: AxiosRequestConfig): Promise<T> => {
    const source = Axios.CancelToken.source();
    const promise = axios({ ...config, cancelToken: source.token }).then(({ data }) => data);

    // @ts-expect-error
    promise.cancel = () => {
        source.cancel('Query was cancelled by React Query');
    };

    return promise;
};

axios.interceptors.request.use(async config => {
    const token = localStorage.getItem('authToken');

    config.headers.Authorization = token ? `Bearer ${token}` : ``;

    return config;
});

export type ErrorType<Error> = AxiosError<Error>;
