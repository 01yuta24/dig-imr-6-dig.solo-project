import axios from 'axios';
import '../styles/Header.css';
export const Header = ({ setData }) => {
    const delClick = () => {
        console.log('リセットします');
        axios
            .delete('/api/items')
            .then((res) => res.data)
            .then((data) => setData(data));
    };
    return (
        <header className="header">
            <h1>お買い物アプリ</h1>
            <div>
                <button onClick={delClick}>リセット</button>
            </div>
        </header>
    );
};
