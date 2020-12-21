export const renderHome = (req, res) => {
  res.render("home.ejs", { path: "Home" });
}
export default  {renderHome}