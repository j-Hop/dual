import{s as i,t as n,N as c,r as l,j as e,H as g,S as o}from"./index-727b9738.js";const d="/dual/assets/Rectangle 1-2557fb2d.png",h=i.div`
padding:${n.spacing(32)};
max-inline-size:1380px;
background-color:${n.colors.green};
`,p=i.div`
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
color:${n.colors.light};
margin-block-end:${n.spacing(14)};
}

p{
font-size: 28px;
font-weight: 400;
line-height: 1.07;
color:${n.colors.light};
margin-block-end:${n.spacing(32)};
}
`,x=i.img`
border-radius:${n.spacing(0)}  ${n.spacing(15)} ${n.spacing(15)} ${n.spacing(0)} ;
background-color: rgba(18, 20, 23, 0.6);
`,f=i(c)`
border: 1px solid rgba(251, 251, 251, 0.4);
border-radius:${n.radius.xl};
background-color:transparent;
padding:${n.spacing(9)} ${n.spacing(25)};
display:inline-block;
transition:border ${n.transition};

&:hover{
    border: ${n.colors.light};
}


span{
font-size: 20px;
font-weight: 500;
line-height: 1.2;
color:${n.colors.light};
margin-inline-end:${n.spacing(9)};
}
`,b=i.div`
display:flex;
flex-wrap:wrap;
`,$=i.div`
padding:${n.spacing(16)};
border:none;
border-radius:20px;
background-color:${n.colors.light};
position:absolute;
right:50px;
bottom:50px;
max-inline-size:290px;

h2{
color:${n.colors.black};
font-weight:700;
font-size:24px;
line-height:1.2;
}

p{
color:rgba(17, 16, 28, 0.5);
font-size: 16px;
font-weight: 400;
line-height: 1.2;
margin-block-end:${n.spacing(3)};
}
`,m=i.div`
border:none;
background-color:${n.colors.green};
border-radius:13px;
margin-inline-end:${n.spacing(8)};
`,u=i.svg`
padding:${n.spacing(9.75)} ${n.spacing(8.5)};
`,j=()=>{const[s,r]=l.useState(!1),t=()=>{r(a=>!a)};return e.jsxs(h,{children:[e.jsx(g,{}),e.jsxs(b,{children:[e.jsxs(p,{children:[e.jsx("h2",{children:"Make Life Easier for the Family:"}),e.jsx("p",{children:"Find Babysitters Online for All Occasions"}),e.jsxs(f,{to:"/nannies",onChange:t,children:[e.jsx("span",{children:"Get started"}),e.jsx("svg",{width:"5",height:"22",children:e.jsx("use",{xlinkHref:s?`${o}#icon-Arrow-up`:`${o}#icon-Arrow-inline`})})]})]}),e.jsx(x,{src:d,alt:"home"}),e.jsxs($,{children:[e.jsx(m,{children:e.jsx(u,{children:e.jsx("svg",{width:"20",height:"15",children:e.jsx("use",{xlinkHref:`${o}#icon-check`})})})}),e.jsx("p",{children:"Experienced nannies"}),e.jsx("h2",{children:"15,000"})]})]})]})};function H(){return e.jsx(j,{})}export{H as default};
