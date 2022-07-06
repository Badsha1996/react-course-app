import React from "react";
import { useParams, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { MDBBtn } from "mdb-react-ui-kit";

const CourseInfo = () => {
  const { courses } = useSelector((state) => state.data);
  const { id } = useParams();
  const history = useHistory();
  const singleCourse = courses.find((item) => item.id === Number(id));
  return (
    <div style={{ marginTop: "100px" }}>
      <div
        className="row"
        style={{
          margin: "auto",
          padding: "15px",
          maxWidth: "450px",
          alignContent: "center",
        }}
      >
        <p className="col-md-12 fs-3">Course Detail</p>
        <hr />
        <p className="col-md-6 fw-bold">ID:</p>
        <p className="col-md-6">{singleCourse.id}</p>
        <p className="col-md-6 fw-bold">Title:</p>
        <p className="col-md-6">{singleCourse.title}</p>
        <p className="col-md-6 fw-bold">Slug:</p>
        <p className="col-md-6">{singleCourse.slug}</p>
        <p className="col-md-6 fw-bold">Category:</p>
        <p className="col-md-6">{singleCourse.category}</p>
      </div>
      <MDBBtn onClick={() => history.push("/courses")} color="danger">
        Go Back
      </MDBBtn>
    </div>
  );
};

export default CourseInfo;
