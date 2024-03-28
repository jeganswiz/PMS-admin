import { useEffect, useState } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Link,matchPath,useLocation,useNavigate } from 'react-router-dom';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/NotificationsNoneOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import CachedOutlinedIcon from '@mui/icons-material/CachedOutlined';

// function isExternalLink(path) {
//   return path.includes('http');
// }

// function getActive(path, pathname) {
//   return path ? !!matchPath({ path, end: false }, pathname) : false;
// }

const drawerWidth = 338;

const useStyles = makeStyles((theme)=>({
  listStyles : {
    '& .MuiListItemButton-root.MuiListItemButton-gutters:hover' : {
      borderRadius : '12px'
    }
  },
  listStylesActive : {
    '& .MuiListItemButton-root.MuiListItemButton-gutters:hover' : {
      borderRadius : '12px',
      background: 'rgba(69, 126, 203, 0.40) !important',
    }
  },
  menuLinkActive : {
    borderRadius : '12px',
    background: 'rgba(69, 126, 203, 0.40)',
  }
}))

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
  background : '#fff',
  color : '#000',
  boxShadow : 'none'
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

const menuList = [
  {
    menuName : 'Dashboard',
    menuIcon : '/icons/sidemenu/home.png',
    menuUrl : '/admin/dashboard'
  },
  {
    menuName : 'Apprisal Cycle',
    menuIcon : '/icons/sidemenu/apprisalcycle.png',
    menuUrl : '/admin/apprisalcycle'
  },
  {
    menuName : 'Performance Modules',
    menuIcon : '/icons/sidemenu/performancemodules.png',
    menuUrl : '/admin/performancemodules'
  },
  {
    menuName : 'Continuous Modules',
    menuIcon : '/icons/sidemenu/continuousmodules.png',
    menuUrl : '/admin/continuousmodules'
  },
  {
    menuName : 'Notifications',
    menuIcon : '/icons/sidemenu/notifications.png',
    menuUrl : '/admin/notifications'
  },
  {
    menuName : 'Feedback',
    menuIcon : '/icons/sidemenu/feedback.png',
    menuUrl : '/admin/feedback'
  },
  {
    menuName : 'Skill Sets',
    menuIcon : '/icons/sidemenu/skillset.png',
    menuUrl : '/admin/skillset'
  },
  {
    menuName : 'KRA',
    menuIcon : '/icons/sidemenu/kra.png',
    menuUrl : '/admin/kra'
  },
  {
    menuName : 'Competency',
    menuIcon : '/icons/sidemenu/competency.png',
    menuUrl : '/admin/competency'
  },
  {
    menuName : 'Review Questions',
    menuIcon : '/icons/sidemenu/reviewquestions.png',
    menuUrl : '/admin/reviewquestions'
  },
  {
    menuName : 'Potential',
    menuIcon : '/icons/sidemenu/potential.png',
    menuUrl : '/admin/potential'
  },
  {
    menuName : 'Summary',
    menuIcon : '/icons/sidemenu/summary.png',
    menuUrl : '/admin/summary'
  },
  {
    menuName : 'Performance Administrative',
    menuIcon : '/icons/sidemenu/performanceadministrative.png',
    menuUrl : '/admin/performanceadministrative'
  },
  {
    menuName : 'Goals Settings',
    menuIcon : '/icons/sidemenu/goalsettings.png',
    menuUrl : '/admin/goalsettings'
  },
  {
    menuName : 'General Settings',
    menuIcon : '/icons/sidemenu/generalsettings.png',
    menuUrl : '/admin/generalsettings'
  }
]

export default function Sidebar({ children }) {
  const theme = useTheme();
  const { pathname } = useLocation();
  const [open, setOpen] = useState(true);
  const [anchorEl, setAnchorEl] = useState(null);
  const [currPath, setCurrPath] = useState('');
  let navigate = useNavigate();


  // const active = getActive(list.path, pathname);
  
  const classes = useStyles();
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const navigateToPage = (menuUrl) => {
    setCurrPath(menuUrl);
    navigate(menuUrl)

  }
  useEffect(()=>{
    // path ? !!matchPath({ path, end: false }, pathname) : false;
    console.log('pathname : ');
    console.log(pathname);
    setCurrPath(pathname)
  },[])

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar sx={{ padding : '4px !important' }}>

          <Grid container>
            {
              !open &&
              <Grid item md={1} sx={{ display : 'flex', flexDirection : 'row', alignItems : 'center', gap : 1 }}>
                {
                  !open &&
                  <Stack>
                    <Typography sx={{ fontSize : '20px', color : '#474747', fontStyle : 'normal', fontWeight : 700, lineHeight : 'normal' }}>Sedap</Typography>
                  </Stack>
                }
                <Stack>
                  <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={handleDrawerOpen}
                    edge="start"
                    sx={{
                      marginRight: 5,
                      ...(open && { display: 'none' }),
                    }}
                  >
                    <MenuIcon />
                  </IconButton>
                </Stack>
                
              </Grid>
            }
            
            <Grid item xs={ open ? 12 : 11 } >
              <Stack sx={{ padding : 2,display : 'flex', flexDirection : 'row', justifyContent : 'space-between', lineHeight : 'normal' }}>
                <Stack sx={{ cursor : 'pointer' }} flexDirection={'row'} alignItems={'center'} gap={1}>
                  <SearchIcon sx={{ fontSize : 35, color : '#666666' }}/> 
                  <Box fontSize={22}>Search</Box>
                </Stack>
                <Stack sx={{ cursor : 'pointer' }} flexDirection={'row'} alignItems={'center'} gap={2}>
                  <Badge sx={{
                      "& .MuiBadge-badge": {
                        minWidth : '20px', width : '16px', height : '19px !important', top:'9px', right : '7px', fontSize : '11px', border : '2px solid #666666', backgroundColor : '#fff', color : '#666666' 
                      }
                    }} badgeContent={5} color="secondary">
                      <NotificationsIcon sx={{ fontSize : 37,color : '#666666' }} />
                  </Badge>
                  <Avatar onClick={handleClick} alt="Remy Sharp" src="https://i.pravatar.cc/300" />
                  <Menu
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                  >
                    {/* Add your menu items here */}
                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                    <MenuItem onClick={handleClose}>Settings</MenuItem>
                    <MenuItem onClick={handleClose}>Logout</MenuItem>
                  </Menu>
                </Stack>
              </Stack>
            </Grid>
          </Grid>
          
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" sx={{ display : 'flex', flexDirection : 'column' }} open={open}>
        
        <DrawerHeader>
          {
            open &&
            <>
              <Stack sx={{ width : '100%', marginLeft : '35px' }}>
                <Stack sx={{ display : 'flex', flexDirection : 'row', paddingTop : 5 }}>
                  <Typography sx={{ fontSize : '50px', color : '#474747', fontStyle : 'normal', fontWeight : 700, lineHeight : 'normal' }}>Sedap</Typography>
                  <p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 11 11" fill="none">
                      <circle cx="5.5" cy="5.5" r="5.5" fill="#168A13"/>
                    </svg>
                  </p>
                </Stack>
                
              </Stack>
              <IconButton onClick={handleDrawerClose}>
                {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
              </IconButton>
            </>
          }
        </DrawerHeader>
        <List sx={{ overflowY : 'auto', overflowX : 'hidden' }}>
          {menuList.map((each, index) => (
            <ListItem key={index} sx={
              [
                open && {
                  paddingLeft : '33px',
                  paddingRight : '12px',
                  display: 'block'
                }
              ]
              } disablePadding className={ currPath === each.menuUrl ? classes.listStylesActive : classes.listStyles } onClick={()=>{ navigateToPage(each.menuUrl) }} >
              {/* <Link onClick={()=>{setCurrPath(pathname)}} to={each.menuUrl} style={{ textDecoration : 'none', color : 'unset' }} > */}
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5,
                  }}
                  className={ currPath === each.menuUrl ? classes.menuLinkActive : '' } 
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : 'auto',
                      justifyContent: 'center',
                    }}
                  >
                    <img src={each.menuIcon} alt='menuitem' />
                  </ListItemIcon>
                  <ListItemText primary={each.menuName} sx={{ opacity: open ? 1 : 0, fontSize : '13px !important' }} />
                </ListItemButton>
              {/* </Link> */}
            </ListItem>
          ))}
          
        </List>
        <Stack sx={{ marginTop : 'auto' }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="437" height="67" viewBox="0 0 437 67" fill="none">
            <path opacity="0.9" d="M0 9.39998L18.2083 6.99998C36.4167 4.59998 72.8333 -0.200023 109.25 0.999977C145.667 2.19998 182.083 9.39998 218.5 17.8C254.917 26.2 291.333 35.8 327.75 41.8C364.167 47.8 400.583 50.2 437 46.6C473.417 43 509.833 33.4 546.25 25C582.667 16.6 619.083 9.39998 655.5 14.2C691.917 19 728.333 35.8 764.75 44.2C801.167 52.6 837.583 52.6 874 43C910.417 33.4 946.833 14.2 983.25 11.8C1019.67 9.39998 1056.08 23.8 1092.5 33.4C1128.92 43 1165.33 47.8 1201.75 46.6C1238.17 45.4 1274.58 38.2 1311 35.8C1347.42 33.4 1383.83 35.8 1420.25 29.8C1456.67 23.8 1493.08 9.39998 1529.5 9.39998C1565.92 9.39998 1602.33 23.8 1638.75 27.4C1675.17 31 1711.58 23.8 1748 20.2C1784.42 16.6 1820.83 16.6 1857.25 15.4C1893.67 14.2 1930.08 11.8 1966.5 11.8C2002.92 11.8 2039.33 14.2 2075.75 20.2C2112.17 26.2 2148.58 35.8 2185 32.2C2221.42 28.6 2257.83 11.8 2294.25 8.19998C2330.67 4.59998 2367.08 14.2 2403.5 23.8C2439.92 33.4 2476.33 43 2512.75 45.4C2549.17 47.8 2585.58 43 2603.79 40.6L2622 38.2V67H2603.79C2585.58 67 2549.17 67 2512.75 67C2476.33 67 2439.92 67 2403.5 67C2367.08 67 2330.67 67 2294.25 67C2257.83 67 2221.42 67 2185 67C2148.58 67 2112.17 67 2075.75 67C2039.33 67 2002.92 67 1966.5 67C1930.08 67 1893.67 67 1857.25 67C1820.83 67 1784.42 67 1748 67C1711.58 67 1675.17 67 1638.75 67C1602.33 67 1565.92 67 1529.5 67C1493.08 67 1456.67 67 1420.25 67C1383.83 67 1347.42 67 1311 67C1274.58 67 1238.17 67 1201.75 67C1165.33 67 1128.92 67 1092.5 67C1056.08 67 1019.67 67 983.25 67C946.833 67 910.417 67 874 67C837.583 67 801.167 67 764.75 67C728.333 67 691.917 67 655.5 67C619.083 67 582.667 67 546.25 67C509.833 67 473.417 67 437 67C400.583 67 364.167 67 327.75 67C291.333 67 254.917 67 218.5 67C182.083 67 145.667 67 109.25 67C72.8333 67 36.4167 67 18.2083 67H0V9.39998Z" fill="url(#paint0_linear_74_46)" fillOpacity="0.4"/>
            <defs>
              <linearGradient id="paint0_linear_74_46" x1="0" y1="67" x2="0" y2="0.810547" gradientUnits="userSpaceOnUse">
              <stop stopColor="#F36A3E"/>
              <stop offset="1" stopColor="#FFB30B"/>
              </linearGradient>
            </defs>
            <path opacity="0.8" d="M0 45.4001L18.2083 38.2001C36.4167 31.0001 72.8333 16.6001 109.25 13.0001C145.667 9.40006 182.083 16.6001 218.5 19.0001C254.917 21.4001 291.333 19.0001 327.75 21.4001C364.167 23.8001 400.583 31.0001 437 34.6001C473.417 38.2001 509.833 38.2001 546.25 31.0001C582.667 23.8001 619.083 9.40006 655.5 3.40006C691.917 -2.59994 728.333 -0.199938 764.75 9.40006C801.167 19.0001 837.583 35.8001 874 40.6001C910.417 45.4001 946.833 38.2001 983.25 34.6001C1019.67 31.0001 1056.08 31.0001 1092.5 34.6001C1128.92 38.2001 1165.33 45.4001 1201.75 46.6001C1238.17 47.8001 1274.58 43.0001 1311 40.6001C1347.42 38.2001 1383.83 38.2001 1420.25 37.0001C1456.67 35.8001 1493.08 33.4001 1529.5 33.4001C1565.92 33.4001 1602.33 35.8001 1638.75 37.0001C1675.17 38.2001 1711.58 38.2001 1748 38.2001C1784.42 38.2001 1820.83 38.2001 1857.25 41.8001C1893.67 45.4001 1930.08 52.6001 1966.5 56.2001C2002.92 59.8001 2039.33 59.8001 2075.75 58.6001C2112.17 57.4001 2148.58 55.0001 2185 46.6001C2221.42 38.2001 2257.83 23.8001 2294.25 17.8001C2330.67 11.8001 2367.08 14.2001 2403.5 14.2001C2439.92 14.2001 2476.33 11.8001 2512.75 9.40006C2549.17 7.00006 2585.58 4.60006 2603.79 3.40006L2622 2.20006V67.0001H2603.79C2585.58 67.0001 2549.17 67.0001 2512.75 67.0001C2476.33 67.0001 2439.92 67.0001 2403.5 67.0001C2367.08 67.0001 2330.67 67.0001 2294.25 67.0001C2257.83 67.0001 2221.42 67.0001 2185 67.0001C2148.58 67.0001 2112.17 67.0001 2075.75 67.0001C2039.33 67.0001 2002.92 67.0001 1966.5 67.0001C1930.08 67.0001 1893.67 67.0001 1857.25 67.0001C1820.83 67.0001 1784.42 67.0001 1748 67.0001C1711.58 67.0001 1675.17 67.0001 1638.75 67.0001C1602.33 67.0001 1565.92 67.0001 1529.5 67.0001C1493.08 67.0001 1456.67 67.0001 1420.25 67.0001C1383.83 67.0001 1347.42 67.0001 1311 67.0001C1274.58 67.0001 1238.17 67.0001 1201.75 67.0001C1165.33 67.0001 1128.92 67.0001 1092.5 67.0001C1056.08 67.0001 1019.67 67.0001 983.25 67.0001C946.833 67.0001 910.417 67.0001 874 67.0001C837.583 67.0001 801.167 67.0001 764.75 67.0001C728.333 67.0001 691.917 67.0001 655.5 67.0001C619.083 67.0001 582.667 67.0001 546.25 67.0001C509.833 67.0001 473.417 67.0001 437 67.0001C400.583 67.0001 364.167 67.0001 327.75 67.0001C291.333 67.0001 254.917 67.0001 218.5 67.0001C182.083 67.0001 145.667 67.0001 109.25 67.0001C72.8333 67.0001 36.4167 67.0001 18.2083 67.0001H0V45.4001Z" fill="url(#paint0_linear_74_47)" fillOpacity="0.4"/>
            <defs>
            <linearGradient id="paint0_linear_74_47" x1="0" y1="67.0001" x2="0" y2="0.128906" gradientUnits="userSpaceOnUse">
            <stop stopColor="#F36A3E"/>
            <stop offset="1" stopColor="#FFB30B"/>
            </linearGradient>
            </defs>

            <path d="M0 35.1999L18.2083 31.5999C36.4167 27.9999 72.8333 20.7999 109.25 23.1999C145.667 25.5999 182.083 37.5999 218.5 39.9999C254.917 42.3999 291.333 35.1999 327.75 25.5999C364.167 15.9999 400.583 3.99988 437 3.99988C473.417 3.99988 509.833 15.9999 546.25 20.7999C582.667 25.5999 619.083 23.1999 655.5 24.3999C691.917 25.5999 728.333 30.3999 764.75 30.3999C801.167 30.3999 837.583 25.5999 874 29.1999C910.417 32.7999 946.833 44.7999 983.25 45.9999C1019.67 47.1999 1056.08 37.5999 1092.5 27.9999C1128.92 18.3999 1165.33 8.79988 1201.75 6.39988C1238.17 3.99988 1274.58 8.79988 1311 18.3999C1347.42 27.9999 1383.83 42.3999 1420.25 45.9999C1456.67 49.5999 1493.08 42.3999 1529.5 33.9999C1565.92 25.5999 1602.33 15.9999 1638.75 13.5999C1675.17 11.1999 1711.58 15.9999 1748 23.1999C1784.42 30.3999 1820.83 39.9999 1857.25 35.1999C1893.67 30.3999 1930.08 11.1999 1966.5 3.99988C2002.92 -3.20012 2039.33 1.59988 2075.75 8.79988C2112.17 15.9999 2148.58 25.5999 2185 31.5999C2221.42 37.5999 2257.83 39.9999 2294.25 32.7999C2330.67 25.5999 2367.08 8.79988 2403.5 11.1999C2439.92 13.5999 2476.33 35.1999 2512.75 44.7999C2549.17 54.3999 2585.58 51.9999 2603.79 50.7999L2622 49.5999V63.9999H2603.79C2585.58 63.9999 2549.17 63.9999 2512.75 63.9999C2476.33 63.9999 2439.92 63.9999 2403.5 63.9999C2367.08 63.9999 2330.67 63.9999 2294.25 63.9999C2257.83 63.9999 2221.42 63.9999 2185 63.9999C2148.58 63.9999 2112.17 63.9999 2075.75 63.9999C2039.33 63.9999 2002.92 63.9999 1966.5 63.9999C1930.08 63.9999 1893.67 63.9999 1857.25 63.9999C1820.83 63.9999 1784.42 63.9999 1748 63.9999C1711.58 63.9999 1675.17 63.9999 1638.75 63.9999C1602.33 63.9999 1565.92 63.9999 1529.5 63.9999C1493.08 63.9999 1456.67 63.9999 1420.25 63.9999C1383.83 63.9999 1347.42 63.9999 1311 63.9999C1274.58 63.9999 1238.17 63.9999 1201.75 63.9999C1165.33 63.9999 1128.92 63.9999 1092.5 63.9999C1056.08 63.9999 1019.67 63.9999 983.25 63.9999C946.833 63.9999 910.417 63.9999 874 63.9999C837.583 63.9999 801.167 63.9999 764.75 63.9999C728.333 63.9999 691.917 63.9999 655.5 63.9999C619.083 63.9999 582.667 63.9999 546.25 63.9999C509.833 63.9999 473.417 63.9999 437 63.9999C400.583 63.9999 364.167 63.9999 327.75 63.9999C291.333 63.9999 254.917 63.9999 218.5 63.9999C182.083 63.9999 145.667 63.9999 109.25 63.9999C72.8333 63.9999 36.4167 63.9999 18.2083 63.9999H0V35.1999Z" fill="url(#paint0_linear_74_45)" fillOpacity="0.4"/>
            <defs>
            <linearGradient id="paint0_linear_74_45" x1="0" y1="63.9999" x2="0" y2="0.438232" gradientUnits="userSpaceOnUse">
            <stop stopColor="#F36A3E"/>
            <stop offset="1" stopColor="#FFB30B"/>
            </linearGradient>
            </defs>
          </svg>
        </Stack>
        {/* <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List> */}
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <Stack>{children}</Stack>
      </Box>
    </Box>
  );
}