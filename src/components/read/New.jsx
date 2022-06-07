import React, { useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";

export default function DataGrid1() {
  const [tableData, setTableData] = React.useState([]);

  useEffect(() => {
    fetch("https://6273b645345e1821b2200dff.mockapi.io/crud1")
      .then((data) => data.json())
      .then((data) => setTableData(data));
  }, []);

  const columns = [
    { field: "id", headerName: "ID" },
    { field: "firstname", headerName: "Firstname", width: 150 },
    { field: "lastname", headerName: "Lastname", width: 150 },
    { field: "email", headerName: "Email", width: 200 },
    { field: "phoneno", headerName: "Phone No", width: 150 },
  ];

  return (
    <div>
      <div className="tableui"></div>
      <div className="tableui" style={{ height: 470 }}>
        <DataGrid
          rows={tableData}
          columns={columns}
          pageSize={6}
          checkboxSelection={true}
          disableSelectionOnClick
          rowsPerPageOptions={[6]}
        />
      </div>
    </div>
  );
}
