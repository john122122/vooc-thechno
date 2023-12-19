const express = require("express");
const router = express.Router();
const memberController = require("./controllers/memberController");

// memberga dahldor routerlar
router.get("/", memberController.home);
router.post("/sign-up", memberController.signup);
router.post("/login", memberController.login);
router.get("/logout", memberController.logout);

// bosh routerlar
router.get("/menu", (req, res) => {
    res.send("You are in Menu page");
});

router.get("/community", (req, res) => {
    res.send("You are in Community page");
});

module.exports = router;