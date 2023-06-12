import Link from "next/link";
import Image from "next/image";
import { Flex, Box, Text, Button } from "@chakra-ui/react";

import Property from "../components/Property";
import { baseUrl, fetchApi } from "../utils/fetchApi";

export const Banner = ({
  purpose,
  title1,
  title2,
  desc1,
  desc2,
  buttonText,
  linkName,
  imageUrl,
}) => (
  <Flex flexWrap="wrap" justifyContent="center" alignItems="center" m="10">
    <Image src={imageUrl} width={500} height={300} alt="property image" />
    <Box p="5">
      <Text color="gray.500" fontSize="sm" fontWeight="medium">
        {purpose}
      </Text>
      <Text fontSize="3xl" fontWeight="bold">
        {title1}
        <br />
        {title2}
      </Text>
      <Text fontSize="lg" paddingTop="3" paddingBottom="3" color="gray.700">
        {desc1}
        <br />
        {desc2}
      </Text>
      <Button fontSize="xl" bg="red.400" color="white">
        <Link href={linkName}>{buttonText}</Link>
      </Button>
    </Box>
  </Flex>
);

const Home = ({ propertiesForSale, propertiesForRent }) => (
  <Box>
    <Banner
      purpose="Find a Home for Rent"
      title1="Discover Rental Homes"
      title2="Suitable for Everyone"
      desc1="Explore a Variety of Rental Properties, including Apartments, Builder Floors, Villas,"
      desc2="and More."
      buttonText="Explore the Rentals"
      linkName="/search?purpose=for-rent"
      imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4"
    />
    <Flex flexWrap="wrap">
      {propertiesForRent.map((property) => (
        <Property property={property} key={property.id} />
      ))}
    </Flex>
    <Banner
      purpose="FIND YOUR DREAM HOME"
      title1="Discover, Purchase & Make it Yours"
      title2="Dream Home"
      desc1="Browse through a wide selection of Apartments, land, builder floors,"
      desc2="villas, and more"
      buttonText="Explore Buying Options"
      linkName="/search?purpose=for-sale"
      imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/110993385/6a070e8e1bae4f7d8c1429bc303d2008"
    />
    <Flex flexWrap="wrap">
      {propertiesForSale.map((property) => (
        <Property property={property} key={property.id} />
      ))}
    </Flex>
  </Box>
);

export async function getStaticProps() {
  const propertyForSale = await fetchApi(
    `${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`
  );
  const propertyForRent = await fetchApi(
    `${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`
  );

  return {
    props: {
      propertiesForSale: propertyForSale?.hits,
      propertiesForRent: propertyForRent?.hits,
    },
  };
}

export default Home;
