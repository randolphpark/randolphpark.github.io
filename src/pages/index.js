import React from 'react'
import { withSiteData } from 'react-static'
import Octokit from '@octokit/rest'

class Index extends React.Component {
  constructor() {
    super();
    const octokit = new Octokit();
    this.state = { repos: [] };

    octokit.repos.listForUser({
      username: 'randolphpark'
    }).then(({ data, _status, _headers }) => {
      this.setState({ repos: data });
    });
  }

  render() {
    return (
      <div>
        <h1 style={{ textAlign: 'center' }}>Randolph Park</h1>
        {this.state.repos.map(item => (
          <p>{item.name}: {item.git_url}: {item.description}: {item.created_at}</p>
        ))}

      </div>
    )
  }
}

export default Index;