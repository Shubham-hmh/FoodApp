// import React from 'react'
// import { Link } from 'react-router-dom'
// const Footer = () => {
//   return (
//     <div><footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
//     <div className="col-md-4 d-flex align-items-center">
//       <Link to="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
//       </Link>
//       <span className="text-muted">© 2023 GoFood, Inc</span>
//     </div>

//     <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
    
//     </ul>
//   </footer></div>
//   )
// }

// export default Footer


import { Facebook, Instagram, MailOutline, Phone, Room, Twitter } from '@mui/icons-material';
import styled from 'styled-components';
import {mobile} from "../responsive"
const Container = styled.div`
display:flex;
${mobile({flexDirection:"column"})};
`;
const Left = styled.div`
flex:1;
display:flex;
flex-direction:column;
padding:20px;


`;
const Logo = styled.h1``;
const Desc = styled.p`
margin:20px 0px;
`;
const SocialContainer = styled.div`
display:flex;
`;
const SocialIcon = styled.div`
height:40px;
width:40px;
border-radius:50%;
color:white;
background-color:#${props => props.color};
display:flex;
align-items:center;
justify-content:center;
margin-right:20px;
`;

const Center = styled.div`
flex:1;
padding:20px;
${mobile({display:"none"})};
`;

const Title = styled.h3`
margin-bottom:30px;
`;
const List = styled.ul`
margin:0;
padding:0;
list-style:none;
display:flex;
flex-wrap:wrap;
`;
const ListItem = styled.li`
width:50%;
margin-bottom:10px;
`;
const Right = styled.div`
flex:1;
padding:20px;


`;
const ContactItem = styled.div`
margin-bottom:20px;
display:flex;
align-items:center;
`;
const Payment = styled.img`
width:50%;
`;


const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>Paris.</Logo>
                <Desc>This is Food order website for digital marketning.</Desc>
                <SocialContainer>
                    <SocialIcon color="385999">
                        <Facebook />
                    </SocialIcon>
                    <SocialIcon color="E4405F">
                        <Instagram />
                    </SocialIcon>
                    <SocialIcon color="55ACEE">
                        <Twitter />
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Title>Useful Links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>

                    <ListItem>My Account</ListItem>
                    <ListItem>Order Tracking</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Terms</ListItem>
                </List>
            </Center>
            <Right>
                <Title>Contact</Title>
                <ContactItem>
                    34/67 DLF Zone,South Delhi, India.
                </ContactItem>
                <ContactItem>
                    <Room style={{marginRight:"10px"}}/>34/67 DLF Zone,South Delhi, India.
                </ContactItem>
                <ContactItem>
                    <Phone style={{marginRight:"10px"}} /> +1 234 56 78
                </ContactItem>
                <ContactItem><MailOutline /> contact@web.com</ContactItem>
            </Right>
        </Container>
    )
}

export default Footer