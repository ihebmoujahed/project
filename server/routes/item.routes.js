const router = require('express').Router();
const itemController = require("../controllers/item.controller");

router.post("/register", itemController.register);
router.post("/login", itemController.login);
router.post("/post", itemController.post);
router.get("/get/post", itemController.postget);
router.post("/get/post/id", itemController.postgetwithid);
router.post("/commits", itemController.commits);
router.post("/searchName", itemController.searchName);
router.get("/searchget", itemController.searchget);
router.delete("/delete/poste/commit", itemController.deleteposte);
router.put("/updateAccunt", itemController.updateAccunt);
router.get("/get/commit", itemController.getcommit);

module.exports = router;
