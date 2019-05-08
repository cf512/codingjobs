const axios = require("axios");
const router = require("express").Router();
const jobsController = require("../../controllers/jobsController");

// Matches with "api/jobs/search"
router.route("/search")
  .get((req, res) => {
    axios
      .get("http://api.indeed.com/ads/apisearch", { params: req.query })
      .then(({ data: { items } }) => res.json(items))
      .catch(err => res.status(422).json(err));
  });

// Matches with "/api/jobs/:id"
router.route("/:id")
  .post(jobsController.create);

module.exports = router;