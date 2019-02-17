import React from "react";
import { withRouteData } from "react-static";
import { Link } from "@reach/router";

export default withRouteData(({ posts }) => (
  <div>
    <ul>
      {posts.map(post => (
        <li key={post.data.slug}>
          <Link to={`/blog/post/${post.data.slug}`}>{post.data.title}</Link>
        </li>
      ))}
      <li>
        <a href="https://www.linkedin.com/pulse/treat-mental-obesity-just-like-physical-randolph-park/">
          Treat "Mental Obesity"​ just like physical obesity
        </a>
      </li>
    </ul>
  </div>
));
