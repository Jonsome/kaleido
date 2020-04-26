import styled from 'styled-components'
import css from '@styled-system/css'

export interface IElementProps {
  margin?: number
  marginX?: number
  marginY?: number
  marginBottom?: number
  marginTop?: number
  marginLeft?: number
  marginRight?: number
  padding?: number
  paddingX?: number
  paddingY?: number
  paddingBottom?: number
  paddingTop?: number
  paddingLeft?: number
  paddingRight?: number
  css?: Object
}

const nullCheck = (value: any) => {
  return typeof value !== 'undefined' ? value : null
}

export const Element = styled.div<IElementProps>((props) =>
  css({
    boxSizing: 'border-box',
    margin: nullCheck(props.margin),
    marginX: nullCheck(props.marginX),
    marginY: nullCheck(props.marginY),
    marginBottom: nullCheck(props.marginBottom),
    marginTop: nullCheck(props.marginTop),
    marginLeft: nullCheck(props.marginLeft),
    marginRight: nullCheck(props.marginRight),
    padding: nullCheck(props.padding),
    paddingX: nullCheck(props.paddingX),
    paddingY: nullCheck(props.paddingY),
    paddingBottom: nullCheck(props.paddingBottom),
    paddingTop: nullCheck(props.paddingTop),
    paddingLeft: nullCheck(props.paddingLeft),
    paddingRight: nullCheck(props.paddingRight),
    ...(props.css || {}),
  })
)
