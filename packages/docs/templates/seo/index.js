import React from 'react';
import PropTypes from 'prop-types';
import { NextSeo } from 'next-seo';

const SEO = ({ description, title }) => {
  return <NextSeo title={title} description={description} titleTemplate="Blockdemy UI | %s" />;
};

SEO.defaultProps = {
  description: 'React Design System',
  title:
    'Modular, highly customizable and stylable React UI Components library built with Styled Components'
};

SEO.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string
};

export default SEO;
