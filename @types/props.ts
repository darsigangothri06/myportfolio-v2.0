/**
 * @description This file contains all the props that are used in the project
 */

import { HtmlHTMLAttributes } from "react";

export interface ButtonProps extends HtmlHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "tertiary";
  size?: "small" | "medium" | "large";
}

export interface sectionSeperatorProps {
  title: string;
  id: string;
}

export interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  project_type: "web apps" | "web pages" | "games" | "command line";
  project_live_url?: string;
  project_github_url?: string;
  is_private?: boolean;
}

export interface StatsCardProps {
  count: string;
  description: string;
}

export interface TabsProps {
  tabs: string[];
  data: ProjectCardProps[];
}
