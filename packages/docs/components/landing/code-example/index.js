import React from 'react';
import { Box } from 'blockdemy-ui';
import BlockdemyScope from '@config/blockdemy-scope';
import * as ReactMdIcons from 'react-icons/md';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import theme from 'prism-react-renderer/themes/github';
import { ExampleContainer } from './elements';

const sampleCode = `
// Sample component from Blockdemy Education

<Card height="fit-content">
  <Pill top={15} left={15} position="absolute" variant="soft">
    Online
  </Pill>
  <Box as="img" width="100%" borderRadius={5} src="https://go.aws/3fyIvCU" />
  <CardBody>
    <Tooltip tag="Joh Doe">
      <Avatar 
      position="absolute"
      right={20}
      size={38}
      mt={-50}
      size={60}
      src="https://i.pravatar.cc/100"
      />
    </Tooltip >
    <Typography variant="leadText">
      Blockchain fundamentals
    </Typography>
    <Typography mb={20} fontSize="0.7rem" color="lightGrey">
      Basic blockchain knowledge oriented course
    </Typography>
    <Divider my={10} />
    <Box display="flex" alignItems="center">
    <CircularProgress color="success" value={33} mr={15} >
      <CircularProgressLabel>
        33%
      </CircularProgressLabel>
    </CircularProgress>
    <Box display="flex" flexDirection="column"> 
        <Typography fontSize="0.6rem" color="lightGrey">
          What's next?
        </Typography>
        <Typography variant="heading">
          Overall progress
        </Typography>
      </Box>
    </Box>
    <Divider my={10} />
    <Typography textAlign="right" mr={10} variant="muted">
      Continue with
    </Typography>
    <Button ml="auto" color="primary" size="small">
      Consensus Protocol <Box as={MdKeyboardArrowRight} fontSize={20}/>
    </Button>
  </CardBody>
</Card>
`;

const CodeExample = () => {
  return (
    <Box mt={60} width="100%">
      <LiveProvider
        theme={theme}
        language="jsx"
        scope={{ ...BlockdemyScope, ...ReactMdIcons }}
        disabled
        code={sampleCode.trim()}
      >
        <ExampleContainer>
          <LiveEditor
            padding={20}
            style={{
              fontFamily: 'Menlo,monospace',
              borderRadius: 10,
              flex: 2,
              fontSize: 13
            }}
          />
          <Box p={20} display="flex" flex="1" as={LivePreview} />
        </ExampleContainer>
        <Box
          as={LiveError}
          mt={4}
          borderWidth={1}
          borderStyle="solid"
          borderRadius={5}
          borderColor="secondary"
          fontFamily="Menlo, monospace"
          color="secondary"
          p="1em"
        />
      </LiveProvider>
    </Box>
  );
};

export default CodeExample;
