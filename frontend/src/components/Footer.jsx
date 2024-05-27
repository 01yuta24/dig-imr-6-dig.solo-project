import * as React from 'react';
import { styled } from '@mui/material/styles';
import {
    AppBar,
    Box,
    CssBaseline,
    Toolbar,
    IconButton,
    Fab,
    Backdrop,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import MoreIcon from '@mui/icons-material/MoreVert';
import { AddList } from './AddList';

const StyledFab = styled(Fab)({
    position: 'absolute',
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: '0 auto',
});

export const Footer = ({
    setPostButton,
    itemValueStatus,
    categoryValueStatus,
}) => {
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };
    return (
        <React.Fragment>
            <CssBaseline />
            <AppBar
                position="fixed"
                color="success"
                sx={{ top: 'auto', bottom: 0 }}
            >
                <Toolbar>
                    <Backdrop open={open} />
                    <IconButton color="inherit" aria-label="open drawer">
                        <MenuIcon />
                    </IconButton>
                    <StyledFab
                        color="success"
                        aria-label="add"
                        onClick={handleClickOpen}
                    >
                        <AddIcon />
                    </StyledFab>
                    <Box sx={{ flexGrow: 1 }} />
                    <IconButton color="inherit">
                        <SearchIcon />
                    </IconButton>
                    <IconButton color="inherit">
                        <MoreIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <AddList
                openStatus={[open, setOpen]}
                setPostButton={setPostButton}
                itemValueStatus={itemValueStatus}
                categoryValueStatus={categoryValueStatus}
            />
        </React.Fragment>
    );
};
