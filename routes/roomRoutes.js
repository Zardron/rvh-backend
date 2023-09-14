const express = require("express");
const {
  createRoom,
  getAllRoom,
  uploadImages,
  addBathroom,
  addView,
  addFacilities,
  getSpecificRoom,
  addRoomDetails,
  changeRoomSize,
  changeDescription,
  updateRoomPrice,
} = require("../controller/roomController");
const { authMiddleware } = require("../middlewares/authMiddleware");
const router = express.Router();
const { uploadPhoto, roomImgResize } = require("../middlewares/uploadImages");

router.post("/", authMiddleware, createRoom);
router.get("/", getAllRoom);
router.get("/room-details/:id", getSpecificRoom);
router.put("/bathroom/:id", addBathroom);
router.put("/room-size/:id", changeRoomSize);
router.put("/room-price/:id", updateRoomPrice);
router.put("/description/:id", changeDescription);
router.put("/view/:id", addView);
router.put("/facilities/:id", addFacilities);
router.put("/details/:id", addRoomDetails);
router.put(
  "/upload/:id",
  uploadPhoto.array("images", 10),
  roomImgResize,
  uploadImages
);
module.exports = router;
