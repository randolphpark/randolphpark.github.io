import React from 'react'
import { withSiteData } from 'react-static'
//

export default withSiteData(() => (
  <div>
    <h1 style={{ textAlign: 'center' }}>Randolph Park</h1>
    <h2>Who am I?</h2>
    <p>I am a passinate problem solver.</p>

    <h2>What I do at the moment?</h2>
    <p>I am building real-time application using Elixir, GraphQL and React.</p>

    <h2>Contact</h2>
    <ul>
      <li>Website: <a href="https://www.randolphpark.me/">www.randolphpark.me</a></li>
      <li>Github: <a href="https://github.com/randolphpark">github.com/randolphpark</a></li>
      <li>LinkedIn: <a href="https://www.linkedin.com/in/randolphpark">www.linkedin.com/in/randolphpark</a></li>
      <li>Twitter: <a href="https://twitter.com/randolph_park">@randolph_park</a></li>
    </ul>
  </div>
))
