import React, { useState, useEffect } from "react";
import { MDBValidation, MDBInput, MDBBtn } from "mdb-react-ui-kit";
import { useDispatch, useSelector } from "react-redux";
import { createCourseStart, updateCourseStart } from "../redux/actions";
import { useHistory, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const initialState = {
  title: "",
  slug: "",
  category: "",
};

const AddEditCourse = () => {
  const [formValue, setFormValue] = useState(initialState);
  const { courses } = useSelector((state) => state.data);
  const { title, slug, category } = formValue;
  const [editMode, setEditMode] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams();
  useEffect(() => {
    if (id) {
      setEditMode(true);
      const singleCourse = courses.find((item) => item.id === Number(id));
      setFormValue({ ...singleCourse });
    }
    // eslint-disable-next-line
  }, [id]);

  const onChange = (e) => {
    setFormValue({ ...formValue, [e.target.title]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && slug  && category) {
      if (!editMode) {
        dispatch(createCourseStart(formValue));
        toast.success("Course Added Successfully");
        setTimeout(() => history.push("/courses"), 500);
      } else {
        dispatch(updateCourseStart({ id, formValue }));
        setEditMode(false);
        toast.success("Course Updated Successfully");
        setTimeout(() => history.push("/courses"), 500);
      }
    }
  };
  return (
    <MDBValidation
      className="row g-3"
      style={{ marginTop: "100px" }}
      noValidate
      onSubmit={handleSubmit}
    >
      {/* <form onSubmit={handleSubmit}> */}
      <p className="fs-2 fw-bold">
        {editMode ? "Update Course Detail" : "Add Course Detail"}
      </p>
      <div
        style={{
          margin: "auto",
          padding: "15px",
          maxWidth: "400px",
          alignContent: "center",
        }}
      >
        <MDBInput
          value={title || ""}
          title="title"
          type="text"
          onChange={onChange}
          required
          label="Title"
          validation="Please provide a title."
          invalid
        />
        <br />
        <MDBInput
          value={slug || ""}
          title="slug"
          onChange={onChange}
          required
          label="Slug"
          type="text"
          validation="Please provide an slug."
          invalid
        />
        
        <br />
        <MDBInput
          value={category || ""}
          title="category"
          type="text"
          onChange={onChange}
          required
          label="Category"
          validation="Please provide an catagory"
          invalid
        />
        <br />
        <div className="col-12">
          <MDBBtn style={{ marginRight: "10px" }} type="submit">
            {editMode ? "Update" : "Add"}
          </MDBBtn>
          <MDBBtn onClick={() => history.push("/courses")} color="danger">
            Go Back
          </MDBBtn>
        </div>
      </div>
      {/* </form> */}
    </MDBValidation>
  );
};

export default AddEditCourse;
