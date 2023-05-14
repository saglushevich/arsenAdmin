import Header from "@components/Header";
import { Wrapper } from "./styles";
import { ReactNode } from "react";

function Layout({ children }: { children: ReactNode }) {
    return (
        <Wrapper>
            <Header />
            {children}
        </Wrapper>
    )
}

export default Layout;