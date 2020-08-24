import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "@fortawesome/fontawesome-svg-core/styles.css"

import SellingPoints from "../components/landingpage/components/selling_point"
import Cards from "../components/landingpage/components/cards"
import { CallToAction } from "../components/shared/cta"
import VideoWrapper from "../components/landingpage/components/video_wrapper"
import SubHeader from "../components/landingpage/components/subheader"

const { Card } = Cards
const { Price, Specifications } = Card

const IndexPage = () => (
  <Layout>
    <SEO title="Digital Trombone" />
    <SubHeader />
    <SellingPoints>
      <div
        id="features"
        style={{
          display: "grid",
          gridTemplateRows: "repeat(3, 1fr)",
          height: "30vh",
          margin: "0 auto 80px",
          width: "80vw",
          maxWidth: "600px",
        }}
      >
        <SellingPoints.SellingPoint title="Premium Materials" logo="fire">
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt. "
        </SellingPoints.SellingPoint>
        <SellingPoints.SellingPoint title="Fast Shipping" logo="truck">
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt. "
        </SellingPoints.SellingPoint>
        <SellingPoints.SellingPoint title="Quality Assurance" logo="battery">
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt. "
        </SellingPoints.SellingPoint>
      </div>
    </SellingPoints>

    <VideoWrapper />

    <br />
    <Cards>
      <div
        id="pricing"
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          flexWrap: "wrap",
        }}
      >
        <Card title="Bronze Trombone" id="bronze-trombone">
          <Price>600</Price>
          <Specifications
            specs={[
              "Lorem ipsum1",
              "Lorem Ipsum2",
              "Lorem Ipsum3",
              "Lorem Ipsum 4",
            ]}
          />
          <CallToAction>I want to try</CallToAction>
        </Card>

        <Card title="Silver Trombone" id="silver-trombone">
          <Price>900</Price>
          <Specifications
            specs={[
              "Lorem ipsum1",
              "Lorem Ipsum2",
              "Lorem Ipsum3",
              "Lorem Ipsum 4",
            ]}
          />
          <CallToAction>I'm fully convinced</CallToAction>
        </Card>

        <Card title="Gold Trombone" id="gold-trombone">
          <Price>1900</Price>
          <Specifications
            specs={[
              "Lorem ipsum1",
              "Lorem Ipsum2",
              "Lorem Ipsum3",
              "Lorem Ipsum 4",
            ]}
          />
          <CallToAction>I'm a pro</CallToAction>
        </Card>
      </div>
    </Cards>
  </Layout>
)

export default IndexPage
