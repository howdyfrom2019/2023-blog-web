"use client";
import withGithubAuth from "@/features/auth/withGithubAuth";
import { NextPage } from "next";

const New: NextPage = (props) => {
  console.log(props);
  return (
    <div className={"flex items-center"}>{/* <BlogPostRichEditor /> */}</div>
  );
};

export default withGithubAuth(New);
