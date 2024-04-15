import{s as e,t as n,N as l,r as c,j as i,S as o}from"./index-30d0e4bc.js";const d="/dual/assets/Rectangle 1-2557fb2d.png",g=e.div`
  padding: ${n.spacing(32)} ${n.spacing(48)};
  inline-size: 1380px;
  background-color: ${n.colors.green};
  block-size: 736px;
  border-radius: ${n.radius.xl};
`,p=e.div`
  position: absolute;
  max-inline-size: 530px;
  top: 251px;

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
`,h=e.img`
  height: 736px;
  max-width: 699px;
  transform: translate(585px, -64px);
`,x=e(l)`
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
`,f=e.div`
  padding: ${n.spacing(16)};
  border: none;
  border-radius: 20px;
  background-color: ${n.colors.light};
  position: relative;
  left: 937px;
  bottom: 230px;
  inline-size: 290px;
  display: flex;

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
    margin: 0;
  }
`,m=e.div`
  border: none;
  background-color: ${n.colors.green};
  border-radius: 13px;
  margin-inline-end: ${n.spacing(8)};
  width: 54px;
  height: 54px;
  padding: ${n.spacing(9.75)} ${n.spacing(8.5)};
`,$=e.div`
display: flex;
flex-direction: column;
gap: ${n.spacing(3)};
}
`,b=()=>{const[s,r]=c.useState(!1),t=()=>{r(a=>!a)};return i.jsxs(g,{children:[i.jsxs(p,{children:[i.jsx("h2",{children:"Make Life Easier for the Family:"}),i.jsx("p",{children:"Find Babysitters Online for All Occasions"}),i.jsxs(x,{to:"/nannies",onChange:t,children:[i.jsx("span",{children:"Get started"}),i.jsx("svg",{width:"15",height:"22",children:i.jsx("use",{xlinkHref:s?`${o}#icon-Arrow-inline`:`${o}#icon-Arrow-up`})})]})]}),i.jsx(h,{src:d,alt:"home"}),i.jsxs(f,{children:[i.jsx(m,{children:i.jsx("svg",{width:"20",height:"15",children:i.jsx("use",{xlinkHref:`${o}#icon-check`})})}),i.jsxs($,{children:[i.jsx("p",{children:"Experienced nannies"}),i.jsx("h2",{children:"15,000"})]})]})]})};function j(){return i.jsx(b,{})}export{j as default};
