// TODO: use our ps-link component!! agh, I thought we did this.
import { Link as RouterLink } from 'react-router-dom'
import React from 'react'
import styleable from 'react-styleable'

import { Code, Example, Heading, Link, P } from '../../common/components'
import css from './index.module.css'

import Button from '@pluralsight/ps-design-system-button/react'
import Icon from '@pluralsight/ps-design-system-icon/react'

export default styleable(css)(props => {
  return (
    <div className={props.css.root}>
      <Heading size="xx-large">
        <h1>Buttons</h1>
      </Heading>

      <P>Install the component dependency:</P>
      <Code language="bash">
        npm install @pluralsight/ps-design-system-button --save-dev
      </Code>

      <P>Include a React component in your project:</P>
      <Code language="javascript">
        import Button from '@pluralsight/ps-design-system-button/react'
      </Code>

      <Heading size="large">
        <h2>Button appearance</h2>
      </Heading>
      <P>Define a button appearance by ... </P>
      <Example.React
        codes={[
          `<Button>Click me</Button>`,
          `<Button appearance="stroke">Click me</Button>`,
          `<Button appearance="flat">Click me</Button>`
        ]}
      />

      <Heading size="large">
        <h2>Button sizes</h2>
      </Heading>
      <Example.React
        codes={[
          `<Button size="large">Large</Button>`,
          `<Button size="medium">Medium</Button>`,
          `<Button size="small">Small</Button>`,
          `<Button size="tiny">Tiny</Button>`
        ]}
      />

      <Heading size="large">
        <h2>Button with icon</h2>
      </Heading>
      <Example.React
        codes={[
          `<Button icon={<Icon id="logo" />}>With Icon</Button>`,
          `<Button icon={<Icon id="channel" appearance="flat" />}>With Icon</Button>`,
          `<Button icon={<Icon id="play" iconAlign="right" appearance="flat" />}>Aligned to Right</Button>`
        ]}
      />

      <Heading size="large">
        <h2>Button with lone icon</h2>
      </Heading>
      <Example.React
        codes={[
          `<Button icon={<Icon id="logo" />} />`,
          `
<Button
  icon={<Icon id="logo"
  css={{ 'ps-design-system-icon__fg--fill': ${props.css.flatIcon} }} />}
  appearance="flat"
/>`
        ]}
      />

      <Heading size="large">
        <h2>Disabled button</h2>
      </Heading>
      <Example.React
        codes={[
          `<Button disabled={true}>Disabled</Button>`,
          `<Button disabled={true} appearance="flat">Disabled</Button>`,
          `<Button disabled={true} icon={<Icon id="logo" />}>Disabled</Button>`
        ]}
      />
    </div>
  )
})
