import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const SkeletonLoad = () => {

    return (
        <>
            <div className="container mt-5 mb-5">
                <Row xs={1} md={3} className="g-4">
                    <Col>
                        <Grid container wrap="nowrap" sx={{ ml: 22 }}>
                            <Box sx={{ width: 250, marginRight: 10, my: 5 }}>
                                <Skeleton variant="rectangular" width={300} height={390} />
                            </Box>
                            <Box sx={{ width: 250, marginRight: 10, my: 5 }}>
                                <Skeleton variant="rectangular" width={300} height={390} />
                            </Box>
                            <Box sx={{ width: 250, marginRight: 8, my: 5 }}>
                                <Skeleton variant="rectangular" width={300} height={390} />
                            </Box>
                        </Grid>
                        <Grid container wrap="nowrap" sx={{ ml: 22 }}>
                            <Box sx={{ width: 250, marginRight: 10, my: 5 }}>
                                <Skeleton variant="rectangular" width={300} height={390} />
                            </Box>
                            <Box sx={{ width: 250, marginRight: 10, my: 5 }}>
                                <Skeleton variant="rectangular" width={300} height={390} />
                            </Box>
                            <Box sx={{ width: 250, marginRight: 8, my: 5 }}>
                                <Skeleton variant="rectangular" width={300} height={390} />
                            </Box>
                        </Grid>
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default SkeletonLoad