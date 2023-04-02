import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/FlightStatusList": {
        target: "http://openapi.airport.co.kr/service/rest",
        changeOrigin: true,
        secure: true,
        ws: true,
      },
      "/AirportParking": {
        target: "http://openapi.airport.co.kr/service/rest",
        changeOrigin: true,
        secure: true,
        ws: true,
      },
      "/AirportParkingCongestion": {
        target: "http://openapi.airport.co.kr/service/rest",
        changeOrigin: true,
        secure: true,
        ws: true,
      },
      "/FlightScheduleList": {
        target: "http://openapi.airport.co.kr/service/rest",
        changeOrigin: true,
        secure: true,
        ws: true,
      },
    },
  },
});
