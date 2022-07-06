import React, { useEffect } from "react";
import {
  MDBTable,
  MDBTableHead,
  MDBTableBody,
  MDBBtn,
  MDBIcon,
  MDBTooltip,
  MDBSpinner,
} from "mdb-react-ui-kit";
import { useSelector, useDispatch } from "react-redux";
import { deleteCourseStart, loadCoursesStart } from "../redux/actions";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Home = () => {
  const { courses, loading } = useSelector((state) => state.data);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadCoursesStart());
    // eslint-disable-next-line
  }, []);

  if (loading) {
    return (
      <MDBSpinner style={{ marginTop: "150px" }} role="status">
        <span className="visually-hidden">Loading...</span>
      </MDBSpinner>
    );
  }

  const handleDelete = (id) => {
    if (window.confirm("Are you sure that you wanted to delete course ?")) {
      dispatch(deleteCourseStart(id));
      toast.success("Course Delete Successfully");
    }
  };
  return (
    <div className="container" style={{ marginTop: "150px" }}>
      <MDBTable>
        <MDBTableHead dark>
          <tr>
            <th scope="col">No.</th>
            <th scope="col">Title</th>
            <th scope="col">Slug</th>
            <th scope="col">Catagory</th>
            <th scope="col">Action</th>
          </tr>
        </MDBTableHead>
        {courses &&
          courses.map((item, index) => (
            <MDBTableBody>
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{item.title}</td>
                <td>{item.slug}</td>
                <td>{item.category}</td>
                <td>
                  <MDBBtn
                    className="m-1"
                    tag="a"
                    color="none"
                    onClick={() => handleDelete(item.id)}
                  >
                    {" "}
                    <MDBTooltip title="Delete" tag="a">
                      <MDBIcon
                        fas
                        icon="trash"
                        style={{ color: "#dd4b39" }}
                        size="lg"
                      />
                    </MDBTooltip>
                  </MDBBtn>{" "}
                  <Link to={`/editCourse/${item.id}`}>
                    <MDBTooltip title="Edit" tag="none">
                      <MDBIcon
                        fas
                        icon="pen"
                        style={{ color: "#55acee", marginBottom: "10px" }}
                        size="lg"
                      />
                    </MDBTooltip>
                  </Link>{" "}
                  <Link to={`/courseInfo/${item.id}`}>
                    <MDBTooltip title="View" tag="none">
                      <MDBIcon
                        fas
                        icon="eye"
                        size="lg"
                        style={{ color: "#3b5998", marginBottom: "10px" }}
                      />
                    </MDBTooltip>
                  </Link>
                </td>
              </tr>
            </MDBTableBody>
          ))}
      </MDBTable>
    </div>
  );
};

export default Home;
