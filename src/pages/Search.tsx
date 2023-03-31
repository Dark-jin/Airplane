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
  let day = String(Number(value?.date()));

  if (month !== "10" && month !== "11" && month !== "12") {
    month = "0" + month;
  }
  if (
    day === "1" ||
    day === "2" ||
    day === "3" ||
    day === "4" ||
    day === "5" ||
    day === "6" ||
    day === "7" ||
    day === "8" ||
    day === "9"
  ) {
    day = "0" + day;
  }

  let date = Number(String(year) + month + day);

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
