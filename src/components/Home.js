import React from 'react'
import styled from "styled-components"
import Section from "./Section"

function Home() {
  return (
    <Container>
        <Section
            title="Model S"
            description="Order Online for Toughness Delivery"
            backgroundImg = "model-s.jpg"
            leftBtnText = "Custom Order"
            rightBtnText = "Existing inventory" 
            isArrowDown = {true}      
        ></Section>
        <Section
            title="Model Y"
            description="Order Online for Toughness Delivery"
            backgroundImg = "model-y.jpg"
            leftBtnText = "Custom Order"
            rightBtnText = "Existing inventory" 
            isArrowDown = {true}      
        ></Section>
        <Section
            title="Model 3"
            description="Order Online for Toughness Delivery"
            backgroundImg = "model-3.jpg"
            leftBtnText = "Custom Order"
            rightBtnText = "Existing inventory" 
            isArrowDown = {true}      
        ></Section>
        <Section
            title="Model X"
            description="Order Online for Toughness Delivery"
            backgroundImg = "model-x.jpg"
            leftBtnText = "Custom Order"
            rightBtnText = "Existing inventory"
            isArrowDown = {true}      
        ></Section>
        <Section
            title="Lowest Cost Solar Panels in America"
            description="Money-back guarantee"
            backgroundImg = "solar-panel.jpg"
            leftBtnText = "Order now"
            isArrowDown = {true}      
            rightBtnText = "Learn more" 
        ></Section>
        <Section
            title="Solar for New Roofs"
            description="Solar Roof Costs less than a New roof Plus Solar panels"
            backgroundImg = "solar-roof.jpg"
            leftBtnText = "Order now"
            isArrowDown = {true}      
            rightBtnText = "Learn more" 
        ></Section>
        <Section
            title="Accessories"
            description=""
            backgroundImg = "accessories.jpg"
            leftBtnText = "Shop Now"
            isArrowDown = {false}      
            rightBtnText = "" 
        ></Section>
    </Container>
  )
}

export default Home

const Container = styled.div`
    height: 100vh;

`