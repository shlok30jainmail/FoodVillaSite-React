const heading1 = React.createElement("h1", {
    className: "title"
}, "Heading 1");
const heading2 = React.createElement("h2", {
    className: "title"
}, "Heading 2");
const container = React.createElement("div", {
    id: "container"
}, [
    heading1,
    heading2
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
// passing react elements inside the root
root.render(container);

//# sourceMappingURL=index.6bd02f5a.js.map
