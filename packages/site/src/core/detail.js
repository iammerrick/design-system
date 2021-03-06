import React from 'react'

import ColorDoc from './color'
import Chrome from '../layouts/chrome'
import SpacingDoc from './spacing'
import TypographyDoc from './typography'
import UsageDoc from './usage'

const docs = {
  color: <ColorDoc />,
  spacing: <SpacingDoc />,
  typography: <TypographyDoc />,
  usage: <UsageDoc />
}

export default props =>
  <Chrome title={props.match.params.coreId}>
    {docs[props.match.params.coreId]}
  </Chrome>
