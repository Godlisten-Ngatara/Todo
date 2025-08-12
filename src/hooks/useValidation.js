import React from "react";
import { parseISO, isValid, isBefore, isAfter, addDays } from "date-fns";
const MAX_TITLE = 100;
const MAX_DESC = 2000;
const ALLOWED_FIELDS = [
  "title",
  "desc",
  "deadline",
  "priority",
  "category",
  "completed",
];
export const useValidation = (payload = {}) => {
  // Returns { valid: boolean, errors: { field: message } }
  const errors = {};

  // Prevent mass-assignment: filter to allowed fields before further use (important!)
  const safePayload = {};
  for (const k of ALLOWED_FIELDS) {
    if (Object.prototype.hasOwnProperty.call(payload, k))
      safePayload[k] = payload[k];
  }

  // Title: required, trimmed, length, no control chars
  const title = (safePayload.title || "").toString().trim();
  if (!title) errors.title = "Title is required";
  else if (title.length > MAX_TITLE)
    errors.title = `Title must be ≤ ${MAX_TITLE} chars`;
  else if (/[\u0000-\u001F]/.test(title))
    errors.title = "Invalid characters in title";

  // Description: optional, limit length
  const desc = (
    safePayload.desc == null ? "" : String(safePayload.desc)
  ).trim();
  if (desc.length > MAX_DESC)
    errors.desc = `Description must be ≤ ${MAX_DESC} chars`;

  // dueDate: if present, must be valid ISO date (no time-zone magic)
  if (safePayload.deadline) {
    const dt = parseISO(safePayload.deadline);
    const now = new Date();
    if (!isValid(dt)) {
      errors.deadline = "Invalid date format";
    } else if (isBefore(dt, now)) {
      errors.deadline = "Due date must be today or later";
    } else if (isAfter(now, addDays(dt, 30))) {
      errors.deadline = "Due date cannot be more than 1 month in the future";
    }
  }

  // Category: cannot be empty
  if (safePayload.category == null || safePayload.category === "") {
    errors.category = "Category is required";
  }

  return { valid: Object.keys(errors).length === 0, errors, safePayload };
};
