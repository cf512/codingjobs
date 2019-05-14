const router = require("express").Router();
const userRoutes = require("./users");
const jobRoutes = require("./jobs");
const authRoutes = require("./auth");

// User routes
router.use("/users", userRoutes);

// Job routes
router.use("/jobs", jobRoutes);

// Auth routes
router.use("/auth", authRoutes);

module.exports = router;