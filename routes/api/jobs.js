const axios = require("axios");
const router = require("express").Router();
const jobsController = require("../../controllers/jobsController");

// Matches with "api/jobs/search"
router.route("/search")
  .get((req, res) => {
    axios
      .get("http://api.indeed.com/ads/apisearch", {
        params: {
          publisher: process.env.INDEED_PUBLISHER_ID,
          v: 2,
          userip: "1.2.3.4",
          useragent: "Mozilla",
          format: "json",
          ...req.query
        }
      })
      .then(({ data: { results } }) => res.json(results))
      .catch(err => res.status(422).json(err));
  });

// Matches with "/api/jobs/:id"
router.route("/:id")
  .post(jobsController.create);

module.exports = router;