import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import styled from "styled-components";
import { Loader } from "./Loader";
import { Header } from "./Header/Header";

const GlobalBox = styled.div`
padding: 0 64px;
`;

export const SharedLayout = () =>{
return(
<GlobalBox>
    <Header/>
        <main>
        <Suspense fallback={<Loader/>}>
        <Outlet/>
        </Suspense>
    </main>
</GlobalBox>
);
};