import { useState } from "react";

export default function CommentsForm() {
  let [formData, setFormData] = useState({
    username: "",
    remarks: "",
    rating: 5,
  });

  return (
    <div>
      <h4>Give a comment</h4>
      <form action="">
        <input type="text" placeholder="username" value={formData.username} />
        <br />
        <textarea
          type="text"
          placeholder="Remarks"
          value={formData.remarks}
        ></textarea>
        <br />
        <input
          type="number"
          placeholder="rating"
          min={1}
          max={5}
          value={formData.rating}
        />
        <br />
        <button>Add comment</button>
      </form>
    </div>
  );
}
