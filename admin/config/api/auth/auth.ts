/**
 * Generated by orval v7.7.0 🍺
 * Do not edit manually.
 * Project Admin API
 * OpenAPI spec version: 1.0
 */
import { useMutation } from '@tanstack/react-query';
import type { MutationFunction, UseMutationOptions, UseMutationResult } from '@tanstack/react-query';

import type { AuthDto, AuthResponse } from '../api.schemas';

import { axiosCall } from '.././api.axios';
import type { ErrorType } from '.././api.axios';

export const authLogin = (authDto: AuthDto, signal?: AbortSignal) => {
    return axiosCall<AuthResponse>({
        url: `/auth/login`,
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        data: authDto,
        signal,
    });
};

export const getAuthLoginMutationOptions = <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof authLogin>>, TError, { data: AuthDto }, TContext>;
}): UseMutationOptions<Awaited<ReturnType<typeof authLogin>>, TError, { data: AuthDto }, TContext> => {
    const mutationKey = ['authLogin'];
    const { mutation: mutationOptions } = options
        ? options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey
            ? options
            : { ...options, mutation: { ...options.mutation, mutationKey } }
        : { mutation: { mutationKey } };

    const mutationFn: MutationFunction<Awaited<ReturnType<typeof authLogin>>, { data: AuthDto }> = props => {
        const { data } = props ?? {};

        return authLogin(data);
    };

    return { mutationFn, ...mutationOptions };
};

export type AuthLoginMutationResult = NonNullable<Awaited<ReturnType<typeof authLogin>>>;
export type AuthLoginMutationBody = AuthDto;
export type AuthLoginMutationError = ErrorType<unknown>;

export const useAuthLogin = <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof authLogin>>, TError, { data: AuthDto }, TContext>;
}): UseMutationResult<Awaited<ReturnType<typeof authLogin>>, TError, { data: AuthDto }, TContext> => {
    const mutationOptions = getAuthLoginMutationOptions(options);

    return useMutation(mutationOptions);
};
