import Icon, { ids } from '@pluralsight/ps-design-system-icon/react'
import React from 'react'
import styleable from 'react-styleable'

import { Code, Example, Heading, Link, P } from '../../common/components'
import css from './color.module.css'

export default styleable(css)(props => {
  return (
    <div>

      <Heading size="large">
        <h2>Color</h2>
      </Heading>
      <P>
        Icon color will usually match the surrounding text color. It can also be
        overridden to be any fill.
      </P>
      <Example.React
        codes={[
          `
<div style={{ color: '#ffffff' }}>
  <Icon id="logo" size="medium" />
</div>
`,
          `
<div style={{ color: '#ffc200' }}>
  <Icon id="logo" size="medium" />
</div>
`,
          `
<Icon
  css={{ 'ps-icon__fg--fill': '${props.css.overrideFill}' }}
  id="logo"
  size="medium"
/>
`
        ]}
      />
    </div>
  )
})
