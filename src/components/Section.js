import './styles/section.css';
import React from 'react'
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';


const Section = ({title, description, backgroundImg, leftBtnText, rightBtnText}) => {
    return (
        <Wrap className="wrap" bgImage={backgroundImg}>
            
            <Fade bottom>
                <div className="item-text">
                    <h1>{title}</h1>
                    <p>{description}</p>
                </div>
            </Fade>

            <div className="buttons">
                
                <Fade bottom>
                    <div className="button-group">
                        <div className="left-button">
                                {leftBtnText}
                        </div>
                        {
                            rightBtnText && 

                            <div className="right-button">
                                {rightBtnText}
                            </div>
                                
                        }
    
                    </div>
                </Fade>
                
                <img className="down-arrow" src="/images/down-arrow.svg"/>
            </div>
        </Wrap>
    )
}

export default Section

const Wrap = styled.div`
    // background-image: url('/images/model-s.jpg');
    background-image: ${props => `url("/images/${props.bgImage} ")`};
`
