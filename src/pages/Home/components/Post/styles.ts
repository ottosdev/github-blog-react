import { Link } from "react-router-dom";
import styled from "styled-components";

export const PostContainer = styled(Link)`
  width: 100%;
  height: 16.25rem;
  border-radius: 10px;
  background-color: ${(props) => props.theme.colors["base-post"]};
  border: 2px solid ${(props) => props.theme.colors["base-post"]};
  padding: 2rem;
  transition: 0.4s;

  &:hover {
    border-color: ${(props) => props.theme.colors["base-label"]};
  }

  div {
    display: flex;
    gap: 1rem;
    margin-bottom: 1.25rem;

    strong {
      flex: 1;
      font-size: ${(props) => props.theme.textSizes["title-title-m"]};
      color: ${(props) => props.theme.colors["base-title"]};


      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
    }
    span {
      width: max-content;
      font-size: ${(props) => props.theme.textSizes["title-title-s"]};
      color: ${(props) => props.theme.colors["base-span"]};
    }
  }
  p {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;
  }
`;
