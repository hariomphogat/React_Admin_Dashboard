import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import {mockDataInvoices} from "../../data/mockData";
import Header from "../../components/Header";
const Invoices = ()=>{
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const columns =[
        {field:"id", headerName:"ID", flex:0.5},
       {field:"name", headerName:"Name", cellClassName:"name-column--cell", flex:1.5},
        {field:"phone", headerName:"Phone", flex:1},
        {field:"email", headerName:"Email", flex:2},
        {field:"cost", headerName:"Cost", flex:1,
        renderCell: (params)=>(
            <Typography color={colors.greenAccent[500]}>
                ${params.row.cost}
            </Typography>
        )},
        {field:"date", headerName:"Date", flex:1},
    ];
 return <Box m="20px">
    <Box display="flex" alignItems="center" justifyContent="space-between">
<Header title="INVOICES" subtitle="List Of Invoice Balances!" />
</Box>
<Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
            "& .MuiDataGrid-root":{
                border:"none",
            },
            "& .MuiDataGrid-cell":{
                borderBottom:"none",
            },
            
            "& .name-column--cell":{
                color: colors.greenAccent[300]
            },
            "& .MuiDataGrid-columnHeaders":{
                backgroundColor: colors.blueAccent[700],
                borderbottom:"none"
            },
           
            "& .MuiDataGrid-footerContainer":{
                borderTop:"none",
                backgroundColor: colors.blueAccent[700]
            },
            "& .MuiDataGrid-toolbarContainer .MuiButton-text":{
                color: `${colors.grey[100]} !important`
            },
            "& .MuiCheckbox-root":{
                color:`${colors.greenAccent[200]} !important`
            }
            
        }}
        >
            <DataGrid 
            checkboxSelection
            rows = {mockDataInvoices} 
            columns = {columns} 
            />
        </Box>
    </Box>
}
export default Invoices; 