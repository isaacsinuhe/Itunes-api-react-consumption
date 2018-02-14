import * as React from 'react';
import { ReactElement } from 'react';
import { THead, TRows, THeadProps, TRowsProps, TFootProps, TFoot } from '../index';
import './Table.base.css';

type TableProps = {
    children: Array<ReactElement<THeadProps | TFootProps | TRowsProps>>
};

export function Table (props: TableProps) {
    return (
        <div className="Table">
            <div className="main">
                {
                    props.children.filter(child => child.type === THead)
                }
                {
                    props.children.filter(child => child.type === TRows)
                }
            </div>
            <div className="foot">
                {props.children.filter(child => child.type === TFoot)}
            </div>
        </div>
    );
}
