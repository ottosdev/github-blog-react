import styled from "styled-components";

export const ProfileContainer = styled.section`
  width: 100%;
  min-height: 13.25rem;
  margin-top: -5.5rem;
  background-color: ${(props) => props.theme.colors["base-profile"]};
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  border-radius: 18px;
  padding: 2rem 2.5rem;
  display: flex;
  gap: 2rem;
`;

export const ProfilePicture = styled.img`
  width: 9.25rem;
  height: 9.25rem;
  border-radius: 8px;
  object-fit: cover;
`;

export const ProfileDetails = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-bottom: 0.5rem;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    h1 {
      font-size: ${(props) => props.theme.textSizes["title-title-l"]};
      color: ${(props) => props.theme.colors["base-title"]};
      line-height: 130%;
    }
  }

  ul {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    flex-wrap: wrap;
    margin-top: auto;
    li {
      display: flex;
      align-items: center;
      gap: 0.5rem;

      svg {
        width: 1.125rem;
        height: 1.125rem;
        color: ${(props) => props.theme.colors["base-label"]};
      }
    }
  }
`;
