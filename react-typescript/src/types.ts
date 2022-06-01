export interface CoursePartBase {
    name: string;
    exerciseCount: number;
    type: string;
}

// export interface CourseNormalPart extends CoursePartBase {
//     type: 'normal';
//     description: string;
// }
//
// export interface CourseProjectPart extends CoursePartBase {
//     type: 'groupProject';
//     groupProjectCount: number;
// }
//
// export interface CourseSubmissionPart extends CoursePartBase {
//     type: 'submission';
//     description: string;
//     exerciseSubmissionLink: string;
// }

interface CoursePartOne extends CoursePartBase {
  name: "Fundamentals";
  description: string;
}

interface CoursePartTwo extends CoursePartBase {
  name: "Using props to pass data";
  groupProjectCount: number;
}

interface CoursePartThree extends CoursePartBase {
  name: "Deeper type usage";
  description: string;
  exerciseSubmissionLink: string;
}

// export type CoursePart = CourseNormalPart | CourseProjectPart | CourseSubmissionPart;
export type CoursePart = CoursePartOne | CoursePartTwo | CoursePartThree;