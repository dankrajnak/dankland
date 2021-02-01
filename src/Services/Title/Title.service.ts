import { gql } from "graphql-request";
import { graphQLClient } from "../../Utils/gqlClient";

export default class TitleService {
  static async getTitle(): Promise<string> {
    const { getTitle } = await graphQLClient.request(
      gql`
        query {
          getTitle
        }
      `
    );
    return getTitle;
  }
  static async setTitle(title: string): Promise<string> {
    const { addTitle } = await graphQLClient.request(
      gql`
        mutation setTitle($title: String!) {
          addTitle(title: $title) {
            title
          }
        }
      `,
      { title }
    );
    return addTitle.title;
  }
}
