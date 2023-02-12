import { Button, Flex, Grid, GridItem, Heading, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import Insta from '../../assets/insta.png'
import Twit from '../../assets/twit.png'
import Slack from '../../assets/slack.png'
import './HomePage.css'
import heroImage from '../../assets/heroImage.png'
import cloudL from '../../assets/cloud_left.png'
import cloudR from '../../assets/cloud_right.png'
import backDrop from '../../assets/heroImageBackgroundDrop.png'

const HomePage = () => {
  return (
    <Grid templateColumns='60% 40%'>
      <GridItem pos='relative' mt='2rem'>

      <VStack border='0px'className="heroImage" borderRadius='8rem 8rem 0rem 0rem' pt='7rem' w='100%'>
    <Image pos='absolute' top='70px' left='170px'
    w='180px'
  src={cloudL}
  alt='cloud 1'
/>
    <Image pos='absolute' top='50px' right='-50px'
    w='250px'
  src={cloudR}
  alt='cloud 2'
/>
      <Image
    boxSize='350px'
    objectFit='cover'
    src={heroImage}
    alt='Hero Image'
    mt='auto'
  />
    <Image pos='absolute' bottom='0px' left='50px'
    w='500px'
  src={backDrop}
  alt='cloud 2'
/>
      </VStack>
      </GridItem>
      <GridItem>

      <VStack m='auto' marginTop={'3rem'} w='60%' lineHeight='2rem' gap='0.5rem'>
        <Heading as="h2" size="2xl">Chat With Ease❤️</Heading>
        <Text color='var(--color-light-black)'>Experience fun, efficient assistance with our playful AI-powered chatbot</Text>
        <Button  size='lg'
        _hover={{ backgroundColor: '#e29a43',color:'#f5f1ee' }}
          variant="solid"
          backgroundColor="var(--color-light-brown)"
          color='white' borderRadius='50px' border='5px solid #FFDDAD' w='100%'
        >
          Let's chat
        </Button>
        <Link to='/' className='wantToKnowLink'>Want to know how it works?</Link>
        <Text as='b'>Connect with us</Text>
        <Flex gap='1rem'>
        <Image boxSize="60px" objectFit="contain" src={Insta} alt="insta" />
        <Image boxSize="60px" objectFit="contain" src={Twit} alt="twit" />
        <Image boxSize="60px" objectFit="contain" src={Slack} alt="slack" />
        </Flex>
      </VStack>
      </GridItem>
    </Grid>
  );
};

export default HomePage;
