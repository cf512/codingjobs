const router = require("express").Router();
const userRoutes = require("./users");
const jobRoutes = require("./jobs");

// User routes
router.use("/users", userRoutes);

// Job routes
router.use("/jobs", jobRoutes);

module.exports = router;