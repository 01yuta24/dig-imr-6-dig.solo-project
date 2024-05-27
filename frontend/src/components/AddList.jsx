import React, { useState } from 'react';
import {
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Slide,
    Button,
    TextField,
} from '@mui/material';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export const AddList = ({
    openStatus,
    setPostButton,
    itemValueStatus,
    categoryValueStatus,
}) => {
    const [open, setOpen] = openStatus;
    const [itemValue, setItemValue] = itemValueStatus;
    const [categoryValue, setCategoryValue] = categoryValueStatus;
    const handleClose = () => {
        setPostButton((e) => e + 1);
        setOpen(false);
    };
    return (
        <Dialog
            open={open}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose}
            aria-describedby="alert-dialog-slide-description"
        >
            <DialogTitle>{'リストに追加したい項目'}</DialogTitle>
            <DialogContent>
                <TextField
                    id="item-name"
                    label="品物名"
                    variant="standard"
                    value={itemValue}
                    sx={{ marginRight: 1 }}
                    onChange={(e) => {
                        setItemValue(e.target.value);
                    }}
                />
                <TextField
                    id="item-category"
                    label="カテゴリー"
                    variant="standard"
                    value={categoryValue}
                    onChange={(e) => {
                        setCategoryValue(e.target.value);
                    }}
                />
                {/* <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Age</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={age}
                        label="Age"
                        onChange={handleChange}
                    >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>*/}
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>追加</Button>
            </DialogActions>
        </Dialog>
    );
};
