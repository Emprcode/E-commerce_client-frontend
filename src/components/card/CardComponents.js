import React from 'react'
import { Card } from 'react-bootstrap'

export const CardComponents = ({ img, price, ...item}) => {
  return (
    <Card style={{ width: '18rem' }} className="cardcss border-0">
    <Card.Img variant="top"  src={img} height="340px" />
    <Card.Body>
      <Card.Title className='text-center fw-bold'>{item.title}</Card.Title>
      <Card.Text className='text-center'>
        {price}
      </Card.Text>
      {/* <Button variant="primary">Go somewhere</Button> */}
    </Card.Body>
  </Card>
  )
}
