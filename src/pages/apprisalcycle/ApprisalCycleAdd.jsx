import { useRef, useState } from "react";
import { 
    Card, 
    CardContent, 
    CardHeader, 
    Stack,
    InputLabel,
    OutlinedInput,
    FormControl,  
    TextareaAutosize,
    Grid,
    FormControlLabel,
    Checkbox,
    Tooltip,
    TableContainer,
    Table,
    TableHead,
    TableRow,
    TableCell,
    Paper,
    TableBody,
    Switch,
    Radio,
    RadioGroup,
    Chip,
    Box,
    Select,
    MenuItem,
    Autocomplete,
    TextField, 
    Button,
    IconButton,
    Typography,
    Menu

} from "@mui/material";
import { StyledCardHeader } from "../../styled/StyledCardHeader";
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';
import styled from "@emotion/styled";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const typesOfEmployee = [
  'Temporary',
  'On Contract',
  'Trainee',
  'Permanent',
];

const listOfDesignations = [
    'Administration',
    'Manager',
    'Assistant Manager',
    'Team Member',
];
const listOfDepartments = [
    'HR',
    'Management',
    'IT',
    'Marketing',
];
const listOfRoles = [
    'Admin',
    'Sub Admin',
    'Manager',
    'Team Member',
    'Compensation user',
    'Director',
    'Team Incharge',
    'Sub Admin',
    'Manager',
];
const employeeLocation = [
    { label : 'Madurai' },
    { label : 'Chennai' },
    { label : 'Kanchipuram' },
    { label : 'Thiruvannamalai' },
    { label : 'Kerala' },
    { label : 'Coimbatore' },
    { label : 'Jaipur' },
];
// const appraisalOptionValue = [
//     {
//         value : 'location',
//         name : 'Location',
//         show : false,
//     },
//     {
//         value : 'department',
//         name : 'Department',
//         show : false,
//     },
//     {
//         value : 'role',
//         name : 'Role',
//         show : false,
//     },
//     {
//         value : 'totalworkexp',
//         name : 'Total Work Experience',
//         show : false,
//     },
// ]
export default function ApprisalCycleAdd() {
    const inputFileRef = useRef(null);
    const [designationList, setDesignationList] = useState([]);
    const [departmentList, setDepartmentList] = useState([]);
    const [totalWorkExp, setTotalWorkExp] = useState('');
    const [roleList, setRoleList] = useState([]);
    const [employeeType, setEmployeeType] = useState([]);
    const [anchorEl, setAnchorEl] = useState(null);
    const [appraisalOptionValue, setAppraisalOptionValue] = useState([
                                                                {
                                                                    value : 'location',
                                                                    name : 'Location',
                                                                    show : false,
                                                                },
                                                                {
                                                                    value : 'department',
                                                                    name : 'Department',
                                                                    show : false,
                                                                },
                                                                {
                                                                    value : 'role',
                                                                    name : 'Role',
                                                                    show : false,
                                                                },
                                                                {
                                                                    value : 'totalworkexp',
                                                                    name : 'Total Work Experience',
                                                                    show : false,
                                                                }
                                                            ])
    const [showAddOptionButton,setShowAddOptionButton] = useState(true);
    const handleEmpTypeChange = (event) => {
        const {
            target: { value },
        } = event;
        setEmployeeType(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
    };
    const handleDesignationChange = (event) => {
        const {
            target: { value },
        } = event;
        setDesignationList(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
    };
    const handleRoleChange = (event) => {
        const {
            target: { value },
        } = event;
        setRoleList(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
    };
    const handleDepartmentChange = (event) => {
        const {
            target: { value },
        } = event;
        setDepartmentList(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
    };
    const handleTotalWorkExpChange = (event) => {
        setTotalWorkExp(event.target.value);
    };
    const showOptionsDropDown = (event) => {
        setAnchorEl(event.currentTarget);
    }
    const closeOptionsDropDown = (event) => {
        setAnchorEl(null)
    }
    const showApprisalOptionBlocks = (option) => {
        const index = appraisalOptionValue.findIndex(x => x.value === option);
        appraisalOptionValue[index].show = true;
        console.log(appraisalOptionValue[index]);
        const findAnyShowing = appraisalOptionValue.findIndex(x => x.show === false);
        console.log('dfsdsdfsdf',findAnyShowing);
        if(findAnyShowing < 0) {
            setShowAddOptionButton(false);
        }
        setAnchorEl(null)
    }
    const rmvOptionBlock = (index) => {
        console.log(index);
        // appraisalOptionValue[index].show = false;
        let cpApprisalOpt = appraisalOptionValue;
        cpApprisalOpt[index].show = false;
        setAppraisalOptionValue(cpApprisalOpt)
        setShowAddOptionButton(true);
        console.log(appraisalOptionValue);
    }
    // const BaseTextareaAutosize = styled(TextareaAutosize)(
    //     () => `
    //         width: 100%;
    //         max-width: 71%;
    //         min-width: 71%;
    //         max-height: 120px;
    //         min-height: 120px;
    //         font-family: League Spartan,sans-serif;
    //         font-size: 1.1rem;
    //         font-weight: 400;
    //         line-height: 1.5;
    //         padding: 8px 12px;
    //         border-radius: 4px;
    //         border-color: #c9c9c9;
    //         // firefox
    //         &:focus-visible {
    //         outline: 0;
    //         }
    //   `,
    // );

    const CardHeaderStyled = styled('span')({
        position: 'relative',
        backgroundColor: '#ffc0b6',
        borderTopLeftRadius : '6px',
        borderBottomLeftRadius : '6px',
        borderTopRightRadius : '3px',
        borderBottomRightRadius : '3px',
        marginRight: '20px', // Adjust the right margin as needed
        padding : '11px'
    })

    const TriangleShape = styled('div')({
        position: 'absolute',
        top: 0,
        right: '-14px',
        width: 0,
        height: 0,
        borderTop: '20px solid transparent',
        borderBottom: '17px solid transparent',
        borderLeft: '15px solid #ffc0b6', // Adjust the color to match the background
    });
    const handleChooseFileInput = () => {
        inputFileRef.current.click();
    };
    return (
        <>
        <Card sx={{ borderRadius : '3px', boxShadow: '0px 0px 15px 0px rgba(0,0,0,0.1)'}}>
            <StyledCardHeader title={<CardHeaderStyled sx={{ background : '#ffc0b6' }}>Appraisal Cycle<TriangleShape /></CardHeaderStyled>} />
            <StyledCardHeader sx={{ paddingTop : 0 }} title={<Stack sx={{ background : '#FFF4E7', padding : 2, borderRadius : 1 }}> Add Appraisal Cycle </Stack>} />
            <CardContent>
                
                
                <Stack direction='row' mb={2}>
                    <Stack width={'50%'} direction='row' gap={2} alignItems='center'>
                        <label style={{ width : '27%', textAlign : 'right' }}>Name of the Appraisal <span className="requiredSymbol">*</span> </label>
                        <OutlinedInput sx={{ width : '70%' }} size="small" />
                    </Stack>
                    <Stack width={'50%'} direction='row' gap={2} alignItems='center'>
                        <label style={{ width : '27%', textAlign : 'right' }}>Appraisal Cycle Period <span className="requiredSymbol">*</span></label>
                        <LocalizationProvider size="small" dateAdapter={AdapterDayjs}  >
                            <DatePicker size="small" slotProps={{ textField: { size: 'small' } }} format="DD-MM-YYYY" />
                        </LocalizationProvider>
                        
                    </Stack>
                </Stack>
                <Stack direction='row'>
                    <Stack width={'50%'} direction='row' gap={2} >
                        <label style={{ width : '39%', textAlign : 'right' }}>Description</label>
                        <TextareaAutosize className="apprisalAddTextArea" minRows={4} />
                    </Stack>
                    <Stack width={'50%'} direction='row' gap={2} height={30} sx={{ borderRadius : '3px' }}>
                        <label style={{ width : '27%', textAlign : 'right' }}>Guideline Document</label>
                        <Stack direction='row' className="guidelineDocument" width="50%">
                            Upload from &nbsp; <a style={{ textDecoration : 'underline' }} onClick={handleChooseFileInput} href="#">Desktop</a>
                            <input type="file" id="guidelineDocumentId" style={{ display : 'none' }} ref={inputFileRef} />
                            
                        </Stack>
                        <Stack>
                            <Tooltip title="Max size 2MB" arrow>
                                <ErrorOutlineOutlinedIcon sx={{ color : "#c6c6c6" }} />
                            </Tooltip>
                        </Stack>
                        {/* <OutlinedInput sx={{ width : '60%' }} /> */}
                    </Stack>
                </Stack>
                <StyledCardHeader sx={{ paddingTop : 0, width : '30%' }} title={<Stack sx={{ paddingBottom : '2px', paddingTop : 2, borderBottom : '1px solid #c6c6c6'}}> Appraisal Process Configuration Details </Stack>} />
                <Stack direction='row' gap={6}>
                    <Stack width={'50 %'} direction='row' gap={2} alignItems='center'>
                        <label style={{ width : '40%', textAlign : 'right' }}>Appraisal Cycle Period <span className="requiredSymbol">*</span></label>
                        <LocalizationProvider size="small" dateAdapter={AdapterDayjs}  >
                            <DatePicker size="small" slotProps={{ textField: { size: 'small' } }} format="DD-MM-YYYY" />
                        </LocalizationProvider>
                        <Stack>
                            <Tooltip title="Period in which the appraisal process is conducted for the given appraisal cycle." arrow>
                                <ErrorOutlineOutlinedIcon sx={{ color : "#c6c6c6" }} />
                            </Tooltip>
                        </Stack>
                        
                    </Stack>
                    <Stack width={'50 %'} direction='row' gap={2} alignItems='center'>
                        <label style={{ width : '40%', textAlign : 'right' }}>Appraisal Cycle Period <span className="requiredSymbol">*</span></label>
                        <LocalizationProvider size="small" dateAdapter={AdapterDayjs}  >
                            <DatePicker size="small" slotProps={{ textField: { size: 'small' } }} format="DD-MM-YYYY" />
                        </LocalizationProvider>
                        <Stack>
                            <Tooltip title="Period in which the reviewers evaluate the performance of their sub-ordinates/appraisee." arrow>
                                <ErrorOutlineOutlinedIcon sx={{ color : "#c6c6c6" }} />
                            </Tooltip>
                        </Stack>
                    </Stack>
                </Stack>
                <Stack direction='row' gap={20} paddingLeft={2} mt={3}>
                    <FormControlLabel
                        control={
                        <Checkbox name="gilad" size="small"/>
                        }
                        label="Enable | Multi-Rater Feedback"
                    />
                    <FormControlLabel
                        control={
                        <Checkbox name="gilad" size="small"/>
                        }
                        label="Enable | Salary Hike"
                    />
                    <FormControlLabel
                        control={
                        <Checkbox name="gilad" size="small"/>
                        }
                        label="Enable | Self Appraisal"
                    />
                </Stack>

                <StyledCardHeader sx={{ paddingTop : 0, width : '30%' }} title={<Stack sx={{ paddingBottom : '2px', paddingTop : 2, borderBottom : '1px solid #c6c6c6'}}> Module(s) to be included </Stack>} />
                <Stack paddingLeft={2}>
                    <TableContainer className="tableContainerSimple">
                        <Table sx={{ minWidth: 700 }} aria-label="customized table">
                            <TableHead className="simpleTableHeader">
                                <TableRow>
                                    <TableCell>Module(s)</TableCell>
                                    <TableCell align="center">Goals</TableCell>
                                    <TableCell align="center">KRA</TableCell>
                                    <TableCell align="center">Competency</TableCell>
                                    <TableCell align="center">Review Questions</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow key={0}>
                                    <TableCell component="th" scope="row">
                                        Reviewer
                                    </TableCell>
                                    <TableCell align="center">
                                        <Switch />
                                    </TableCell>
                                    <TableCell align="center">
                                        <Switch />
                                    </TableCell>
                                    <TableCell align="center">
                                        <Switch />
                                    </TableCell>
                                    <TableCell align="center">
                                        <Switch />   
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Stack>
                <StyledCardHeader sx={{ paddingTop : 0, width : '30%' }} title={<Stack sx={{ paddingBottom : '2px', paddingTop : 2, borderBottom : '1px solid #c6c6c6'}}> Applicable For </Stack>} />

                <Stack height="90px" paddingLeft={2} direction={'row'}  gap={3} >
                    <label style={{ textAlign : 'left', marginTop : '9px', width : '13%' }} >Date of Joining </label>
                    <Stack mb={3}>
                        <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
                        >
                            <FormControlLabel value="until" control={<Radio size="small"/>} label="Until" />
                            <FormControlLabel value="fromandto" control={<Radio size="small"/>} label="From & To" />
                            <FormControlLabel value="months" control={<Radio size="small"/>} label="Months" />
                        
                        </RadioGroup>
                        <LocalizationProvider size="small" dateAdapter={AdapterDayjs}  >
                            <DatePicker size="small" slotProps={{ textField: { size: 'small' } }} format="DD-MM-YYYY" />
                        </LocalizationProvider>
                    </Stack>
                </Stack>
                <Stack paddingLeft={2} direction={'row'}  gap={3} mb={1.6} >
                    <label style={{ textAlign : 'left', marginTop : '9px', width : '13%' }} >Employee Type </label>
                    <Select
                        multiple
                        labelId="demo-multiple-chip-label"
                        displayEmpty
                        size="small"
                        sx={{ width : 300 }}
                        value={employeeType}
                        onChange={handleEmpTypeChange}
                        input={<OutlinedInput />}
                        renderValue={(selected) => {
                            
                            if (selected.length === 0) {
                                return <em>All Employee Types</em>;
                            }

                            return (<Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                                {selected.map((value) => (
                                    <Chip key={value} label={value} />
                                ))}
                            </Box>)
                        }}
                        MenuProps={MenuProps}
                        inputProps={{ 'aria-label': 'Without label' }}
                        >
                        <MenuItem disabled value="">
                            <em>All Employee Types</em>
                        </MenuItem>
                        {typesOfEmployee.map((name) => (
                            <MenuItem
                            key={name}
                            value={name}
                            // style={getStyles(name, personName, theme)}
                            >
                            {name}
                            </MenuItem>
                        ))}
                    </Select>
                </Stack>

                <Stack paddingLeft={2} direction={'row'}  gap={3} mb={1.6}>
                    <label style={{ textAlign : 'left', marginTop : '9px', width : '13%' }} >Designation </label>
                    <Select
                        multiple
                        labelId="demo-multiple-chip-label"
                        displayEmpty
                        size="small"
                        sx={{ width : 300 }}
                        value={designationList}
                        onChange={handleDesignationChange}
                        input={<OutlinedInput />}
                        renderValue={(selected) => {
                            
                            if (selected.length === 0) {
                                return <em>All Designations</em>;
                            }

                            return (<Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                                {selected.map((value) => (
                                    <Chip key={value} label={value} />
                                ))}
                            </Box>)
                        }}
                        MenuProps={MenuProps}
                        inputProps={{ 'aria-label': 'Without label' }}
                        >
                        <MenuItem disabled value="">
                            <em>All Designations</em>
                        </MenuItem>
                        {listOfDesignations.map((name) => (
                            <MenuItem
                            key={name}
                            value={name}
                            // style={getStyles(name, personName, theme)}
                            >
                            {name}
                            </MenuItem>
                        ))}
                    </Select>
                </Stack>
                {
                    appraisalOptionValue[0].show &&
                    <Stack paddingLeft={2} direction={'row'}  gap={3} mb={1.6} >
                        <label style={{ textAlign : 'left', marginTop : '9px', width : '13%' }} >Location </label>
                        <Stack direction={'row'} alignItems={'center'} gap={1}>
                            <Autocomplete
                                disablePortal = {false}
                                id="combo-box-demo"
                                options={employeeLocation}
                                sx={{ width: 300 }}
                                size="small"
                                renderInput={(params) => <TextField {...params} placeholder="Location" />}
                            />
                            <span className="rmvBlockIcon" onClick={() => { rmvOptionBlock(0) }}>-</span>
                        </Stack>
                    </Stack>
                }
                {
                    appraisalOptionValue[1].show &&
                    <Stack paddingLeft={2} direction={'row'}  gap={3} mb={1.6} >
                        <label style={{ textAlign : 'left', marginTop : '9px', width : '13%' }} >Department </label>
                        <Stack direction={'row'} alignItems={'center'} gap={1}>
                            <Select
                                multiple
                                labelId="demo-multiple-chip-label"
                                displayEmpty
                                size="small"
                                sx={{ width : 300 }}
                                value={departmentList}
                                onChange={handleDepartmentChange}
                                input={<OutlinedInput />}
                                renderValue={(selected) => {
                                    
                                    if (selected.length === 0) {
                                        return <em>All Departments</em>;
                                    }

                                    return (<Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                                        {selected.map((value) => (
                                            <Chip key={value} label={value} />
                                        ))}
                                    </Box>)
                                }}
                                MenuProps={MenuProps}
                                inputProps={{ 'aria-label': 'Without label' }}
                                >
                                <MenuItem disabled value="">
                                    <em>All Departments</em>
                                </MenuItem>
                                {listOfDepartments.map((name) => (
                                    <MenuItem
                                    key={name}
                                    value={name}
                                    // style={getStyles(name, personName, theme)}
                                    >
                                    {name}
                                    </MenuItem>
                                ))}
                            </Select>
                            <span className="rmvBlockIcon" onClick={() => { rmvOptionBlock(1) }}>-</span>
                        </Stack>
                    </Stack>
                }
                {
                    appraisalOptionValue[2].show &&
                    <Stack paddingLeft={2} direction={'row'}  gap={3} mb={1.6} >
                        <label style={{ textAlign : 'left', marginTop : '9px', width : '13%' }} >Role </label>
                        <Stack direction={'row'} alignItems={'center'} gap={1}>
                            <Select
                                multiple
                                labelId="demo-multiple-chip-label"
                                displayEmpty
                                size="small"
                                sx={{ width : 300 }}
                                value={roleList}
                                onChange={handleRoleChange}
                                input={<OutlinedInput />}
                                renderValue={(selected) => {
                                    
                                    if (selected.length === 0) {
                                        return <em>All Roles</em>;
                                    }

                                    return (<Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                                        {selected.map((value) => (
                                            <Chip key={value} label={value} />
                                        ))}
                                    </Box>)
                                }}
                                MenuProps={MenuProps}
                                inputProps={{ 'aria-label': 'Without label' }}
                                >
                                <MenuItem disabled value="">
                                    <em>All Roles</em>
                                </MenuItem>
                                {listOfDesignations.map((name) => (
                                    <MenuItem
                                    key={name}
                                    value={name}
                                    // style={getStyles(name, personName, theme)}
                                    >
                                    {name}
                                    </MenuItem>
                                ))}
                            </Select>
                            <span className="rmvBlockIcon" onClick={() => { rmvOptionBlock(2) }}>-</span>
                        </Stack>
                    </Stack>
                }   
                {
                    appraisalOptionValue[3].show &&
                    <Stack paddingLeft={2} direction={'row'}  gap={3} mb={1.6} display={ appraisalOptionValue[3].show ? '' : 'none' } >
                        <label style={{ textAlign : 'left', marginTop : '9px', width : '13%' }} >Total Working Experience </label>
                        <Stack direction={'row'} alignItems={'center'} gap={1}>
                            <Select
                                value={totalWorkExp}
                                sx={[ totalWorkExp !== 'bt' ? { width : 215 } : { width : 150 }]}
                                displayEmpty
                                onChange={handleTotalWorkExpChange}
                                size="small"
                                // renderValue={(selectedValue) => {
                                //     // console.log('hurray');
                                //     // console.log(selectedValue);
                                //     if(!selectedValue) {
                                //         return <em>Select</em>
                                //     }
                                //     return selectedValue;
                                // }}
                            >
                                <MenuItem value='et'>Equal To</MenuItem>
                                <MenuItem value='lt'>Lesser than</MenuItem>
                                <MenuItem value='gt'>Greater than</MenuItem>
                                <MenuItem value='ltoreq'>Less than or equal to</MenuItem>
                                <MenuItem value='gtoreq'>Greater than or equal to</MenuItem>
                                <MenuItem value='bt'>Between</MenuItem>
                            </Select>
                            <OutlinedInput placeholder="Years" sx={{ width : 75 }} size="small" />
                            <OutlinedInput placeholder="Years" sx={[ totalWorkExp !== 'bt' && { display : 'none' },{ width : 75 }]} size="small" />
                            <span className="rmvBlockIcon" onClick={() => { rmvOptionBlock(3) }} >-</span>
                        </Stack>
                    </Stack>
                }
                
                
                {
                    showAddOptionButton &&
                    <Stack paddingLeft={30}>
                        <Typography variant="p" sx={{ color : '#3F5EFC', cursor : 'pointer', width : '50px' }} onClick={showOptionsDropDown} > + Add</Typography>
                        <Menu
                            anchorEl={anchorEl}
                            open={Boolean(anchorEl)}
                            onClose={closeOptionsDropDown}
                            anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                            }}
                            transformOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                            }}
                        >
                            {
                                appraisalOptionValue && appraisalOptionValue.map((each,itr)=> {
                                    if(each.show === false) 
                                        return (<MenuItem key={itr} onClick={()=>{ showApprisalOptionBlocks(each.value) }}>{each.name}</MenuItem>)
                                })
                            }
                        </Menu>
                    </Stack>
                }
                
                <StyledCardHeader sx={{ paddingTop : 0, width : '30%' }} title={<Stack sx={{ paddingBottom : '2px', paddingTop : 2, borderBottom : '1px solid #c6c6c6'}}> Reviewer </Stack>} />
                <Stack direction={'row'} gap={2} sx={{ padding : 3, border : '1px solid #c6c6c6' }} width='40%'>
                    <Select
                        value={'Reporting To'}
                        sx={{width : 200}}
                        displayEmpty
                        onChange={handleTotalWorkExpChange}
                        renderValue={(selected)=>{
                            return 'Reporting To'
                        }}
                        size="small"
                    >
                        <MenuItem value='et'>Reporting To</MenuItem>
                        <MenuItem value='lt'>Head of Appriser</MenuItem>
                        <MenuItem value='gt'>Employee</MenuItem>
                        <MenuItem value='ltoreq'>Choose Appriser on review progress</MenuItem>
                    </Select>
                    <Select
                        value={'Single Level'}
                        sx={{width : 200}}
                        displayEmpty
                        renderValue={(selected)=>{
                            return 'Single Level'
                        }}
                        onChange={handleTotalWorkExpChange}
                        size="small"
                    >
                        <MenuItem value='et'>Single Level</MenuItem>
                        <MenuItem value='lt'>Two Level</MenuItem>
                        <MenuItem value='gt'>Three Level</MenuItem>
                        <MenuItem value='ltoreq'>Four Level</MenuItem>
                    </Select>
                </Stack>
            </CardContent>
        </Card>
        </>
    )
}