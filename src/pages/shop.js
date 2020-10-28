import React from "react";
import { graphql } from "gatsby";

export default function Shop({ data }) {
  const products = data.allMarkdownRemark.edges;
  return (
    <div className="product-list">
      {products.map(({ node }) => {
        return (
          <>
            <div className="relative pb-full">
              <p>Image here</p>
            </div>
            <div className="bg-white p-4">
              <div className="font-bold text-2xl">{node.frontmatter.name}</div>
              <div className="font-semibold text-l">
                &#8358;{node.frontmatter.price}
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
}

export const query = graphql`
  query productList {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            name
            price
            title
            id
          }
        }
      }
    }
  }
`;
