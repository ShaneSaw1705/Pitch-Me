import React from "react";

export default function PostPage() {
  return (
    <div>
      <h1>Create post</h1>
      <form action="">
        <label className="input input-bordered flex items-center gap-2">
          Title
          <input
            type="text"
            className="grow"
            placeholder="I have an amazing idea"
          />
        </label>
        <textarea
          className="textarea textarea-bordered"
          placeholder="Bio"
        ></textarea>
      </form>
    </div>
  );
}
