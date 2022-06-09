import MUIDataTable from "mui-datatables";
import React, { useEffect } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { newdataHandlergetData } from "../service/auth.service";
const muiCache = createCache({
  key: "mui-datatables",
  prepend: true,
});
const body = {
  id: localStorage.getItem("id"),
};
export default function Newdata() {
  const [data, setdata] = React.useState([]);

  useEffect(() => {
    getDataUser();
  }, []);

  const getDataUser = async () => {
    const response = await newdataHandlergetData(body);
    setdata(response.data);
  };

  const columns = [
    { name: "id", label: "ID" },
    { name: "firstname", label: "Firstname", width: 150 },
    { name: "lastname", label: "Lastname", width: 150 },
    { name: "email", label: "Email", width: 200 },
    { name: "phoneno", label: "Phone No", width: 150 },
  ];

  return (
    <CacheProvider value={muiCache}>
      <div className="tableui">
        <ThemeProvider theme={createTheme()}>
          <MUIDataTable title={"User Data"} data={data} columns={columns} />
        </ThemeProvider>
      </div>
    </CacheProvider>
  );
}
