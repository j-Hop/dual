import{s as e,t as n,N as a,r as l,j as i,S as o}from"./index-39850285.js";const g="/dual/assets/Rectangle 1-2557fb2d.png",d=e.div`
  padding: ${n.spacing(32)};
  max-inline-size: 1380px;
  background-color: ${n.colors.green};
`,h=e.div`
  position: absolute;
  max-inline-size: 530px;

  h2 {
    font-size: 70px;
    font-weight: 500;
    line-height: 1;
    color: ${n.colors.light};
    margin-block-end: ${n.spacing(14)};
  }

  p {
    font-size: 28px;
    font-weight: 400;
    line-height: 1.07;
    color: ${n.colors.light};
    margin-block-end: ${n.spacing(32)};
  }
`,p=e.img`
  border-radius: ${n.spacing(0)} ${n.spacing(15)} ${n.spacing(15)}
    ${n.spacing(0)};
  background-color: rgba(18, 20, 23, 0.6);
`,x=e(a)`
  border: 1px solid rgba(251, 251, 251, 0.4);
  border-radius: ${n.radius.xl};
  background-color: transparent;
  padding: ${n.spacing(9)} ${n.spacing(25)};
  display: inline-block;
  transition: border ${n.transition};
  display: flex;
  align-items: center;
  max-inline-size: 235px;

  &:hover {
    border: ${n.colors.light};
  }

  span {
    font-size: 20px;
    font-weight: 500;
    line-height: 1.2;
    color: ${n.colors.light};
    margin-inline-end: ${n.spacing(9)};
  }
`,$=e.div`
  display: flex;
  flex-wrap: wrap;
`,b=e.div`
  padding: ${n.spacing(16)};
  border: none;
  border-radius: 20px;
  background-color: ${n.colors.light};
  position: absolute;
  right: 50px;
  bottom: 50px;
  max-inline-size: 290px;

  h2 {
    color: ${n.colors.black};
    font-weight: 700;
    font-size: 24px;
    line-height: 1.2;
  }

  p {
    color: rgba(17, 16, 28, 0.5);
    font-size: 16px;
    font-weight: 400;
    line-height: 1.2;
    margin-block-end: ${n.spacing(3)};
  }
`,m=e.div`
  border: none;
  background-color: ${n.colors.green};
  border-radius: 13px;
  margin-inline-end: ${n.spacing(8)};
`,f=e.svg`
  padding: ${n.spacing(9.75)} ${n.spacing(8.5)};
`,u=()=>{const[s,r]=l.useState(!1),c=()=>{r(t=>!t)};return i.jsx(d,{children:i.jsxs($,{children:[i.jsxs(h,{children:[i.jsx("h2",{children:"Make Life Easier for the Family:"}),i.jsx("p",{children:"Find Babysitters Online for All Occasions"}),i.jsxs(x,{to:"/nannies",onChange:c,children:[i.jsx("span",{children:"Get started"}),i.jsx("svg",{width:"15",height:"22",children:i.jsx("use",{xlinkHref:s?`${o}#icon-Arrow-inline`:`${o}#icon-Arrow-up`})})]})]}),i.jsx(p,{src:g,alt:"home"}),i.jsxs(b,{children:[i.jsx(m,{children:i.jsx(f,{children:i.jsx("svg",{width:"20",height:"15",children:i.jsx("use",{xlinkHref:`${o}#icon-check`})})})}),i.jsx("p",{children:"Experienced nannies"}),i.jsx("h2",{children:"15,000"})]})]})})};function k(){return i.jsx(u,{})}export{k as default};
