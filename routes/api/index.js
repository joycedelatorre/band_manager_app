const router = require("express").Router();
const bandRoutes = require("./bands");
const userRoutes = require("./users");

router.use("/bands", bandRoutes);
router.use("/users", userRoutes);

module.exports = router;
