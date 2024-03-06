// CourseDataService.js

import { MYAXIOS } from "./Helper";

export async function GetLearningContent() {
  try {
    const response = await MYAXIOS.get("/api/courseData");
    const result = response.data; // Access the data property directly
    console.log("result", result);
    return result;
  } catch (error) {
    console.error("Error fetching course data:", error);
    throw error; // Re-throw the error to be caught by the component
  }
}
