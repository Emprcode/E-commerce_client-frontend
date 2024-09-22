import { Spinner } from "react-bootstrap";

export const SpinnerComponent = () => {
  return (
    <div className="text-center p-4">
      <Spinner animation="border" role="status" className="">
        <span className="visually-hidden ">Loading...</span>
      </Spinner>
    </div>
  );
};
