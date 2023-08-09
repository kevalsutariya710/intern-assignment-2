import { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Spinner from 'react-bootstrap/Spinner';

const Home = () => {


    const [getdata, setGetData] = useState([])
    const [loading, setLoading] = useState(true)

    let fetchData = async () => {
        let res = await (await fetch("https://inshorts.me/news/top?offset=0&limit=100")).json()
        setGetData(res.data.articles)
        setLoading(false)
    }

    useEffect(() => {
        fetchData()
    }, [])


    return (
        <>

            {
                (loading) ? (
                    <div className="text-center py-5">
                        <Spinner animation="grow" variant="info" style={{ width: '3rem', height: '3rem' }} />
                    </div>
                ) :
                    <div className="container mt-5 mb-5">

                        <Row xs={1} md={3} className="g-4">

                            {
                                getdata.map(res => {

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