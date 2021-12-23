const jsonCases = require('../../data/cases.json');
const { handleHTTPError, HTTPError } = require('../../utils');

const getIndex = (req, res, next) => {
  res.status(200).json(jsonCases);
}

const getCaseBySlug = (req, res, next) => {
  try {
    const { caseSlug } = req.params;
    const project = jsonCases.find((project) => project.Slug === caseSlug);
    if (!project) {
      throw new HTTPError(`The project with slug ${caseSlug} does not exist!`, 404);
    }
    res.status(200).json(project);
  } catch (error) {
    handleHTTPError(error, next);
  }
}

module.exports = {
  getIndex,
  getCaseBySlug,
};