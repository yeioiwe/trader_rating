module.exports = {
    project: {
        input: {
            target: 'http://127.0.0.1:8088/api/admin-json',
        },
        output: {
            target: 'config/api/api.ts',
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
                    path: 'config/api/api.axios.ts',
                    name: 'axiosCall',
                },
            },
        },
    },
};
