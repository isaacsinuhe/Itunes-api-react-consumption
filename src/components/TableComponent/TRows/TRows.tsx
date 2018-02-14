import * as React from 'react';
import { ReactElement } from 'react';
import { TDataProps } from '../index';
import './TRows.css';

export type TRowsProps = {
    data: Array<Object> | null
    children: Array<ReactElement<TDataProps>> | ReactElement<TDataProps>
};
export function TRows (props: TRowsProps) {
    const tds = props.children instanceof Array ? 
        props.children : [props.children];

    return (
        <div className="TRows">
            {
                props.data != null &&
                props.data.map((datum, sourceIndex) => (
                    <div className="row" key={sourceIndex}>
                        {
                            tds.map((child, arrayIndex) => (
                                <child.type
                                    key={arrayIndex}
                                    data={datum}
                                    {...props.children[arrayIndex].props}
                                />
                            ))
                        }
                    </div>
                ))
            }
        </div>
    );
}
