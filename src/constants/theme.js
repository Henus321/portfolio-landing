const defaultColors = {
  primary: "#fff",
  secondary: "#303030",
  default: "#303030",
};

const breakpoints = {
  mobile: "37.5em", // 600px
  tabPort: "56.25em", // 900px
  tabLand: "75em", // 1200px
  bigDesktop: "112.5em", // 1800px
};

export const lightTheme = {
  colors: {
    background: "#f9ffff",
    backgroundFillCode: "'%23140802'",
    ...defaultColors,
  },
  ...breakpoints,
};

export const darkTheme = {
  colors: {
    background: "#1c1c1c",
    backgroundFillCode: "'%23eee8f7'",
    ...defaultColors,
  },
  ...breakpoints,
};
