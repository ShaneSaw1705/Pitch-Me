import React from "react";
import { ThreadData } from "@/models/thread";
import axios from "axios";

export default function PostPage() {
  return (
    <div className="w-[80%] m-auto h-full">
      <h1>Create post</h1>
      <form action={async (formData: FormData) => {
        'use server'
        const formTitle = String(formData.get('title'))
        const formBody = String(formData.get('content'))
        if (!formTitle || !formBody) {
          return
        }
        const threadData: ThreadData = {
          title: formTitle,
          body: formBody,
          author_id: 'test'
        }
        try {
          await axios.post('/api/threads/create')
        } catch (error) {
          console.error('Failed to post thread:', error);
        }
        console.log(threadData)
      }} className="flex flex-col gap-2">
        <label className="input input-bordered flex items-center gap-2">
          Title
          <input
            type="text"
            name="title"
            className="grow"
            placeholder="I have an amazing idea"
          />
        </label>
        <textarea
          name="content"
          className="textarea textarea-bordered w-full h-96"
          placeholder="Content goes here"
        ></textarea>
        <button type="submit" className="btn btn-primary">submit</button>
      </form>
    </div>
  );
}
