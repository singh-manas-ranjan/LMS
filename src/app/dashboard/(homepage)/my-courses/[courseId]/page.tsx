import React from "react";
import coursesList, { Course } from "../../../../../../public/courses";
import { Text } from "@chakra-ui/react";
import VideoPlayerComponent from "@/app/ui/dashboard/enrolledCoursesContainer/myCoursesCard/videoPlayer/VideoPlayerComponent";
interface Props {
  params: { courseId: string };
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
}

const VideoPlayer = ({ params, searchParams }: Props) => {
  const courseId = atob(params.courseId);
  const sectionNo = Number(searchParams.section) - 1;
  const lectureNo = Number(searchParams.lecture) - 1;
  const course: Course | undefined = coursesList.find(
    (course) => course.courseId === courseId
  );
  const lectureVideos: string[] = course?.courseIndex
    ? course.courseIndex[sectionNo]?.videoLinks
    : [];
  const selectedLecture =
    course && lectureVideos ? lectureVideos[lectureNo] : course?.courseLink;

  if (!selectedLecture) {
    return <Text>No video selected or available.</Text>;
  }
  return <VideoPlayerComponent url={selectedLecture} />;
};

export default VideoPlayer;
