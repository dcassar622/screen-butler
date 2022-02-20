import { Row, Col, Card, CardTitle, Icon } from 'react-materialize';

const Result = ({result, metaResult, addToPage}) => {

  return (
    <>
        <Row>
          <Col
            l={3}
            m={6}
            s={12}
          >
          <Card
            closeIcon={<Icon>close</Icon>}
            header={<CardTitle image={result.image_thumbnail_path} alt='show-poster' reveal waves="light"/>}
            /*reveal={metaResult.tvShow.description}*/
            revealIcon={<Icon className='result-info-icon'>info_outline</Icon>}
            title={result.name}
          >
            <p> {result.start_date.substring(0,4)} </p>
            <p> {result.network} </p>
            <div className='result-button-wrapper'>
              <button onClick={() => addToPage(result, 'current')}>Add to Currently Watching</button>
              <button onClick={() => addToPage(result, 'wishlist')}>Add to Wishlist</button>
            </div>
           </Card>
         </Col>
        </Row>
    </>
  )
};

export default Result;
