import React from 'react';
import Divider from '@mui/material/Divider';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import Carousel from 'react-material-ui-carousel';
import { Paper } from '@mui/material';
import LaunchIcon from '@mui/icons-material/Launch';
import styled from 'styled-components';

const BodySection = styled.section`
  width: 90%;
  margin: 20px auto;
  padding: 0 0 0 0;
  border-radius: 3%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
  }
`;

const About = styled.div`
  width: 84rem;
  border: 1px solid #c7c4c4;
  padding: 10px;

  @media (max-width: 768px) {
    width: 100%;
    padding: 10px;
  }
`;

const DividerStyled = styled(Divider)`
  width: 100%;
  background-color: #c4c4c4;
`;

const GreenSection = styled.div`
  display: inline-flex;
  background-color: #e6ffe6;
  margin-top: 20px;
  gap: 14px;
  height: auto;
  width: 96%;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 10px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    height:25.7rem;
    gap:2px;
  }
`;

const PhotosAndContactsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 2rem;
  align-items: center;

  @media (min-width: 768px) {
    width: 55%;
  }
`;

const HeadLeft = styled.h1`
  border-left: 3px solid orange;
  padding-left: 10px;
`;

const Photos = styled.div`
  width: 100%;
  border: 1px solid #c7c4c4;
  padding: 10px;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Contacts = styled.div`
  width: 100%;
  border: 1px solid #c7c4c4;
  height: 12.5rem;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const IconStyle = {
    margin: '26px 0 0 2px',
    color: 'green'
};

const MediaItemStyle = {
    width: '100%',
    height: '10rem',
    marginTop: '8px'
};

const mediaItems = [
    { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWHZSTkmPuHMycAl3wgNxWuE44_SzIpSCn6Q&s', alt: 'Image 1' },
    { src: 'https://news.harvard.edu/wp-content/uploads/2021/08/082721_Move_KS_487.jpeg', alt: 'Image 2' },
    { src: '/video.mp4', type: 'video', alt: 'Video 1' },
];

const Image = styled.img`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  position: fixed;
  bottom:8%;
  left: 92%;   /* Center the image horizontally */
  transform: translateX(-50%);
  z-index: 10; /* Bring the image to the front */
`;


const Body = () => {
    return (
        <BodySection>
            <About>
                <HeadLeft>About</HeadLeft>
                <DividerStyled orientation="horizontal" flexItem />
                <GreenSection>
                    <span>
                        <LocationCityIcon style={IconStyle} />
                    </span>
                    <p><b>Private</b><br />University Type</p>
                    <span>
                        <AccountBalanceIcon style={IconStyle} />
                    </span>
                    <p><b>3</b><br />US News National Bank</p>
                    <span>
                        <MonetizationOnIcon style={IconStyle} />
                    </span>
                    <p><b>$84,950</b><br />Average Living Expenses</p>
                </GreenSection>
                <p><b>Harvard University</b> is a private Ivy League research university in Cambridge, Massachusetts. Founded in 1636 as Harvard College, it is the oldest
                    institution of higher learning in the United States and among the most prestigious in the world. Harvard University has an excellent enrollment of <b>23,000+
                        students</b> and a <b>student-to-faculty ratio of 7:1.</b> Harvard's four-year graduation rate is 87%, and its first year retention rate is 96%.
                </p>
                <h2>What is the acceptance rate of Harvard University?</h2>
                <p>Harvard University's <b>acceptance rate is just 4%,</b> making it one of the most selective universities in the world.</p>
                <p><b>Click Here: </b>"Boost Your <u>Harvard Admission</u> Chances with Yocket: Study Abroad Platform. Get Expert Guidance!"</p>
                <p>Harvard University is devoted to excellence in teaching, learning, and research, and to developing leaders who make a difference globally.</p>
            </About>
            <PhotosAndContactsContainer>
                <Photos>
                    <HeadLeft>Photos and Videos</HeadLeft>
                    <DividerStyled orientation="horizontal" flexItem />
                    <Carousel>
                        {mediaItems.map((item, index) => (
                            <Paper key={index}>
                                {item.type === 'video' ? (
                                    <video controls style={MediaItemStyle}>
                                        <source src={item.src} type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                ) : (
                                    <img src={item.src} alt={item.alt} style={MediaItemStyle} />
                                )}
                            </Paper>
                        ))}
                    </Carousel>
                </Photos>
                <Contacts>
                    <HeadLeft>Contact</HeadLeft>
                    <DividerStyled orientation="horizontal" flexItem />
                    <div style={{ display: 'inline-flex', gap: '10px' }}>
                        <p>Address</p>
                        <p>3 Oxfort St. Cambridge MA 02138, USA<br />
                            <span><a href='https://earth.google.com/web/@70.03595443,-94.94072236,-7158.53938873a,16157323.46450329d,35y,81.59679484h,28.15407613t,-0r/data=Cn8afRJ3CiUweDg5ZTM3NzQyN2Q3ZjAxOTk6MHg1OTM3YzY1Y2VlMjQyN2YwGaP_iqFBMEVAIeCP7Ft3x1HAKjzguKHguKvguLLguKfguLTguJfguKLguLLguKXguLHguKLguK7guLLguKPguYzguKfguLLguKPguYzguJQYAiABOgMKATA' style={{ textDecoration: 'none', color: 'blue' }}>View on Google earth<LaunchIcon /></a></span>
                        </p>
                    </div>
                    <DividerStyled orientation="horizontal" flexItem />
                    <div style={{ display: 'inline-flex', gap: '32px' }}>
                        <p>Email</p>
                        <p>internationaloffice@harvard.edu</p>
                        <Image src='/avtar1.jpg' alt='circle-img' />
                    </div>
                </Contacts>
            </PhotosAndContactsContainer>
        </BodySection>
    );
}

export default Body;