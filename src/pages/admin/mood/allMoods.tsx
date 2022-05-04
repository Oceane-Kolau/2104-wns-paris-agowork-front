import React, { useState } from "react";
import MoodListing from "../../../components/mood/moodListing";
import MoodCreation from "../../../components/mood/moodCreation";

export default function AllMoods(): JSX.Element {
  const [latestMoodCreated, setlatestMoodCreated] = useState<boolean>(false);

  const handleRefreshMood = () => {
    return setlatestMoodCreated(true);
  };

  return (
    <>
      <MoodCreation handleRefreshMood={handleRefreshMood} />
      <MoodListing latestMoodCreated={latestMoodCreated} />
    </>
  );
}
