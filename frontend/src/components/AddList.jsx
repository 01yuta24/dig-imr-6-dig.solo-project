import React, { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';

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
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>追加</Button>
            </DialogActions>
        </Dialog>
    );
};
