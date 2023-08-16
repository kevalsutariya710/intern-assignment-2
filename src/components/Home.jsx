import { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Spinner from 'react-bootstrap/Spinner';
import Form from 'react-bootstrap/Form';

const Home = () => {


    const [getData, setGetData] = useState([])
    const [loading, setLoading] = useState(true)
    const [category, setCategory] = useState('all')

    let fetchData = async () => {
        let res = await (await fetch(`https://inshorts.me/news/${category}?offset=0&limit=100`)).json()
        setGetData(res.data.articles)
        setLoading(false)
    }

    useEffect(() => {
        fetchData()
    }, [category])

    let Category = () => {
        let cat = document.querySelector('#cat').value;
        setCategory(cat)
    }




    return (
        <>

            {
                (loading) ? (
                    <div className="text-center py-5">
                        <Spinner animation="grow" variant="info" style={{ width: '3rem', height: '3rem' }} />
                    </div>
                ) :

                    <div className="container mt-5 mb-5">
                        <div className=' container mb-5 p-2'>

                            <Form.Select aria-label="Default select example" id='cat'>
                                <option>Select Category</option>
                                <option value="All">All</option>
                                <option value="Top">Top</option>
                                <option value="Trending">Trending</option>
                                {/* <option value="Science">Science</option> */}
                                {/* <option value="Entertainment">Entertainment</option> */}
                                {/* <option value="Sports">Sports</option> */}
                            </Form.Select>
                            <button className='mt-2 btn btn-primary' onClick={Category}>shows</button>
                        </div>

                        <Row xs={1} md={3} className="g-4">

                            {
                                getData.map(res => {

                                    return (
                                        <Col key={res.hashId}>
                                            <Card border="secondary" className='p-2 card h-100'>
                                                <Card.Img variant="top" src={res.imageUrl} height={300} width={100} />
                                                <Card.Body>
                                                    <Card.Title>{res.title}</Card.Title>
                                                    <Card.Text>
                                                        {res.content}
                                                    </Card.Text>
                                                    <Card.Link href={res.sourceUrl} target='_blank'>Read more</Card.Link>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                    )
                                })
                            }

                        </Row>
                    </div>

            }

        </>
    )
}

export default Home