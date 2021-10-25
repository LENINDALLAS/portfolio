import React, { useRef, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import { useSelector } from 'react-redux';

function Portfolio(props) {

    const titleRef = useRef();

    const focusPortfolio = useSelector(state => state.portfolio);

    useEffect(() => {
        titleRef.current.scrollIntoView({ behaviour: 'smooth' })
    }, [focusPortfolio]);

    // console.log(focusPortfolio);

    return (
        <div className="aboutContainer">
            <div className='flexedBox' ref={titleRef} >
                <div className="split1"></div>
                <div className="split2"></div>
                <div className="split3"></div>
            </div>
            <div className='modalContainer' >
                <h1 className='slideHeading' ><u>Portfolio</u></h1>
                <div className='flex__card__container'>
                    <Card className='flex__card'>
                        <Card.Img variant="top" src="https://bit.ly/3it3avf" style={{ 'width': '100%', 'height': '180px' }} />
                        <Card.Body >
                            <Card.Title>Amazon</Card.Title>
                            <Card.Text >
                                A E-commerce website built with all the functionality
                            </Card.Text>
                        </Card.Body>

                        <ListGroup className="list-group-flush">
                            <ListGroupItem>React js, Redux, CSS</ListGroupItem>
                            <ListGroupItem>Node js, Mongo Db</ListGroupItem>
                        </ListGroup>
                        <Card.Body>
                            <Card.Link href="https://github.com/LENINDALLAS/amazon-frontend" target="_blank">Github Link</Card.Link>
                            <Card.Link href="https://amazon-frontend-deploy.netlify.app/" target="_blank">Deployed Link</Card.Link>
                        </Card.Body>
                    </Card>
                    <Card className='flex__card'>
                        <Card.Img variant="top" src="https://bit.ly/3iptE0v" style={{ 'width': '100%', 'height': '180px' }} />
                        <Card.Body >
                            <Card.Title>Ivent ideas</Card.Title>
                            <Card.Text >
                                We connect investor with innovators to bring new product to the market
                            </Card.Text>
                        </Card.Body>

                        <ListGroup className="list-group-flush">
                            <ListGroupItem>React js, Redux, CSS, Styled components</ListGroupItem>
                            <ListGroupItem>Node js, Mongo Db</ListGroupItem>
                        </ListGroup>
                        <Card.Body>
                            <Card.Link href="https://github.com/LENINDALLAS/capstone" target="_blank">Github Link</Card.Link>
                            <Card.Link href="https://invent-ideas.netlify.app" target="_blank">Deployed Link</Card.Link>
                        </Card.Body>
                    </Card>
                    <Card className='flex__card'>
                        <Card.Img variant="top" src="https://bit.ly/2YcfjgO" style={{ 'width': '100%', 'height': '180px' }} />
                        <Card.Body >
                            <Card.Title>IMDB</Card.Title>
                            <Card.Text >
                                A website to view recent movie releases, rating of movies and series and watch trailer too.
                            </Card.Text>
                        </Card.Body>

                        <ListGroup className="list-group-flush">
                            <ListGroupItem>React js, Redux, Styled components</ListGroupItem>
                            <ListGroupItem>TMDB API's</ListGroupItem>
                        </ListGroup>
                        <Card.Body>
                            <Card.Link href="https://github.com/LENINDALLAS/imdb" target="_blank">Github Link</Card.Link>
                            <Card.Link href="https://imdb-frontend.netlify.app/" target="_blank">Deployed Link</Card.Link>
                        </Card.Body>
                    </Card>
                    <Card className='flex__card'>
                        <Card.Img variant="top" src="https://bit.ly/3B62Zgx" style={{ 'width': '100%', 'height': '180px' }} />
                        <Card.Body >
                            <Card.Title>Slack</Card.Title>
                            <Card.Text >
                                A chat application where you can do direct messages and group messages.
                            </Card.Text>
                        </Card.Body>

                        <ListGroup className="list-group-flush">
                            <ListGroupItem>React js, Redux, Styled components</ListGroupItem>
                            <ListGroupItem>Firestore, Firebase</ListGroupItem>
                        </ListGroup>
                        <Card.Body>
                            <Card.Link href="https://github.com/LENINDALLAS/slack" target="_blank">Github Link</Card.Link>
                            <Card.Link href="https://slack-clone-b9354.web.app" target="_blank">Deployed Link</Card.Link>
                        </Card.Body>
                    </Card>
                </div>

            </div>
        </div >
    );
}

export default Portfolio;