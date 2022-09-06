import ExternalLink from "../../../../components/ExternalLink";
import { ProfileContainer, ProfileDetails, ProfilePicture } from "./styles";
import { FaGithub, FaUser } from "react-icons/fa";
import { useCallback, useEffect, useState } from "react";
import { api } from "../../../../services/api";
import { Loading } from "../Loading";

interface ProfileData {
  login: string;
  bio: string;
  avatar_url: string;
  html_url: string;
  name: string;
  company?: string;
  followers: number;
}

const username = import.meta.env.VITE_GITHUB_USERNAME;
export function Profile() {
  const [profileData, setProfileData] = useState<ProfileData>(
    {} as ProfileData
  );
  const [isLoading, setIsLoading] = useState(true);

  const loadProfileData = useCallback(async () => {
    try {
      setIsLoading(true);
      const response = await api.get(`/users/${username}`);

      setProfileData(response.data);
    } finally {
      setIsLoading(false);
    }
  }, [profileData]);

  useEffect(() => {
    loadProfileData();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <ProfileContainer>
      <ProfilePicture src={profileData.avatar_url} />

      <ProfileDetails>
        <header>
          <h1>{profileData.name}</h1>

          <ExternalLink
            text="Github"
            href={profileData.html_url}
            target="_blank"
          />
        </header>
        <p>{profileData.bio}</p>
        <ul>
          <li>
            <FaGithub />
            {profileData.login}
          </li>
          <li>
            {profileData?.company && (
              <li>
                <FaUser />
                {profileData.company}
              </li>
            )}
          </li>

          <li>{profileData.followers} seguidores</li>
        </ul>
      </ProfileDetails>
    </ProfileContainer>
  );
}
