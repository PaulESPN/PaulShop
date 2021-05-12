import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'

import Product from '../components/Product'
import Loader from '../components/Loader'
import Message from '../components/Message'
import { listProducts } from '../actions/productActions'


function HomeScreen() {
    const dispatch = useDispatch()
    const productList = useSelector(state => state.productList)
    const {error, loading, products} = productList

    useEffect(()=> {
      dispatch(listProducts())
    }, [dispatch])

    return (
        <div>
          <h1>Latest Product</h1>
          {loading ? <Loader />
            : error ? <Message variant='danger'>{error}</Message>
              :
              <Row>
                {products.map(product =>(
                  <Col sm={12} md={6} lg={4} xL={3}>
                    <Product product={product}/>
                  </Col>
                ))}
              </Row>
          }
        </div>
    )
}

export default HomeScreen
