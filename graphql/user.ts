import { graphql } from "graphql";
export const  verifyGoogleTokenQuery=graphql(`
#graphql
  query erifyGoogleToken($token: String!) {
    verifyGoogleToken(token: $token)   
}
`)