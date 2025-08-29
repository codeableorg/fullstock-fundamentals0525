export const getHomePage = async (req, res) => {
  res.render("home", {
    title: "Inicio",
    activePage: "home",
  });
};
