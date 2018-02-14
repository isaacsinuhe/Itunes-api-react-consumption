import * as React from 'react';
import './Search.css';

type SearchProps = {
    btnText?: string;
    inputPlaceholder?: string;
    search: (name: string) => Promise<void>;
};

export const Search: React.SFC<SearchProps> = (props) => {

    const onSubmit: React.FormEventHandler<HTMLFormElement> = (evt) => {
        evt.preventDefault();
        evt.persist();
        return props.search(evt.target[0].value);
    };

    return (
        <div className="Search">
            <form onSubmit={onSubmit}>
                <input placeholder={props.inputPlaceholder} type="text" />
                <button>{props.btnText || 'Search'}</button>
            </form>
        </div>
    );
};