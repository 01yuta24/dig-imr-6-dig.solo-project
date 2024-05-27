import { useEffect } from 'react';
import { CheckList } from './CheckList';
import '../styles/Main.css';
export const Main = ({ data }) => {
    return (
        <main>
            <CheckList data={data} />
        </main>
    );
};
