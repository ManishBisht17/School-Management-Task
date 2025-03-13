const express = require("express");
const router = express.Router();
const schoolController = require("../controllers/schoolController");
const {
  addSchoolValidation,
  listSchoolsValidation,
} = require("../validations/schoolValidations");

router.post("/addSchool", addSchoolValidation, schoolController.addSchool);
router.get("/listSchools", listSchoolsValidation, schoolController.listSchools);

module.exports = router;
