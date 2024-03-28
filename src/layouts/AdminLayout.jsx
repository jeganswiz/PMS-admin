import { Stack, Card, Box, CardContent, Grid } from "@mui/material";
import { Link, Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(()=>({
    layoutContainerFontSize : {
        fontSize : '15px',
    }

}))

const AdminLayout = () => {
    const classes = useStyles();
    const toggleSidebar = () => {
        console.log('sfsd');
    }
    return (
        <Box >
            <Sidebar>
                <Stack className={classes.layoutContainerFontSize}>
                    <Outlet />
                </Stack>
            </Sidebar>
        </Box>
    )
}
export default AdminLayout;