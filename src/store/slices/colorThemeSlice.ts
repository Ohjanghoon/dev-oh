import { createSlice } from "@reduxjs/toolkit";

interface initialType {
  theme: string;
}

const storedTheme = localStorage.getItem("theme");
const initialState: initialType = {
  theme: storedTheme || "light",
};

const colorThemeSlice = createSlice({
  name: "colorTheme",
  initialState,
  reducers: {
    lightMode: (state) => {
      state.theme = "light";
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", JSON.stringify(state.theme));
    },
    darkMode: (state) => {
      state.theme = "dark";
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", JSON.stringify(state.theme));
    },
  },
});

export const { lightMode, darkMode } = colorThemeSlice.actions;
export default colorThemeSlice.reducer;
