import { useParams } from "react-router-dom";

const CourseDetails = () => {
  let { id } = useParams();


  return (
    <div className="container d-flex justify-content-center mb-5">
      <div className="d-flex flex-column gap-3">
        es el <br></br>

        {id}

      </div>
    </div>
  );
};

export default CourseDetails;