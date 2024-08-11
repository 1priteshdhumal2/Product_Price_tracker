function handleFormSubmit(event) {
  event.preventDefault();
  console.log("form was submitted");
}

export default function form() {
  return (
    <form>
      <input type="text" placeholder="write something" />
      <button onClick={handleFormSubmit}>Submit</button>
    </form>
  );
}
