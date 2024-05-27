import * as React from 'react';
import { Box, InputLabel, MenuItem, FormControl, Select } from '@mui/material';

export default function CategoryForm({ categoryData, categoryValueStatus }) {
    const [categoryValue, setCategoryValue] = categoryValueStatus;
    const handleChange = (event) => {
        setCategoryValue(event.target.value);
    };

    return (
        <Box sx={{ minWidth: 180 }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                    カテゴリー
                </InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={categoryValue}
                    label="category"
                    onChange={handleChange}
                >
                    {categoryData.map((obj) => {
                        return (
                            <MenuItem key={obj.id} value={obj.id}>
                                {obj.name}
                            </MenuItem>
                        );
                    })}
                </Select>
            </FormControl>
        </Box>
    );
}
