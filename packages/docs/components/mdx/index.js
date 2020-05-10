import React from 'react';
import Link from '@templates/link';
import { Box, Typography } from 'blockdemy-ui';
import CodeBlock from './code-block';

const MDXComponents = {
  h1: props => <Typography variant="h1" {...props} />,
  h2: props => <Typography variant="h2" {...props} />,
  h3: props => <Typography variant="h3" {...props} />,
  br: props => <Box height="24px" {...props} />,
  hr: props => <Box as="hr" borderTopWidth="1px" my={8} {...props} />,
  a: props => <Link {...props} />,
  code: CodeBlock,
  p: props => <Typography {...props} />,
  ul: props => <Box as="ul" pt="8px" pl="16px" {...props} />,
  ol: props => <Box as="ol" pt="8px" pl="16px" {...props} />,
  li: props => <Box as="li" pb="4px" {...props} />
};

export default MDXComponents;
