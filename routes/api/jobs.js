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
          highlight: 0,
          ...req.query
        }
      })
      .then(({ data }) => res.json(data))
      .catch(err => res.status(422).json(err));
  });

// Matches with "/api/jobs/:userId"
router.route("/:userId")
  .post(jobsController.create)
  .put(jobsController.delete);

module.exports = router;