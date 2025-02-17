import { useEffect, useState } from "react";
import { MdLightMode, MdDarkMode } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { darkMode, lightMode } from "../store/slices/colorThemeSlice";

function ThemeControl() {
  const dispatch = useDispatch();
  const { theme: themeMode } = useSelector(
    (state: RootState) => state.colorTheme,
  );

  const save = (value: "light" | "dark") => {
    localStorage.setItem("theme", value);
  };

  const themeHandler = () => {
    if (themeMode === "light") {
      dispatch(darkMode());
      save("dark");
    } else {
      dispatch(lightMode());
      save("light");
    }
  };

  const [themeClass, setThemeClass] = useState<string>("");

  useEffect(() => {
    if (themeMode === "light") {
      dispatch(lightMode());
      setThemeClass("bg-white ring-gray-400");
    } else {
      dispatch(darkMode());
      setThemeClass("bg-black ring-gray-100");
    }
  }, [themeMode]);

  return (
    <button
      className={`${themeClass} justify-self-end rounded-[50%] p-2 ring-1 transition-all hover:rounded-xl`}
      onClick={themeHandler}
    >
      {themeMode === "light" ? (
        <>
          <MdLightMode className="h-6 w-6" />
        </>
      ) : (
        <>
          <MdDarkMode className="h-6 w-6 text-orange-300" />
        </>
      )}
    </button>
  );
}

export default ThemeControl;
