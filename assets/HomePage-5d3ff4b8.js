import{s as i,t as e,N as l,r as c,j as n,S as o}from"./index-fb60fd52.js";const d="/dual/assets/Rectangle 1-2557fb2d.png",p=i.div`
  padding: ${e.spacing(32)} ${e.spacing(48)};
  inline-size: 1380px;
  background-color: ${e.colors.green};
  block-size: 736px;
  border-radius: ${e.radius.xl};
`,g=i.div`
  position: absolute;
  max-inline-size: 530px;
  top: 251px;

  h2 {
    font-size: 70px;
    font-weight: 500;
    line-height: 1;
    color: ${e.colors.light};
    margin-block-end: ${e.spacing(14)};
  }

  p {
    font-size: 28px;
    font-weight: 400;
    line-height: 1.07;
    color: ${e.colors.light};
    margin-block-end: ${e.spacing(32)};
  }
`,x=i.img`
  height: 736px;
  max-width: 699px;
  transform: translate(585px, -64px);
`,h=i(l)`
  border: 1px solid rgba(251, 251, 251, 0.4);
  border-radius: ${e.radius.xl};
  background-color: transparent;
  padding: ${e.spacing(9)} ${e.spacing(25)};
  display: inline-block;
  transition: border ${e.transition};
  display: flex;
  align-items: center;
  max-inline-size: 235px;

  &:hover {
    border: ${e.colors.light};
  }

  span {
    font-size: 20px;
    font-weight: 500;
    line-height: 1.2;
    color: ${e.colors.light};
    margin-inline-end: ${e.spacing(9)};
  }
`,f=i.div`
  padding: ${e.spacing(16)};
  border: none;
  border-radius: 20px;
  background-color: ${e.colors.light};
  position: relative;
  left: 937px;
  bottom: 230px;
  inline-size: 290px;
  display: flex;

  h2 {
    color: ${e.colors.black};
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
`,u=i.div`
  border: none;
  background-color: ${e.colors.green};
  border-radius: 13px;
  margin-inline-end: ${e.spacing(8)};
  width: 54px;
  height: 54px;
  padding: ${e.spacing(9.75)} ${e.spacing(8.5)};
`,m=i.div`
display: flex;
flex-direction: column;
gap: ${e.spacing(3)};
}
`,$=()=>{const[r,s]=c.useState(!1),t=()=>{s(!0)},a=()=>{s(!1)};return n.jsxs(p,{children:[n.jsxs(g,{children:[n.jsx("h2",{children:"Make Life Easier for the Family:"}),n.jsx("p",{children:"Find Babysitters Online for All Occasions"}),n.jsxs(h,{to:"/nannies",onMouseEnter:t,onMouseLeave:a,children:[n.jsx("span",{children:"Get started"}),n.jsx("svg",{width:"15",height:"15",children:n.jsx("use",{xlinkHref:r?`${o}#icon-Arrow-inline`:`${o}#icon-Arrow-up`})})]})]}),n.jsx(x,{src:d,alt:"home"}),n.jsxs(f,{children:[n.jsx(u,{children:n.jsx("svg",{width:"20",height:"15",children:n.jsx("use",{xlinkHref:`${o}#icon-check`})})}),n.jsxs(m,{children:[n.jsx("p",{children:"Experienced nannies"}),n.jsx("h2",{children:"15,000"})]})]})]})};function j(){return n.jsx($,{})}export{j as default};
