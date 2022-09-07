import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../services/api";
import { IPost } from "../Home";
import { PostContent } from "./components/PostContent";
import { PostHeader } from "./components/PostHeader";

const username = import.meta.env.VITE_GITHUB_USERNAME;
const repoName = import.meta.env.VITE_GITHUB_REPONAME;
export function PostPage() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [post, setPost] = useState<IPost>({} as IPost);

  const { id } = useParams();

  const loadPost = useCallback(async () => {
    try {
      setIsLoading(true);
      const response = await api.get(
        `/repos/${username}/${repoName}/issues/${id}`
      );
      setPost(response.data);
      console.log(response.data.items);
    } finally {
      setIsLoading(false);
    }
  }, [post]);

  useEffect(() => {
    loadPost();
  }, []);

  return (
    <>
      <PostHeader postData={post} isLoading={isLoading} />
      {!isLoading && <PostContent content={post.body} />}
    </>
  );
}
