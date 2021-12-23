const getIndex = (req, res, next) => {
  res.status(200).json({
    message: `Welcome to the API`
  });
}

module.exports = {
  getIndex,
};