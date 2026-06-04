import axios from "axios";

const api = axios.create({
    baseURL: "https://restcountries.com/v3.1"
})

import React from "react";

export const postapi = () => {
  return api.get('/all?fields=name,capital,currencies,population,region,flags');
}
