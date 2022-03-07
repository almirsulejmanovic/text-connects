import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/app.css'
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function App() {
  const [data, setData] = useState([])

  useEffect(() => {
    getData()
  }, [])


  const getData = async () => {
    try {
      const response = await axios.get('https://gemlux.com/collections/rigging-kits/products.json');
      setData(response.data.products)
    }
    catch (error) {
      console.log(error)
    }
  }


  const displayData = () => {
    return (
      data.slice(0, 3).map(item =>
        <Col md={4} key={item.id} className='mb-5' >
          <div>
            <img src={item.images[0].src} alt='Rigging Kit' className='image'></img>
          </div>
          <div>
            <p className='title'>{item.title}</p>
          </div>
          <div>
            <a href='https://www.google.com' target='_blank' rel='noreferrer' className='link'>BUY NOW</a>
          </div>
        </Col>
      )
    )
  }

  return (
    <div className='app'>
      <Container fluid>
        <Row>
          <Col md={4} className='page-title'>
            <h2>Rigging Kits</h2>
          </Col>
        </Row>
        <Row>
          {displayData()}
        </Row>
      </Container>
    </div>
  )
}
