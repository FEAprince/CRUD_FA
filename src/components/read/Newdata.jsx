import MUIDataTable from "mui-datatables";
import React, { useEffect } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";

const muiCache = createCache({
  key: "mui-datatables",
  prepend: true,
});

export default function App() {
  const [data, setdata] = React.useState([]);

  useEffect(() => {
    fetch("https://6273b645345e1821b2200dff.mockapi.io/crud1")
      .then((data) => data.json())

      .then((data) => setdata(data));
  }, []);
  const columns = [
    { name: "id", label: "ID" },
    { name: "firstname", label: "Firstname", width: 150 },
    { name: "lastname", label: "Lastname", width: 150 },
    { name: "email", label: "Email", width: 200 },
    { name: "phoneno", label: "Phone No", width: 150 },
  ];

  return (
    <CacheProvider value={muiCache}>
      <div className="tableui" style={{ height: 470 }}>
        <ThemeProvider theme={createTheme()}>
          <MUIDataTable title={"User Data"} data={data} columns={columns} />
        </ThemeProvider>
      </div>
    </CacheProvider>
  );
}
