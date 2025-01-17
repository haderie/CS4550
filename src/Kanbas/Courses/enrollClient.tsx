import axios from "axios";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const ENROLLMENTS_API = `${REMOTE_SERVER}/api/enrollments`;

export const fetchAllEnrollments = async () => {
  const { data } = await axios.get(ENROLLMENTS_API);
  return data;
};

export const getUserEnrollments = async (userId: any) => {
  const { data } = await axios.get(`${ENROLLMENTS_API}/${userId}`);
  return data;
};

export const enrollUserInCourse = async (userId: string, courseId: string) => {
  const { data } = await axios.put(`${ENROLLMENTS_API}/${userId}/${courseId}`);
  return data;
};

export const unenrollUserInCourse = async (
  userId: string,
  courseId: string
) => {
  const { data } = await axios.delete(
    `${ENROLLMENTS_API}/${userId}/${courseId}`
  );
  return data;
};
