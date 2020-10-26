import React from 'react'
import PropTypes from 'prop-types'
import { Card, Button } from 'react-bootstrap'
import '../../src/assets/scss/style.scss'

// click test
function hadleTest() {
  alert('test')
}
export const CardStyle = ({
  title,
  dummyText,
  width,
  backgroundColor,
  size,
  label,
  ...props
}) => {
  return (
    <Card style={width && { width }} {...props}>
      <Card.Img variant="top" src="http://placeimg.com/640/480/any" />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{dummyText}</Card.Text>
        <Button
          type="button"
          className={['storybook-button', `storybook-button--${size}`].join(
            ' ',
          )}
          style={backgroundColor && { backgroundColor }}
          {...props}
          onClick={hadleTest}
        >
          {label}
        </Button>
      </Card.Body>
    </Card>
  )
}

export const CardStyleGroup = () => {
  return (
    <div className="d-flex">
      <CardStyle />
      <CardStyle />
      <CardStyle />
    </div>
  )
}

CardStyle.propTypes = {
  backgroundColor: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  width: PropTypes.oneOf(['12rem', '18rem', '24rem']),
  label: PropTypes.string.isRequired,
  title: PropTypes.string,
  dummyText: PropTypes.string,
  onClick: PropTypes.func,
}

CardStyle.defaultProps = {
  backgroundColor: null,
  width: '18rem',
  size: 'medium',
  title: 'タイトル',
  dummyText:
    'トロメライは教えるうように見えますず。すると座ってざとじぶんのから聞いてなってった方は途中だって十一そう叩くでしことを見あんな二枚気持ちんませ。',
  label: 'ボタン',
  onClick: undefined,
}
