import { useCallback, useEffect, useState } from "react";
import { api } from "../../services/api";
import { Loading } from "./components/Loading";
import { Post } from "./components/Post";
import { Profile } from "./components/Profile";
import { SearchInput } from "./components/SearchInput";
import { PostsListsContainer } from "./styles";

export interface IPost {
  title: string;
  body: string;
  created_at: string;
  number: string;
  html_url: string;
  comments: number;
  user: {
    login: string;
  };
}

const username = import.meta.env.VITE_GITHUB_USERNAME;
const repoName = import.meta.env.VITE_GITHUB_REPONAME;

export function Home() {
  const [posts, setPosts] = useState<IPost[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const loadPosts = useCallback(
    async (query: string = "") => {
      try {
        setIsLoading(true);
        const response = await api.get(
          `/search/issues?q=${query}%20repo:${username}/${repoName}`
        );
        setPosts(response.data.items);
        console.log(response.data.items);
      } finally {
        setIsLoading(false);
      }
    },
    [posts]
  );

  useEffect(() => {
    loadPosts();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <Profile />
      <SearchInput loadPosts={loadPosts} postsLength={posts.length} />
      <PostsListsContainer>
        {posts.map((item) => (
          <Post key={item.number} post={item} />
        ))}
      </PostsListsContainer>
    </>
  );
}
