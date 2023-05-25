import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, Col, Row } from 'antd';
import { Form, FormControl, InputGroup, Button } from 'react-bootstrap';
import Swal from 'sweetalert2';
import './style.css';

const CardList = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetchCards();
  }, []);

  const fetchCards = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/cards');
      setCards(response.data);
    } catch (error) {
      console.error('Error fetching cards:', error);
    }
  };

  const deleteCard = async (cardId) => {
    try {
      const result = await Swal.fire({
        title: 'Are you sure?',
        text: 'You are about to delete this card.',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        confirmButtonText: 'Yes, delete it!'
      });

      if (result.isConfirmed) {
        await axios.delete(`http://localhost:8080/api/cards/${cardId}`);
        fetchCards();
        Swal.fire('Deleted!', 'The card has been deleted.', 'success');
      }
    } catch (error) {
      console.error('Error deleting card:', error);
      Swal.fire('Error', 'An error occurred while deleting the card.', 'error');
    }
  };

  return (
    <section className="blog-area section-gap" id="blog">
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="menu-content pb-70 col-lg-8">
            <div className="title text-center">
              <h1 className="mt-5 mb-5">ABOUT OUR BIZPRO</h1>
              <p className="mb-5">                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="no-border-card">
            <div className="row">
              <div className="col-md-12 mb-4">
                <Form.Group>
                  <InputGroup>
                    <FormControl
                      type="text"
                      placeholder="Search..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </InputGroup>
                </Form.Group>
              </div>
            </div>
            <Row gutter={[20, 16]}>
              {cards
                .filter((card) =>
                  card.title.toLowerCase().includes(searchQuery.toLowerCase())
                )
                .map((card) => (
                  <Col key={card._id} span={6}>
                    <div className='salam'>
                      <i className={card.icon}></i>
                    </div>
                    <Card className='no-border-card' title={card.title} style={{ width: 280 }}>
                      <p>{card.description}</p>
                      <Button variant="danger" onClick={() => deleteCard(card._id)}>
                        Delete
                      </Button>
                    </Card>
                  </Col>
                ))}
            </Row>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardList;

