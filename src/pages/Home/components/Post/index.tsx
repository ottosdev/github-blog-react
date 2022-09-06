import { IPost } from "../..";
import { dateFormatter } from "../../../../utils/formatter";
import { PostContainer } from "./styles";

interface Props {
  post: IPost;
}

export function Post({ post }: Props) {

  const formatteDate = dateFormatter(post.created_at)

  return (
    <PostContainer to={`/post/${post.number}`}>
      <div>
        <strong>{post.title}</strong>
        <span>{formatteDate}</span>
      </div>
      <p>{post.body}</p>
    </PostContainer>
  );
}
