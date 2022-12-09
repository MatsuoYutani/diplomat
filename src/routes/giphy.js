const axios = require("axios");

module.exports = (req, res) => {
  console.log(`Procurando por um gif com o termo: ${req.query.term}`);

  let params = req.query.term.replace(/ /g, "+");
  params += `&api_key=${process.env.GIPHY_API_KEY}`;
  params += "&limit=5&rating=g";

  axios
    .get(`https://api.giphy.com/v1/gifs/search?q=${params}`, {
      headers: { "Accept-Encoding": "gzip,deflate,compress" },
    })
    .then((response) => {
      res.send({
        sucess: true,
        data: response.data.data,
      });
    })
    .catch((err) => {
      res.send({
        success: false,
        data: [],
      });
      console.log(err);
    });
};
