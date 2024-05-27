import { Header } from './Header';
import { Main } from './Main';
import { Footer } from './Footer';
import { useState, useEffect, useRef } from 'react';
import axios from 'axios';

import '../styles/App.css';
function App() {
    const [itemValue, setItemValue] = useState('');
    const [categoryValue, setCategoryValue] = useState('');
    const [data, setData] = useState([]);
    const [categoryData, setCategoryData] = useState([]);
    const [postButton, setPostButton] = useState(0);
    const isFirstRender = useRef(false);

    useEffect(() => {
        isFirstRender.current = true;
        axios
            .get('/api/items')
            .then((res) => res.data)
            .then((data) => setData(data));
        axios
            .get('/api/categories')
            .then((res) => res.data)
            .then((data) => setCategoryData(data));
    }, []);

    useEffect(() => {
        if (isFirstRender.current) {
            isFirstRender.current = false;
        } else {
            // console.log({ name: itemValue, category_id: categoryValue });
            axios
                .post('/api/items', {
                    name: itemValue,
                    category_id: categoryValue,
                })
                .then((res) => res.data)
                .then((data) => {
                    setData(data);
                    setItemValue('');
                    setCategoryValue('');
                });
            console.log('送信しました');
        }
    }, [postButton]);
    return (
        <>
            <Header setData={setData} />
            <Main data={data} />
            <Footer
                itemValueStatus={[itemValue, setItemValue]}
                categoryValueStatus={[categoryValue, setCategoryValue]}
                setPostButton={setPostButton}
                categoryData={categoryData}
            />
        </>
    );
}

export default App;
