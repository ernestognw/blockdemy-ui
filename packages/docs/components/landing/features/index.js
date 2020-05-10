import React from 'react';
import { IoIosCode } from 'react-icons/io';
import { AiFillBuild } from 'react-icons/ai';
import { RiSpeedLine } from 'react-icons/ri';
import { Box, Typography } from 'blockdemy-ui';
import { FeaturesContainer } from './elements';

const Features = () => {
  return (
    <FeaturesContainer>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          height={100}
          width={100}
          bg="primary"
          borderRadius="50%"
        >
          <Box as={IoIosCode} height={40} width={40} color="lighter" />
        </Box>
        <Box height={100} display="flex" alignItems="center">
          <Typography mt={30} textAlign="center" variant="headingTitle">
            Built by developers
          </Typography>
        </Box>
        <Typography mt={20} textAlign="center" variant="muted">
          Blockdemy UI was designed entirely by a developer&rsquo;s team, with special focus on a
          great and easy coding experience
        </Typography>
      </Box>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          height={100}
          width={100}
          bg="primary"
          borderRadius="50%"
        >
          <Box as={AiFillBuild} height={40} width={40} color="lighter" />
        </Box>
        <Box height={100} display="flex" alignItems="center">
          <Typography mt={30} textAlign="center" variant="headingTitle">
            Incredibly extensible
          </Typography>
        </Box>
        <Typography mt={20} textAlign="center" variant="muted">
          Components were built thinking on easy style overriding and extension using styled
          components, making it highly customizable
        </Typography>
      </Box>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          height={100}
          width={100}
          bg="primary"
          borderRadius="50%"
        >
          <Box as={RiSpeedLine} height={40} width={40} color="lighter" />
        </Box>
        <Box height={100} display="flex" alignItems="center">
          <Typography mt={30} textAlign="center" variant="headingTitle">
            Designed for speed
          </Typography>
        </Box>
        <Typography mt={20} textAlign="center" variant="muted">
          Perfect for startup teams or prototyping. Blockdemy&rsquo;s team leverage on it&rsquo;s
          consistency and usability to create faster product iterations
        </Typography>
      </Box>
    </FeaturesContainer>
  );
};

export default Features;
