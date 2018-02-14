import * as React from 'react';
import './TFoot.css';

export type TFootProps = {
    legend?: string
};

export function TFoot (props: TFootProps) {
    return (
        <div className="TFoot">
            {
                props.legend ?
                    <div className="content">
                        {props.legend}
                    </div>
                    :
                    false
            }
        </div>
    );
}