module.exports = {
    project: {
        input: {
            target: 'http://127.0.0.1:8080/api/v1-json',
        },
        output: {
            target: 'shared/config/api/api.ts',
            mode: 'tags-split',
            client: 'react-query',
            prettier: true,
            override: {
                useDates: true,
                query: {
                    useInfinite: true,
                    useInfiniteQueryParam: 'offset',
                },
                mutator: {
                    path: 'shared/config/api/api.axios.ts',
                    name: 'axiosCall',
                },
            },
        },
    },
};
