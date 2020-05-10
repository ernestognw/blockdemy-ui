import React from 'react';
import { Box, Typography } from 'blockdemy-ui';
import { FaMediumM, FaTwitter, FaFacebookF, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { MdFavorite } from 'react-icons/md';
import { FooterContainer } from './elements';

const LayoutFooter = props => {
  return (
    <>
      <FooterContainer {...props}>
        <Typography textAlign="center" fontWeight={300} fontSize="0.8rem" color="lightGrey">
          Made with <Box as={MdFavorite} fontSize="0.7em" color="primary" /> by Blockdemy&rsquo;s
          Dev Team
        </Typography>
        <Box display="flex" justifyContent="center" mt={20} mb={50}>
          <a href="https://twitter.com/blockdemy" target="_blank" rel="noopener noreferrer">
            <Box className="social-media" as={FaTwitter} mx={10} color="default" />
          </a>
          <a href="https://facebook.com/blockdemy" target="_blank" rel="noopener noreferrer">
            <Box className="social-media" as={FaFacebookF} mx={10} color="default" />
          </a>
          <a
            href="https://medium.com/blockchain-academy-mexico"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Box className="social-media" as={FaMediumM} mx={10} color="default" />
          </a>
          <a
            href="https://linkedin.com/company/blockdemy"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Box className="social-media" as={FaLinkedinIn} mx={10} color="default" />
          </a>
          <a href="https://instagram.com/blockdemy" target="_blank" rel="noopener noreferrer">
            <Box className="social-media" as={FaInstagram} ml={10} color="default" />
          </a>
        </Box>
      </FooterContainer>
    </>
  );
};

export default LayoutFooter;
