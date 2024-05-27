import * as React from 'react';
import {
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Checkbox,
    IconButton,
    Typography,
    Box,
} from '@mui/material';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import CommentIcon from '@mui/icons-material/Comment';

export const CheckList = ({ data }) => {
    const [checked, setChecked] = React.useState([]);

    const handleToggle = (index) => () => {
        const currentIndex = checked.indexOf(index);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(index);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
    };

    return data.map((obj, i) => {
        return (
            <Box key={i}>
                <List disablePadding>
                    <ListItem
                        key={i}
                        secondaryAction={
                            <IconButton edge="end" aria-label="comments">
                                <RestaurantMenuIcon fontSize="large" />
                            </IconButton>
                        }
                        disablePadding
                        divider
                        sx={{ height: '100px' }}
                    >
                        <ListItemButton
                            role={undefined}
                            onClick={handleToggle(i)}
                            dense
                            sx={{ height: '100px' }}
                        >
                            <ListItemIcon>
                                <Checkbox
                                    edge="start"
                                    checked={checked.indexOf(i) !== -1}
                                    tabIndex={-1}
                                    disableRipple
                                    inputProps={{
                                        'aria-labelledby': i,
                                    }}
                                />
                            </ListItemIcon>
                            <ListItemText
                                id={i}
                                primary={
                                    <Typography fontSize={25}>
                                        {obj.item_name}
                                    </Typography>
                                }
                            />
                        </ListItemButton>
                    </ListItem>
                </List>
            </Box>
        );
    });
};
// <Box
//     sx={{
//         width: '100%',
//         maxWidth: '600px',
//         bgcolor: 'background.paper',
//         flexFlow: 'column',
//         margin: '0 auto',
//     }}
// >
//     <h2>お野菜</h2>
//     <List
//         disablePadding
//         // sx={{
//         //     width: '100%',
//         //     maxWidth: '600px',
//         //     bgcolor: 'background.paper',
//         //     flexFlow: 'column',
//         //     margin: '0 auto',
//         // }}
//     >
//         {itemNameList.map((item, index) => {
//             const labelId = `checkbox-list-label-${item}`;

//             return (
//                 <ListItem
//                     key={index}
//                     secondaryAction={
//                         <IconButton edge="end" aria-label="comments">
//                             <CommentIcon />
//                         </IconButton>
//                     }
//                     disablePadding
//                     divider
//                     sx={{ height: '100px' }}
//                 >
//                     <ListItemButton
//                         role={undefined}
//                         onClick={handleToggle(index)}
//                         dense
//                         sx={{ height: '100px' }}
//                     >
//                         <ListItemIcon>
//                             <Checkbox
//                                 edge="start"
//                                 checked={checked.indexOf(index) !== -1}
//                                 tabIndex={-1}
//                                 disableRipple
//                                 inputProps={{
//                                     'aria-labelledby': labelId,
//                                 }}
//                             />
//                         </ListItemIcon>
//                         <ListItemText
//                             id={labelId}
//                             primary={
//                                 <Typography fontSize={25}>
//                                     {item}
//                                 </Typography>
//                             }
//                         />
//                     </ListItemButton>
//                 </ListItem>
//             );
//         })}
//     </List>
// </Box>

// {itemNameList.map((item, index) => {
//     const labelId = `checkbox-list-label-${item}`;

//     return (
//         <ListItem
//             key={index}
//             secondaryAction={
//                 <IconButton
//                     edge="end"
//                     aria-label="comments"
//                 >
//                     <CommentIcon />
//                 </IconButton>
//             }
//             disablePadding
//             divider
//             sx={{ height: '100px' }}
//         >
//             <ListItemButton
//                 role={undefined}
//                 onClick={handleToggle(index)}
//                 dense
//                 sx={{ height: '100px' }}
//             >
//                 <ListItemIcon>
//                     <Checkbox
//                         edge="start"
//                         checked={
//                             checked.indexOf(index) !== -1
//                         }
//                         tabIndex={-1}
//                         disableRipple
//                         inputProps={{
//                             'aria-labelledby': labelId,
//                         }}
//                     />
//                 </ListItemIcon>
//                 <ListItemText
//                     id={labelId}
//                     primary={
//                         <Typography fontSize={25}>
//                             {item}
//                         </Typography>
//                     }
//                 />
//             </ListItemButton>
//         </ListItem>
//     );
// })}
