import * as React from 'react';
import { ReactElement } from 'react';
import { THProps } from '../TH';
import './THead.css';

export type THeadProps = {
    children: ReactElement<THProps> | Array<ReactElement<THProps>>
};

export function THead (props: THeadProps) {
    return (
        <div className="THead">
            {props.children}
        </div>
    );
}