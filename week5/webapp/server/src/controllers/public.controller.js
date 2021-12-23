const getHome = (req, res, next) => {
  res.end('HOME ROUTE');
}

module.exports = {
  getHome,
};