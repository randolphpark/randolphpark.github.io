import React from 'react'
import { withRouteData } from 'react-static'
import { Link } from '@reach/router'
import Moment from 'react-moment'
import Markdown from 'react-markdown'

export default withRouteData(({ post }) => (
  <div className="blog-post">
    <Link to="/blog/">{'<'} Back</Link>
    <h1>{post.data.title}</h1>
    <Moment format="MMMM Do, YYYY">{post.data.date}</Moment>
    <img className="image" src={post.data.thumbnail} alt="" />
    <Markdown source={post.content} escapeHtml={false} />
  </div>
))
