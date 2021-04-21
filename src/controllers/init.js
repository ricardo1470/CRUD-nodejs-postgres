#!/usr/bin/node

/* return endpoint to enter the home page */
const getinit = (req, res) => {
  res.render('index.html', { title: '@Ricardo1470' });
  console.log("index");
};

/* export functions*/
module.exports = {
  getinit
}