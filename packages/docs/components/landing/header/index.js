import React from 'react';
import Link from '@templates/link';
import { FaGithub } from 'react-icons/fa';
import { Box, Typography, Button } from 'blockdemy-ui';

const Header = () => {
  return (
    <Box minHeight={400} mb={50} display="flex" alignItems="center" justifyContent="center">
      <Box maxWidth={600} display="flex" mx="auto" flexDirection="column">
        <Typography lineHeight="3rem" textAlign="center" variant="h1">
          Build amazing React apps
          <br />
          <Typography as="span" variant="d1" fontWeight={300} color="primary">
            as fast as possible
          </Typography>
        </Typography>
        <Typography mt={40} textAlign="center" color="lightGrey" fontWeight={400} as="h2">
          Blockdemy UI is a modular, highly customizable and stylable React UI Components library
          built with Styled Components and designed to speedup development velocity by reducing the
          number of decisions needed when iterating on UI
        </Typography>
        <Box mt={30} justifyContent="center" display="flex">
          <Link href="/getting-started">
            <Button color="primary" mr={10}>
              Get started
            </Button>
          </Link>
          <Button
            as="a"
            href="https://github.com/ernestognw/blockdemy-ui"
            target="_blank"
            rel="noopener noreferrer"
            variant="outlined"
            ml={10}
          >
            <Box mr={10} as={FaGithub} />
            Github
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
