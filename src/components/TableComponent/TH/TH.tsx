import * as React from 'react';
import './TH.css';

export type THProps = {
    title: string
};
export function TH (props: THProps) {
    return (
        <div className="TH">
            <div className="content">
                {props.title}
            </div>
        </div>
    );
}