import { thread } from "@prisma/client";
import React from "react";

interface Props {
  post: thread;
}

export default function Thread(props: Props) {
  const datePosted = String(props.post.dated_posted);
  return (
    <div className="card card-side bg-base-100 shadow-xl">
      {/* <figure>
        <img
          src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
          alt="Movie"
        />
      </figure> */}
      <div className="card-body">
        <h2 className="card-title">{props.post.title}</h2>
        <p>{props.post.body}</p>
        <p>{datePosted}</p>
        <div className="card-actions justify-end">
          <button className="btn">
            Button
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
