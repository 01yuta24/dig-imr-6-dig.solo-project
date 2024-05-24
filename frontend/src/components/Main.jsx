import axios from 'axios';
import { useEffect, useState } from 'react';
import { SubMain } from './SubMain';
export const Main = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios
            .get('/api/items')
            .then((res) => res.data)
            .then((data) => setData(data));
    }, []);
    return (
        <main>
            <SubMain data={data} />
        </main>
    );
};
