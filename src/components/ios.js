import React, { Component } from "react";
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

const images = [
    'img/dummy/img-0.png',
    'img/dummy/img-1.png',
    'img/dummy/img-2.png',
    'img/dummy/img-3.png',
  ];
   
  export default class iOS extends Component {
    constructor(props) {
      super(props);
   
      this.state = {
        photoIndex: 0,
        isOpen: false,
      };
    }
   
    render() {
      const { photoIndex, isOpen } = this.state;
  
      return (
        <div>
          <button className='btn btn-skin btn-lg shadow-lg' type="button" onClick={() => this.setState({ isOpen: true })}>
            iOS TestFlight
          </button>
   
          {isOpen && (
            <Lightbox
              mainSrc={images[photoIndex]}
              nextSrc={images[(photoIndex + 1) % images.length]}
              prevSrc={images[(photoIndex + images.length - 1) % images.length]}
              onCloseRequest={() => this.setState({ isOpen: false })}
              onMovePrevRequest={() =>
                this.setState({
                  photoIndex: (photoIndex + images.length - 1) % images.length,
                })
              }
              onMoveNextRequest={() =>
                this.setState({
                  photoIndex: (photoIndex + 1) % images.length,
                })
              }
            />
          )}
        </div>
      );
    }
  }


//  <a
//                              href="https://testflight.apple.com/join/fQDostRx"
//                              className="btn btn-skin btn-lg shadow-lg"
//                            >
//                              iOS TestFlight
//                              <i className="fa fa-angle-right" />
//                            </a>