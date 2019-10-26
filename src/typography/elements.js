import styled from "styled-components";
import { space, color, typography } from "styled-system";
import { addSpacing, underline, uppercase, fontSize } from "./utils";

const H1 = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.heading1};
  font-family: ${({ theme, font }) => theme.font[font]};
  margin: 0;

  ${addSpacing};
  ${fontSize};
  ${space};
  ${color};
  ${typography};
  ${underline};
  ${uppercase};
`;

const H2 = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.heading2};
  font-family: ${({ theme, font }) => theme.font[font]};
  margin: 0;

  ${addSpacing};
  ${fontSize};
  ${space};
  ${color};
  ${typography};
  ${underline};
  ${uppercase};
`;

const H3 = styled.h3`
  font-size: ${({ theme }) => theme.fontSize.heading3};
  font-family: ${({ theme, font }) => theme.font[font]};
  margin: 0;

  ${addSpacing};
  ${fontSize};
  ${space};
  ${color};
  ${typography};
  ${underline};
  ${uppercase};
`;

const H4 = styled.h4`
  font-size: ${({ theme }) => theme.fontSize.heading4};
  font-family: ${({ theme, font }) => theme.font[font]};
  margin: 0;

  ${addSpacing};
  ${fontSize};
  ${space};
  ${color};
  ${typography};
  ${underline};
  ${uppercase};
`;

const H5 = styled.h5`
  font-size: ${({ theme }) => theme.fontSize.heading5};
  font-family: ${({ theme, font }) => theme.font[font]};
  margin: 0;

  ${addSpacing};
  ${fontSize};
  ${space};
  ${color};
  ${typography};
  ${underline};
  ${uppercase};
`;

const H6 = styled.h6`
  font-size: ${({ theme }) => theme.fontSize.heading6};
  font-family: ${({ theme, font }) => theme.font[font]};
  margin: 0;

  ${addSpacing};
  ${fontSize};
  ${space};
  ${color};
  ${typography};
  ${underline};
  ${uppercase};
`;

const P = styled.p`
  font-family: ${({ theme, font }) => theme.font[font]};
  font-size: 1rem;
  margin: 0;

  ${addSpacing};
  ${fontSize};
  ${space};
  ${color};
  ${typography};
  ${underline};
  ${uppercase};

  ${({ variant, theme }) =>
    variant === "muted" &&
    `
    color: ${theme.colors.lightGrey};
  `};

  ${({ variant, theme }) =>
    variant &&
    `
    font-size: ${theme.fontSize[variant]};
  `};
`;

export { H1, H2, H3, H4, H5, H6, P };
