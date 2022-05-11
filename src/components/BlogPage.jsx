import React from "react";
import Comment from "./Comment";

const Data = [
  {
    id: 1,
    text: "Noice Dude",
  },
  {
    id: 2,
    text: "Good guy",
  },
  {
    id: 3,
    text: "Fire boi",
  },
];

const BlogPage = () => {
  // throw Error("Testing")
  return (
    <div
      style={{
        border: "solid",
        borderWidth: 1,
        borderColor: "black",
        padding: 10,
        width: "50vw",
      }}
    >
      {Data.map((comment) => (
        <Comment key={comment.id} comment={comment?.text} />
      ))}
    </div>
  );
};

export default BlogPage;
