import express from "express";

import {
  getStudentDashboard,
  getStudentProfile,
  getStudentSubjects,
  getStudentSubjectDetails,
  getStudentTimetable,
  getStudentAttendance,
  getStudentAttendanceHistory,
  getStudentAttendanceHistoryDetail,
} from "../controllers/studentController.js";

import {
  getStudentNotifications,
  markStudentNotificationAsRead,
  markAllStudentNotificationsAsRead,
} from "../controllers/notificationController.js";

import { authenticate } from "../middleware/authMiddleware.js";

import { authorize } from "../middleware/roleMiddleware.js";

const router = express.Router();

router.get(
  "/dashboard",
  authenticate,
  authorize("STUDENT"),
  getStudentDashboard,
);

router.get("/profile", authenticate, authorize("STUDENT"), getStudentProfile);

router.get("/subjects", authenticate, authorize("STUDENT"), getStudentSubjects);

router.get(
  "/subjects/:id",
  authenticate,
  authorize("STUDENT"),
  getStudentSubjectDetails,
);

router.get(
  "/timetable",
  authenticate,
  authorize("STUDENT"),
  getStudentTimetable,
);

router.get(
  "/attendance",
  authenticate,
  authorize("STUDENT"),
  getStudentAttendance,
);

router.get(
  "/attendance/history",
  authenticate,
  authorize("STUDENT"),
  getStudentAttendanceHistory,
);

router.get(
  "/attendance/history/:attendanceId",
  authenticate,
  authorize("STUDENT"),
  getStudentAttendanceHistoryDetail,
);

router.get(
  "/notifications",
  authenticate,
  authorize("STUDENT"),
  getStudentNotifications,
);

router.put(
  "/notifications/read-all",
  authenticate,
  authorize("STUDENT"),
  markAllStudentNotificationsAsRead,
);

router.put(
  "/notifications/:id/read",
  authenticate,
  authorize("STUDENT"),
  markStudentNotificationAsRead,
);

export default router;
