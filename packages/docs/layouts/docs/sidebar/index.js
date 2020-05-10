import React from 'react';
import { useRouter } from 'next/router';
import Link from '@templates/link';
import { Typography } from 'blockdemy-ui';
import { SidebarContainer, Route, RouteTitle, RoutesContainer } from './elements';

const Sidebar = () => {
  const { asPath } = useRouter();

  return (
    <>
      <SidebarContainer>
        <RoutesContainer className="routes">
          <Link href="/getting-started">
            <RouteTitle>
              <Typography fontWeight={500} fontSize="0.9rem" uppercase>
                Basics
              </Typography>
            </RouteTitle>
            <Route active={asPath.includes('getting-started')}>
              <Typography fontSize="0.8rem">Getting started</Typography>
            </Route>
          </Link>
          <Link href="/principles">
            <Route active={asPath.includes('principles')}>
              <Typography fontSize="0.8rem">Principles</Typography>
            </Route>
          </Link>
        </RoutesContainer>
      </SidebarContainer>
    </>
  );
};

export default Sidebar;
