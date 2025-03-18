import { CSSProperties } from '@mui/styled-engine';
import { Box as MuiBox, BoxProps as MuiBoxProps } from '@mui/system';
import { forwardRef, useMemo } from 'react';

export interface BoxProps extends MuiBoxProps {
    overflowX?: CSSProperties['overflowX'];
    xsHidden?: boolean;
    xsColumn?: boolean;
    smHidden?: boolean;
}

export const Flex = forwardRef<unknown, BoxProps>(({ xsColumn, xsHidden, smHidden, ...props }, ref) => {
    const sx = useMemo(() => ({ ...props.sx, overflowX: props.overflowX }), [props.sx, props.overflowX]);
    return (
        <MuiBox
            ref={ref}
            flexDirection="column"
            justifyContent="center"
            display={{
                xs: xsHidden ? 'none' : 'flex',
                sm: smHidden ? 'none' : 'flex',
            }}
            {...props}
            sx={sx}
        ></MuiBox>
    );
});

export const Column = forwardRef<unknown, BoxProps>(({ ...props }, ref) => {
    return <Flex ref={ref} flexDirection="column" justifyContent="center" {...props}></Flex>;
});

export const Col = Column;

export const Row = forwardRef<unknown, BoxProps>(({ xsColumn, ...props }, ref) => {
    return (
        <Flex
            ref={ref}
            alignItems="center"
            flexDirection={{ xs: xsColumn ? 'column' : 'row', sm: 'row' }}
            {...props}
        ></Flex>
    );
});
