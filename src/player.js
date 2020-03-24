import React, { useState, useEffect } from 'react';
import {
  Col,
  Row,
  Container,
  CarouselControl
} from 'reactstrap';

const sampleItems = [
  {
    id: 1,
    dataId: 'FUHlDlL_LbY'
  },
  {
    id: 2,
    dataId: 'FUHlDlL_LbY'
  },
  {
    id: 3,
    dataId: 'FUHlDlL_LbY'
  },
  {
    id: 4,
    dataId: 'FUHlDlL_LbY'
  },
  {
    id: 5,
    dataId: 'FUHlDlL_LbY'
  },
  {
    id: 6,
    dataId: 'FUHlDlL_LbY'
  }, {
    id: 7,
    dataId: 'FUHlDlL_LbY'
  },
  {
    id: 8,
    dataId: 'FUHlDlL_LbY'
  },
  {
    id: 9,
    dataId: 'FUHlDlL_LbY'
  },
  {
    id: 10,
    dataId: 'FUHlDlL_LbY'
  },
  {
    id: 11,
    dataId: 'FUHlDlL_LbY'
  },
  {
    id: 12,
    dataId: 'FUHlDlL_LbY'
  }
];

const calcParams = (props) => {
  const items = props.items || sampleItems;
  const columns = [0, 1, 2, 2, 2, 3, 3, 4, 4, 5, 5];

  let nPerScreen = props.numPerScreen || 1;
  if (props.width < 576) {
    nPerScreen = 1;
  } else if (props.width >= 576 && props.width < 768 && nPerScreen > 2) {
    nPerScreen = 2;
  } else if (props.width >= 768 && props.width < 992 && nPerScreen > 4) {
    nPerScreen = 4;
  } else if (props.width >= 992 && props.width < 1200 && nPerScreen > 6) {
    if (nPerScreen >= 8) {
      nPerScreen = 8;
    } else {
      nPerScreen = 6;
    }
  } else if (props.width >= 1200) {
    nPerScreen = 15;
  }
  
  const colNum = nPerScreen > 10 ? 5 : columns[nPerScreen];
  const sNum = parseInt(items.length / nPerScreen) + ((items.length % nPerScreen) > 0 ? 1 : 0);
  const rows = parseInt(nPerScreen / colNum) + ((nPerScreen % colNum) > 0 ? 1 : 0);
  let colHeight = parseInt(props.height / rows) - 10;
  if (colHeight > (props.width / colNum)) {
    colHeight = parseInt(0.8 * (props.width / colNum));
  }
  const params = {
    screenNum: sNum,
    perScreen: nPerScreen,
    colH: colHeight,
    height: props.height,
    colNum
  }
  return params;
}

const VideoPlayer = (props) => {
  const items = props.items || sampleItems;
  const [activeIndex, setActiveIndex] = useState(0);
  const [params, setParams] = useState(calcParams({
    items,
    width: props.width || window.innerWidth,
    height: props.height || window.innerHeight,
    numPerScreen: props.numPerScreen || 1
  }));
  

  useEffect(() => {
    const handleResize = () => {
      setParams(calcParams({
        items,
        width: window.innerWidth,
        height: window.innerHeight,
        numPerScreen: props.numPerScreen || 1
      }))
      setActiveIndex(0)
    }
    window.addEventListener('resize', handleResize)
    return () => { window.removeEventListener('resize', handleResize) }
  }, [])

  const next = () => {
    const nextIndex = activeIndex === params.screenNum - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    const nextIndex = activeIndex === 0 ? params.screenNum - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }
  
  const slides = items.map((item, index) => {
    const flag = index < activeIndex * params.perScreen || index >= (activeIndex + 1) * params.perScreen;
    return (
      <Col key={item.id} className={flag ? 'hide' : ''}>
        <video width="100%" height="100%" controls>
          <source src={item.webm} type="video/webm"/> 
          <source src={item.ogg} type="video/ogg"/> 
          <source src={item.mp4} type="video/mp4"/>
          <source src={item.three_gp} type="video/3gp"/>
        </video>
      </Col>
    );
  })
  return (
    <div>
      <style>
        {
          `.col { 
              height: ${params.colH}px;
            }
            .row {
                height: ${params.height}px;
            }
            .col.hide {
                display: none;
            }`
        }
      </style>
      <Container fluid={true} className="bg-dark">
        <Row xs={params.colNum} className="align-items-center">
          {slides}
          {activeIndex > 0 &&
            <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
          }
          {activeIndex < (params.screenNum - 1) &&
            <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
          }
        </Row>
        <span style={{color: 'white'}}>{params.screenNum + ':' + activeIndex}</span>
      </Container>
    </div>
  );
}

export default VideoPlayer;