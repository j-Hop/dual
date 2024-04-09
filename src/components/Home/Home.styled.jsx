import { theme } from "../theme";
import styled from "styled-components";
import { NavLink } from "react-router-dom";


export const Section = styled.div`
padding:${theme.spacing(32)};
max-inline-size:1380px;
background-color:${theme.colors.green};
`;

export const HomeInfo = styled.div`
position:absolute;
left:96px;
bottom:163px;
max-inline-size:520px;
display:flex;
justify-content:flex-start;
align-items:flex-start;

h2{
font-size: 70px;
font-weight: 500;
line-height: 1;
color:${theme.colors.light};
margin-block-end:${theme.spacing(14)};
}

p{
font-size: 28px;
font-weight: 400;
line-height: 1.07;
color:${theme.colors.light};
margin-block-end:${theme.spacing(32)};
}
`;

export const HomeImg = styled.img`
border-radius:${theme.spacing(0)}  ${theme.spacing(15)} ${theme.spacing(15)} ${theme.spacing(0)} ;
background-color: rgba(18, 20, 23, 0.6);
`;

export const BtnStart = styled(NavLink)`
border: 1px solid rgba(251, 251, 251, 0.4);
border-radius:${theme.radius.xl};
background-color:transparent;
padding:${theme.spacing(9)} ${theme.spacing(25)};
display:inline-block;
transition:border ${theme.transition};

&:hover{
    border: ${theme.colors.light};
}


span{
font-size: 20px;
font-weight: 500;
line-height: 1.2;
color:${theme.colors.light};
margin-inline-end:${theme.spacing(9)};
}
`;

export const HomeFlexBox = styled.div`
display:flex;
flex-wrap:wrap;
`;

export const InfoHomeBox = styled.div`
padding:${theme.spacing(16)};
border:none;
border-radius:20px;
background-color:${theme.colors.light};
position:absolute;
right:50px;
bottom:50px;
max-inline-size:290px;

h2{
color:${theme.colors.black};
font-weight:700;
font-size:24px;
line-height:1.2;
}

p{
color:rgba(17, 16, 28, 0.5);
font-size: 16px;
font-weight: 400;
line-height: 1.2;
margin-block-end:${theme.spacing(3)};
}
`;

export const BoxCheck = styled.div`
border:none;
background-color:${theme.colors.green};
border-radius:13px;
margin-inline-end:${theme.spacing(8)};
`;

export const IconCheck = styled.svg`
padding:${theme.spacing(9.75)} ${theme.spacing(8.5)};
`;
