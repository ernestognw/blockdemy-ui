import { css } from 'styled-components';
import SFProTextLight from '../fonts/SF-Pro-Text-Light.otf';
import SFProTextLightItalic from '../fonts/SF-Pro-Text-LightItalic.otf';
import SFProTextRegular from '../fonts/SF-Pro-Text-Regular.otf';
import SFProTextRegularItalic from '../fonts/SF-Pro-Text-RegularItalic.otf';
import SFProTextMedium from '../fonts/SF-Pro-Text-Medium.otf';
import SFProTextMediumItalic from '../fonts/SF-Pro-Text-MediumItalic.otf';
import SFProTextSemibold from '../fonts/SF-Pro-Text-Semibold.otf';
import SFProTextSemiboldItalic from '../fonts/SF-Pro-Text-SemiboldItalic.otf';
import SFProTextBold from '../fonts/SF-Pro-Text-Bold.otf';
import SFProTextBoldItalic from '../fonts/SF-Pro-Text-BoldItalic.otf';
import SFProTextHeavy from '../fonts/SF-Pro-Text-Heavy.otf';
import SFProTextHeavyItalic from '../fonts/SF-Pro-Text-HeavyItalic.otf';

const fontFaces = css`
  @font-face {
    font-family: 'SF Pro Text';
    font-style: normal;
    font-weight: 300;
    src: url(${SFProTextLight});
  }

  @font-face {
    font-family: 'SF Pro Text';
    font-style: italic;
    font-weight: 300;
    src: url(${SFProTextLightItalic});
  }

  @font-face {
    font-family: 'SF Pro Text';
    font-style: normal;
    font-weight: 400;
    src: url(${SFProTextRegular});
  }

  @font-face {
    font-family: 'SF Pro Text';
    font-style: italic;
    font-weight: 400;
    src: url(${SFProTextRegularItalic});
  }

  @font-face {
    font-family: 'SF Pro Text';
    font-style: normal;
    font-weight: 500;
    src: url(${SFProTextMedium});
  }

  @font-face {
    font-family: 'SF Pro Text';
    font-style: italic;
    font-weight: 500;
    src: url(${SFProTextMediumItalic});
  }

  @font-face {
    font-family: 'SF Pro Text';
    font-style: normal;
    font-weight: 500;
    src: url(${SFProTextSemibold});
  }

  @font-face {
    font-family: 'SF Pro Text';
    font-style: italic;
    font-weight: 500;
    src: url(${SFProTextSemiboldItalic});
  }

  @font-face {
    font-family: 'SF Pro Text';
    font-style: normal;
    font-weight: 700;
    src: url(${SFProTextBold});
  }

  @font-face {
    font-family: 'SF Pro Text';
    font-style: italic;
    font-weight: 700;
    src: url(${SFProTextBoldItalic});
  }

  @font-face {
    font-family: 'SF Pro Text';
    font-style: normal;
    font-weight: 900;
    src: url(${SFProTextHeavy});
  }

  @font-face {
    font-family: 'SF Pro Text';
    font-style: italic;
    font-weight: 900;
    src: url(${SFProTextHeavyItalic});
  }
`;

export default fontFaces;
