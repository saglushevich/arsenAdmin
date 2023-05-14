import { useRouter } from 'next/router';
import { ChangeEvent, SyntheticEvent } from "react";
import { useState } from "react";
import { Wrapper, Content, Title, Input, Form, Button, CloseBtn } from "./styles";
import { login } from "@actions";

interface IModal {
    active?: boolean;
    toggleActive: (e: SyntheticEvent) => void;
};

export function LoginModal() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();

    const onSubmit = async (e: SyntheticEvent) => {
        e.preventDefault();
        const response = await login(email, password)

        if (response) {
            router.push("/catalog")
        }
    }

    if (typeof window !== "undefined") {
        if (localStorage.getItem("email")) {
            router.push("/catalog")
        }
    }

    return (
        <Wrapper>
            <Content>
                <Title>Войти в аккаунт</Title>
                <Form onSubmit={onSubmit}>
                    <Input required onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} type="email" placeholder="Введите email"/>
                    <Input required onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)} type="password" min={8} placeholder="Введите пароль"/>
                    <Button>Войти</Button>
                </Form>
            </Content>
        </Wrapper>
    )
}
