import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import SellingPoints from "../components/landingpage/components/selling_point"
import Cards from "../components/landingpage/components/cards"
import { CallToAction } from "../components/shared/cta"

const { Card } = Cards
const { Price, Specifications } = Card

const IndexPage = () => (
  <Layout>
    <SEO title="Digital Trombone" />
    <SellingPoints>
      <div
        style={{
          display: "grid",
          gridTemplateRows: "repeat(3, 1fr)",
          height: "30vh",
          margin: "0 auto 80px",
          width: "80vw",
          maxWidth: "600px",
        }}
      >
        <SellingPoints.SellingPoint title="Premium Materials" logo={"boh"}>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt. "
        </SellingPoints.SellingPoint>
        <SellingPoints.SellingPoint title="Fast Shipping" logo={"boh"}>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt. "
        </SellingPoints.SellingPoint>
        <SellingPoints.SellingPoint title="Quality Assurance" logo={"boh"}>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt. "
        </SellingPoints.SellingPoint>
      </div>
    </SellingPoints>

    <Cards>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          flexWrap: "wrap",
        }}
      >
        <Card>
          <Price>600</Price>
          <Specifications
            specs={[
              "Lorem ipsum1",
              "Lorem Ipsum2",
              "Lorem Ipsum3",
              "Lorem Ipsum 4",
            ]}
          />
          <CallToAction>what ?</CallToAction>
        </Card>

        <Card>
          <Price>600</Price>
          <Specifications
            specs={[
              "Lorem ipsum1",
              "Lorem Ipsum2",
              "Lorem Ipsum3",
              "Lorem Ipsum 4",
            ]}
          />
          <CallToAction>what ? </CallToAction>
        </Card>

        <Card>
          <Price>600</Price>
          <Specifications
            specs={[
              "Lorem ipsum1",
              "Lorem Ipsum2",
              "Lorem Ipsum3",
              "Lorem Ipsum 4",
            ]}
          />
          <CallToAction>what ? </CallToAction>
        </Card>
      </div>
    </Cards>
  </Layout>
)

export default IndexPage
