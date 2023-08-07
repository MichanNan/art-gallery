export default function CommentForm({ onSubmitComment, slug }) {
  return (
    <>
      <form onSubmit={(event) => onSubmitComment(event, slug)}>
        <label htmlFor="comment">Leave a comment</label>
        <input name="comment" type="text"></input>
        <button>Send</button>
      </form>
    </>
  );
}
