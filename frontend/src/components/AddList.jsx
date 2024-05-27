import React, { useState } from 'react';
import {
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Slide,
    Button,
    TextField,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
} from '@mui/material';
import CategoryForm from './CategoryForm';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export const AddList = ({
    openStatus,
    setPostButton,
    itemValueStatus,
    categoryValueStatus,
    categoryData,
}) => {
    const [open, setOpen] = openStatus;
    const [itemValue, setItemValue] = itemValueStatus;
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
            <DialogContent sx={{ display: 'flex' }}>
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
                {/* <TextField
                    id="item-category"
                    label="カテゴリー"
                    variant="standard"
                    value={categoryValue}
                    onChange={(e) => {
                        setCategoryValue(e.target.value);
                    }}
                /> */}
                <CategoryForm
                    categoryData={categoryData}
                    categoryValueStatus={categoryValueStatus}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>追加</Button>
            </DialogActions>
        </Dialog>
    );
};
