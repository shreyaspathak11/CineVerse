import { styled } from '@mui/system';

export default styled((theme) => ({
    toolbar: {
    height: "80px",
    display: "flex",
    justifyContent: "space-between",
    marginLeft: "240px",
    [theme.breakpoints.up('sm')]: {
        marginLeft: "0",
        flexWrap: "wrap",
        },
    },
    menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
        display: 'none',
        },
    },
}));