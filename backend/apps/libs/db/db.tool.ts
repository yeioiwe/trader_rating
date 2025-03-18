import { Type } from '@nestjs/common';
import { PickType } from '@nestjs/swagger';
import { A } from 'ts-toolbelt';

export type Default<T> = T & { __default__?: true };

export function ExtendType<T extends object, K extends keyof T>(
    classRef: Type<T>,
    keys: readonly K[],
): Type<
    A.Compute<
        Pick<T, (typeof keys)[number]> & {
            [P in Exclude<keyof T, (typeof keys)[number]>]?: undefined;
        }
    >
> {
    return PickType(classRef, keys) as any;
}
