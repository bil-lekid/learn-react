import React, { useEffect, useState } from "react";
import appwriteService from "../appwrite/config";
import Container from "../components/container/Container";
import PostCard from "../components/PostCard";

const Home = () => {
  const [post, setPost] = useState([]);

  useEffect(() => {
    appwriteService.getPosts([]).then((posts) => {
      if (posts) {
        setPost(posts.documents);
      }
    });
  }, []);
  if (post.length === 0) {
    return (
      <div className="w-full py-8">
        <Container className="flex flex-wrap">
          {post.map((post) => (
            <div className="p-2 w-1/4" key={post.$id}>
              <h1>Login to Read Post</h1>
            </div>
          ))}
        </Container>
      </div>
    );
  }
  return (
    <div className="w-full py-8">
      <Container className="flex flex-wrap">
        {post.map((post) => (
          <div className="p-2 w-1/4" key={post.$id}>
            <PostCard {...post} />
          </div>
        ))}
      </Container>
    </div>
  );
};

export default Home;
