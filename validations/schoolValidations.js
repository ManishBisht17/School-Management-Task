const { body, query } = require("express-validator");

exports.addSchoolValidation = [
  body("name").notEmpty().withMessage("Name is required"),
  body("address").notEmpty().withMessage("Address is required"),
  body("latitude")
    .isFloat({ min: -90, max: 90 })
    .withMessage("Invalid latitude"),
  body("longitude")
    .isFloat({ min: -180, max: 180 })
    .withMessage("Invalid longitude"),
];

exports.listSchoolsValidation = [
  query("latitude")
    .isFloat({ min: -90, max: 90 })
    .withMessage("Invalid latitude"),
  query("longitude")
    .isFloat({ min: -180, max: 180 })
    .withMessage("Invalid longitude"),
];
