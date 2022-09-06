import ExternalLink from "../../../../components/ExternalLink";
import { PostHeaderContainer } from "./styles";
import { FaGithub, FaCalendar, FaComment, FaChevronLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { IPost } from "../../../Home";
import { dateFormatter } from "../../../../utils/formatter";
import { Loading } from "../../../Home/components/Loading";

interface PostHeaderProps {
  postData: IPost;
  isLoading: boolean;
}

export function PostHeader({ postData, isLoading }: PostHeaderProps) {
  const navigate = useNavigate();

  function handleGoBack() {
    navigate("/");
  }

  const formattedDate = dateFormatter(postData?.created_at);

  if (isLoading) {
    return <Loading />;
  }
  return (
    <PostHeaderContainer>
      <header>
        <ExternalLink
          as="button"
          text="voltar"
          href="#"
          onClick={handleGoBack}
          variant="iconLeft"
          icon={<FaChevronLeft />}
        />
        <ExternalLink
          text="Ver no Github"
          href={postData.html_url}
          target="_blank"
        />
      </header>

      <h1>{postData.title}</h1>
      <ul>
        <li>
          <FaGithub />
          {postData.user.login}
        </li>
        <li>
          <FaCalendar />
          {formattedDate}
        </li>
        <li>
          <FaComment /> {postData.comments} comentários
        </li>
      </ul>
    </PostHeaderContainer>
  );
}
