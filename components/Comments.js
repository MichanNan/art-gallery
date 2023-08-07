export default function Comments({ comments }) {
  return (
    <>
      <ul>
        {comments?.map((comment, index) => {
          return <li key={index}>{comment}</li>;
        })}
      </ul>
    </>
  );
}
