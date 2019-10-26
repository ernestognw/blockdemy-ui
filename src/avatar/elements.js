import styled from "styled-components";
import { space } from "styled-system";

const ProfilePictureContainer = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
  background: ${({ theme }) => theme.colors.light};
  flex-shrink: 0;

  ${space}

  ${({ size }) =>
    size &&
    `
    width: ${size}px;
    height: ${size}px;
  `};

  &:nth-child(1) {
    margin-left: 0px;
  }
`;

const ProfilePictureImage = styled.img`
  height: 100%;
`;

export { ProfilePictureContainer, ProfilePictureImage };
