export const colorsArray = [
  { label: "Red", value: "red" },
  { label: "Yellow", value: "yellow" },
  { label: "Green", value: "green" },
  { label: "Blue", value: "blue" }
];

const components = [
  { title: "Buttons", path: "demo" },
  { title: "Selection Control", path: "demo-selection-control" },
  { title: "Input", path: "demo-input" },
  { title: "Snackbar", path: "demo" },
  { title: "Chips", path: "demo" },
  { title: "Progress", path: "demo" },
  { title: "Typograpy", path: "demo" },
  { title: "Cards", path: "demo" },
  { title: "Pagination", path: "demo" },
  { title: "Progress Tabs", path: "demo" }
];

export const componentsArray = components.map(arr => {
  return {
    label: arr.title,
    value: arr.title.toLocaleLowerCase()
  };
});
