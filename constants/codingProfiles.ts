import { CodingProfileType } from "@/@types";

const GITHUB_URL = "https://github.com/darsigangothri06";

export const CODING_PROFILES: CodingProfileType[] = [
  {
    id: "1",
    title: "LeetCode",
    description:
      "Solved 800+ problems covering arrays, trees, graphs, dynamic programming, and system design patterns. Strong proficiency in Data Structures and Algorithms.",
    link: "https://leetcode.com/gangothrid528/",
    icon: "leetcode.png",
    logo: "leetcode_logo.png",
    languages_used: ["Python", "C", "JavaScript", "SQL"],
    rating: 1503,
    problem_solved: 800,
  },
  {
    id: "2",
    title: "HackerRank",
    description:
      "5 star coder in Python. Earned multiple competitive programming certificates in problem solving and Python.",
    link: "https://www.hackerrank.com/cse_20JR1A4306",
    icon: "hr.png",
    logo: "hr_logo.png",
    languages_used: ["Python", "C", "JavaScript"],
    stars: 12,
    problem_solved: 50,
  },
  {
    id: "3",
    title: "GitHub",
    description:
      "Active contributor building AI/ML projects — DebugLens, DocMind, ResearchCrew. Also maintaining production Flutter & Django codebases at Bryt.",
    link: GITHUB_URL,
    icon: "github.png",
    logo: "github_logo.png",
    languages_used: [
      "Python",
      "Dart",
      "Flutter",
      "Django",
      "LangChain",
      "FastAPI",
      "JavaScript",
    ],
    contributions: 1500,
    stars: 5,
  },
];
