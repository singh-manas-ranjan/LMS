"use client";
import React, { useEffect, useMemo, useState } from "react";
import { Text } from "@chakra-ui/react";
import VideoPlayerComponent from "@/app/ui/dashboard/enrolledCoursesContainer/myCoursesCard/videoPlayer/VideoPlayerComponent";
import { TCourse } from "../../../../../../public/courses";
interface Props {
  params: { courseId: string };
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
}

const VideoPlayer = ({ params, searchParams }: Props) => {
  const courseId = params.courseId;
  const sectionNo = Number(searchParams.section) - 1;
  const lectureNo = Number(searchParams.lecture) - 1;
  const [coursesList, setCoursesList] = useState<TCourse[]>([]);

  function getCoursesListFromLocalStorage() {
    if (typeof window === "undefined") return {} as TCourse[];

    const data = localStorage.getItem("enrolledCoursesList");
    if (data) return JSON.parse(data) as TCourse[];
    return [] as TCourse[];
  }

  useEffect(() => {
    const coursesList = getCoursesListFromLocalStorage();
    setCoursesList(coursesList);
  }, []);

  const course: TCourse | undefined = coursesList.find(
    (course) => course._id === courseId
  );

  const lectureVideos: string[] = course?.courseIndex
    ? course.courseIndex[sectionNo]?.videoLinks
    : [];
  const selectedLecture =
    course && lectureVideos ? lectureVideos[lectureNo] : course?.courseLink;

  if (!selectedLecture) {
    return <Text>No video available.</Text>;
  }
  return <VideoPlayerComponent url={selectedLecture} />;
};

export default React.memo(VideoPlayer);
