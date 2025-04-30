import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../App.css";

const Watchlist = () => {
  const [watchlist, setWatchlist] = useState([]);

  useEffect(() => {
    const storedWatchlist = JSON.parse(localStorage.getItem("watchlist")) || [];
    setWatchlist(storedWatchlist);
  }, []);

  const removeFromWatchlist = (id) => {
    const updatedWatchlist = watchlist.filter((item) => item.id !== id);
    setWatchlist(updatedWatchlist);
    localStorage.setItem("watchlist", JSON.stringify(updatedWatchlist));
  };

  return (
    <Container className="watchlist-container">
      <h2 className="text-center mb-4" >My Watchlist</h2>

      {watchlist.length === 0 ? (
        <div className="empty-watchlist">
          <p>Your watchlist is empty.</p>
          <Link to="/browse" className="browse-btn">
            Browse Anime
          </Link>
        </div>
      ) : (
        <Row>
          {watchlist.map((anime) => (
            <Col key={anime.id} xs={12} sm={6} md={4} lg={3}>
              <Card className="watchlist-card">
                <Card.Img variant="top" src={anime.image} alt={anime.title} />
                <Card.Body>
                  <Card.Title>{anime.title}</Card.Title>
                  <Button
                    variant="danger"
                    onClick={() => removeFromWatchlist(anime.id)}
                  >
                    Remove
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
};

export default Watchlist;
