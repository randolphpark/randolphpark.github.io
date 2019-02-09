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
    </ul>
  </div>
));
