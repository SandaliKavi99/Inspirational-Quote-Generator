/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const generateQuote = /* GraphQL */ `query GenerateQuote($input: AWSJSON!) {
  generateQuote(input: $input)
}
` as GeneratedQuery<
  APITypes.GenerateQuoteQueryVariables,
  APITypes.GenerateQuoteQuery
>;
export const getQuoteAppData = /* GraphQL */ `query GetQuoteAppData($id: ID!) {
  getQuoteAppData(id: $id) {
    id
    queryName
    quotesGenerated
    createAt
    updateAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetQuoteAppDataQueryVariables,
  APITypes.GetQuoteAppDataQuery
>;
export const listQuoteAppData = /* GraphQL */ `query ListQuoteAppData(
  $filter: ModelQuoteAppDataFilterInput
  $limit: Int
  $nextToken: String
) {
  listQuoteAppData(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      queryName
      quotesGenerated
      createAt
      updateAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListQuoteAppDataQueryVariables,
  APITypes.ListQuoteAppDataQuery
>;
export const quotesQueryName = /* GraphQL */ `query QuotesQueryName(
  $queryName: String!
  $sortDirection: ModelSortDirection
  $filter: ModelQuoteAppDataFilterInput
  $limit: Int
  $nextToken: String
) {
  quotesQueryName(
    queryName: $queryName
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      queryName
      quotesGenerated
      createAt
      updateAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.QuotesQueryNameQueryVariables,
  APITypes.QuotesQueryNameQuery
>;
