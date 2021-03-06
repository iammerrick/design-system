import Highlight from 'react-highlight'
import React from 'react'
import { string } from 'prop-types'
import styleable from 'react-styleable'

import css from './index.module.css'

/* TODO: rename CodeBlock, do inline as Code*/
const Code = props =>
  <Highlight className={'javascript ' + props.css.root}>
    {props.children}
  </Highlight>

Code.propTypes = {
  lang: string
}

Code.defaultProps = {
  lang: 'javascript'
}

export default styleable(css)(Code)
