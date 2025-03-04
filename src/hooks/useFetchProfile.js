import { useEffect, useState } from "react";

const useFetchProfile = () => {
  const [profile, setProfile] = useState("");

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      const response = await fetch("https://picsum.photos/200");
      const profileUrl = response.url;

      setProfile(profileUrl);
    } catch (err) {
      console.log("Error Fetching the data", err);
    }
  };
  return profile;
};

export default useFetchProfile;
