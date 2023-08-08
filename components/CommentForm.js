import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function CommentForm({ onSubmitComment, slug }) {
  return (
    <div className="container">
      <Form
        className="d-flex justify-content-center align-items-center gx-1 row"
        onSubmit={(event) => {
          onSubmitComment(event, slug);
        }}
      >
        <label htmlFor="comment" className=" col-sm-12 col-md-12">
          Leave a comment
        </label>
        <input
          name="comment"
          type="text"
          className="col-sm-12 col-md-6"
        ></input>
        <Button type="submit" className=" m-1 col-sm-12 col-md-1">
          Send
        </Button>
      </Form>
    </div>
  );
}
