import React from "react";
import { useParams } from "react-router-dom";

const CourseDetails = () => {
  const params = useParams()
  console.log(params.c_id);
  return (
    <div>
      <h1>Course Details</h1>
    </div>
  );
};

export default CourseDetails;
