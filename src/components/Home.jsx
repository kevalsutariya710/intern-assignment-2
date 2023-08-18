import { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import SkeletonLoad from './SkeletonLoad'

const Home = () => {


    const [getData, setGetData] = useState([])
    const [loading, setLoading] = useState(true)
    const [category, setCategory] = useState('all')

    let fetchData = async () => {
        let res = await (await fetch(`https://inshorts.me/news/${category}?offset=0&limit=100`)).json();
        setGetData(res.data.articles);
        setLoading(false);
    }

    useEffect(() => {
        setLoading(true)
        fetchData();
    }, [category])

    let Category = () => {
        let cat = document.querySelector('#cat').value;
        setCategory(cat)
    }




    return (
        <>
            <div className="container mt-5 mb-5 shadow-lg p-3 mb-5 bg-white rounded border">

                <div className=' container mb-5 col-md-3'>

                    <Form.Select aria-label="Default select example" id='cat'>
                        {/* <option>Select Category</option> */}
                        <option value="All">All</option>
                        <option value="Top">Top</option>
                        <option value="Trending">Trending</option>
                        {/* <option value="Science">Science</option> */}
                        {/* <option value="Entertainment">Entertainment</option> */}
                        {/* <option value="Sports">Sports</option> */}
                    </Form.Select>
                    <button className='mt-2 btn btn-primary' onClick={Category}>shows</button>
                </div>

                {
                    (loading) ? (
                        <SkeletonLoad />
                    ) :
                        (<div className="container mt-5 mb-5 ">
                            <Row xs={1} md={3} className="g-4">
                                {
                                    getData.map(res => {

                                        return (
                                            <Col key={res.hashId}>
                                                <Card border="secondary" className=' card h-100 shadow p-3 mb-5 bg-white rounded'>
                                                    <Card.Img variant="top" src={res.imageUrl} height={270} width={100} />
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
                        </div>)
                }
            </div>
        </>
    )
}

export default Home