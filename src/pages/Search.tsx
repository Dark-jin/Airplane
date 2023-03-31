import { domesticsearch } from "../apis/airplane";
import React, { useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import { DesktopDatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { DatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { TextField } from "@mui/material";

const Search = () => {
  const [value, setValue] = useState<Dayjs | null>(null);
  let year = Number(value?.year());
  let month = String(Number(value?.month()) + 1);
  let day = Number(value?.date());

  if (month !== "10" || "11" || "12") {
    month = "0" + month;
  }
  let date = String(year) + String(month) + String(day);

  const searchbtn = () => {
    console.log(date);
    domesticsearch(date);
  };
  return (
    <div>
      <h1>Search</h1>
      <div>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DesktopDatePicker
            value={value}
            onChange={(value) => setValue(value)}
          />
        </LocalizationProvider>
      </div>
      <div>
        <button onClick={searchbtn}>검색</button>
      </div>
    </div>
  );
};
export default Search;
