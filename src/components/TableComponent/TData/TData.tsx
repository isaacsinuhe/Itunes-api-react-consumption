import * as React from 'react';
import './TData.css'; 

// tslint:disable-next-line:no-any
type dataType = { [i: string]: any };
export type TDataProps = {
    forProp: string
    data?: dataType
    avatar?: string
    audio?: string
    linkTo?: string
};

export function TData (props: TDataProps) {
    let tdDataArray: Array<string> = [];
    let avatar: null | string = null;
    let audio: null | string = null;
    let linkTo: null | string = null;

    if (props.data) {
        if (props.forProp) {
            tdDataArray = getArrayFromForProps(props.data, props.forProp);
        }
        if (props.linkTo) {
            linkTo = getDataFromDottedString(
                props.data, 
                props.linkTo
            );
        }
        if (props.avatar) {
            avatar = getDataFromDottedString(props.data, props.avatar);
        }
        if (props.audio) {
            audio = getDataFromDottedString(props.data, props.audio);
        }
    }
    
    return (
        <div className="TData">
            {
                audio ? 
                <audio className="audio" src={audio} controls={true}/> :
                false
            }
            {
                avatar ? 
                <img className="avatar" src={avatar} alt={`imageFor-${tdDataArray}`}/> :
                false
            }
            <div className="dataContainer">
                {
                    tdDataArray.map((data, index) => 
                        linkTo ?
                            <a key={index} href={linkTo}>
                            {data}
                        </a> :
                        <div className="data" key={index}>
                            {data}
                        </div>
                    )
                }
            </div>
        </div>
    );
}

function getArrayFromForProps (source: dataType | string, forProp: string) {
    let arrayValue: Array<string> = [];
    let forPropAsArray = forProp.split(' ');
    if (forPropAsArray.length > 1) {
        arrayValue = forPropAsArray.map((value, index) => {
            return getDataFromDottedString(source, value);
        });
    } else if (typeof forProp === 'string') {
        arrayValue = [getDataFromDottedString(source, forProp)];
    }
    return arrayValue;
}

function getDataFromDottedString (
    source: dataType | string, 
    dottedString: string, 
    defaultValue: string = dottedString) {

    let propsArray = dottedString.split('.');
    propsArray.forEach(value => {
        if (source) { source = source[value]; }
    });
    if (!source) {
        return defaultValue;
    }
    return source as string;
}