import React from "react";
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@mui/material";
import { Button } from "@mui/material";

//// code of table for deposit section

////function to map table element to respective cell
function createData(
  transactionId,
  customerId,
  customerName,
  amount,
  createAt,
  status,
  action
) {
  return {
    transactionId,
    customerId,
    customerName,
    amount,
    createAt,
    status,
    action,
  };
}

////array of function call with respective cell value
const rows = [
  createData(1, 213, "james", 5000, "2022-05-15", "Requested", "View"),
  createData(2, 214, "harry", 100000, "2022-01-15", "Cancel", "View"),

  createData(3, 216, "aliza", 7600, "2022-06-01", "Requested", "View"),
  createData(4, 217, "robert", 9000, "2022-01-06", "Accepted", "View"),
];

const FundManagementData = () => {
  return (
    <TableContainer>
      <Table sx={{ border: "1px solid #16003B ", marginTop: "0.5rem" }}>
        {/* heading section of table */}
        <TableHead>
          <TableRow sx={{ background: "#16003B" }}>
            <TableCell sx={{ color: "white", borderRight: "1px solid white" }}>
              Transaction ID
            </TableCell>
            <TableCell sx={{ color: "white", borderRight: "1px solid white" }}>
              Customer ID
            </TableCell>
            <TableCell sx={{ color: "white", borderRight: "1px solid white" }}>
              Customer Name
            </TableCell>
            <TableCell sx={{ color: "white", borderRight: "1px solid white" }}>
              Amount
            </TableCell>
            <TableCell sx={{ color: "white", borderRight: "1px solid white" }}>
              Created At
            </TableCell>
            <TableCell sx={{ color: "white", borderRight: "1px solid white" }}>
              Status
            </TableCell>
            <TableCell sx={{ color: "white" }}>Action</TableCell>
          </TableRow>
        </TableHead>

        {/* body section of table */}
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.customerId}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell>{row.transactionId}</TableCell>
              <TableCell component='th' scope='row'>
                {row.customerId}
              </TableCell>
              <TableCell>{row.customerName}</TableCell>
              <TableCell>{row.amount}</TableCell>
              <TableCell>{row.createAt}</TableCell>
              <TableCell>{row.status}</TableCell>
              <TableCell>
                <Button
                  variant='contained'
                  color='success'
                  href='/layout/funddeposit'
                >
                  {row.action}
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default FundManagementData;
