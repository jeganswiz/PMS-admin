import { useState, useEffect } from "react";
import { Stack, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import NoDataFound from "../../components/NoDataFound";
import { updateNoDataFoundObj } from "../../redux/slices/NoDataFoundSlice";
import { useDispatch } from "react-redux";

export default function ApprisalCycle() {
    const [apprisalData, setApprisalData] = useState([]);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(updateNoDataFoundObj({ noDataContent : 'No Appraisal Cycle Found Yet', addNewRecordContent : 'Create an Appraisal Cycle', addNewRecordLink : '/admin/apprisalcycle/add' }))
    },[])
    return (
        <>
            {
                apprisalData && apprisalData.length === 0 ?
                    <NoDataFound  noDataContent = 'No Appraisal Cycle Found Yet' addNewRecordContent = 'Create an Appraisal Cycle' addNewRecordLink = '/admin/apprisalcycle/add' />
                :
                    <Stack>
                        <>
                            New Lifecycle routine
                        </>
                    </Stack>
            }
        </>
    )
}