import { CheckList } from './CheckList';
import '../styles/Main.css';
import { Box } from '@mui/material';

export const Main = ({ data }) => {
    data.sort(
        (objA, objB) => Number(objA.category_id) - Number(objB.category_id)
    );
    const categoryList = [...new Set(data.map((obj) => obj.category_name))];
    const sortList = categoryList.map((name) =>
        data.filter((obj) => obj.category_name === name)
    );

    return (
        <main className="main">
            {sortList.map((filterData, i) => {
                return (
                    <Box
                        key={i}
                        sx={{
                            width: '100%',
                            maxWidth: '600px',
                            bgcolor: 'background.paper',
                            flexFlow: 'column',
                            margin: '20px auto 0px auto',
                        }}
                    >
                        <h2 className="category_title">{categoryList[i]}</h2>
                        <CheckList data={filterData} />
                    </Box>
                );
            })}
        </main>
    );
};
