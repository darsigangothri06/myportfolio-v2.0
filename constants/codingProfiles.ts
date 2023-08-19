import { CodingProfileType } from "@/@types";
import { GITHUB_URL } from ".";

export const CODING_PROFILES: CodingProfileType[] = [
  // {
  //   id: "1",
  //   title: "CodeChef",
  //   description:
  //     "I did competitive programming on codechef platform for 1+ yrs. and I’m 3 star coder on codechef with highest rating of 1608.",
  //   link: "https://www.codechef.com/users/vidhanshu",
  //   icon: "codechef.png",
  //   logo: "codechef_logo.png",
  //   languages_used: ["C++", "Java", "Python"],
  //   rating: 1608,
  //   stars: 3,
  //   problem_solved: 242,
  // },
  {
    id: "1",
    title: "LeetCode",
    description:
      "Solving problems to improve my competitive programming skills. Learning algorithms to write efficient code, Skilled in Linked Lists, Trees, Back tracking etc.",
    link: "https://leetcode.com/gangothrid528/",
    icon: "leetcode.png",
    logo: "leetcode_logo.png",
    languages_used: ["Python", "C", "JavaScript", "MySQL"],
    rating: 1503,
    problem_solved: 750,
  },
  {
    id: "2",
    title: "HackerRank",
    description:
      "5 star coder in Python, Solved 50+ problems and also earned competitive programming certificates",
    link: "https://www.hackerrank.com/cse_20JR1A4306",
    icon: "hr.png",
    logo: "hr_logo.png",
    languages_used: ["Python", "C", "Java"],
    stars: 12,
    problem_solved: 50,
  },
  {
    id: "3",
    title: "GitHub",
    description:
      "Doing open source contribution since Nov’22, and contributed to various web based projects.",
    link: GITHUB_URL,
    icon: "github.png",
    logo: "github_logo.png",
    languages_used: [
      "Python",
      "Javascript",
      "React",
      "Node",
      "Express",
      "Django",
      "Html",
      "Css",
      "Java",
    ],
    contributions: 1500,
    stars: 2
  },
  // {
  //   id: "5",
  //   title: "HackerEarth",
  //   description:
  //     "I’m solving questions on HackerEarth from a year and solved 10+ questions.",
  //   icon: "he.png",
  //   logo: "he_logo.png",
  //   link: "https://www.hackerearth.com/@vidhanshu_",
  //   languages_used: ["C++", "Java", "Python"],
  //   problem_solved: 10,
  // },
];
