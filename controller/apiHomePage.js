
const homePage = (req, res) => {
    res
      .status(200)
      .send(`<h1 style="display:flex justify-content: center; align-item:"center" background-color:"white">Welcome To Password Manager`);
  };
  export default { homePage };