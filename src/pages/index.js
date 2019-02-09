import React from "react";
import Octokit from "@octokit/rest";
import { Columns, Card, Content, Level } from "react-bulma-components";
import moment from "moment";
import GitStats from "../components/GitStats";

const BASE_URL = "https://www.randolphpark.me/";

class Index extends React.Component {
  constructor() {
    super();
    const octokit = new Octokit();
    this.state = {
      repos: []
    };

    octokit.repos
      .listForUser({
        username: "randolphpark"
      })
      .then(({ data, _status, _headers }) => {
        this.setState({ repos: data });
      });
  }

  render() {
    return (
      <div>
        <h1 style={{ textAlign: "center" }}>Randolph Park</h1>
        <Columns>
          {this.state.repos.map(item => (
            <Columns.Column size={"half"} key={`${item.name}-column`}>
              <Card>
                <Card.Header>
                  <Card.Header.Title>
                    {`${item.name} - ${moment(item.created_at).format(
                      "YYYY-MM-DD"
                    )}`}
                  </Card.Header.Title>
                </Card.Header>
                <Card.Content>
                  <Columns>
                    <Columns.Column
                      size={"one-third"}
                      key={item.name + "_description"}
                    >
                      <Content>{item.description}</Content>
                    </Columns.Column>
                    <Columns.Column key={item.name + "_state"}>
                      <Content>
                        <Level.Item>
                          <GitStats languages_url={item.languages_url} />
                        </Level.Item>
                      </Content>
                    </Columns.Column>
                  </Columns>
                </Card.Content>
                <Card.Footer>
                  <Card.Footer.Item renderAs="a" href={item.svn_url}>
                    Git Repo
                  </Card.Footer.Item>
                  <Card.Footer.Item renderAs="a" href={BASE_URL + item.name}>
                    README.md Site
                  </Card.Footer.Item>
                </Card.Footer>
              </Card>
            </Columns.Column>
          ))}
        </Columns>
      </div>
    );
  }
}

export default Index;
