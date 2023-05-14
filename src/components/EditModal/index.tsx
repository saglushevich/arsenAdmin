import { useState } from "react";
import { Wrapper, Content, Title, Radio, Number, Text, Input, Form, Button, CloseBtn, Label, Status, Inputs, Block } from "./styles";

export function EditModal({ order, onEdit, onSubmit }: any) {
    const [newOrder, setNewOrder] = useState(order);

    const { _id, address, city, region, name, email, phone, price, quantity, status} = order;

    const onInputChange = (e: any) => {
        setNewOrder((order: any) => ({...order, [e.target.name]: e.target.value}));
    }

    const onStatusChange = (e: any) => {
        setNewOrder((order: any) => ({...order, [e.target.name]: e.target.id}));
    }

    const onSendForm = (e: any) => {
        onSubmit(_id, newOrder)(e);
        onEdit();
    }

    return (
        <Wrapper>
            <Content>
                <Title>Управление заказом</Title>
                <Number>№ {_id}</Number>
                <Form onSubmit={onSendForm}>
                    <Status>
                        <Text>Выберите статус заказа:</Text>
                        <Block>
                            <Radio onChange={onStatusChange} defaultChecked={status === "не обработан"} type="radio" name="status" id="не обработан"/>
                            <Label htmlFor="не обработан">не обработан</Label>
                        </Block>
                        <Block>
                            <Radio onChange={onStatusChange} defaultChecked={status === "подготавливается"} type="radio" name="status" id="подготавливается"/>
                            <Label htmlFor="подготавливается">подготавливается</Label>
                        </Block>
                        <Block>
                            <Radio onChange={onStatusChange} defaultChecked={status === "отправлен"} type="radio" name="status" id="отправлен"/>
                            <Label htmlFor="отправлен">отправлен</Label>
                        </Block>
                        <Block>
                            <Radio onChange={onStatusChange} defaultChecked={status === "доставлен"} type="radio" name="status" id="доставлен"/>
                            <Label htmlFor="доставлен">доставлен</Label>
                        </Block>
                        <Block>
                            <Radio onChange={onStatusChange} defaultChecked={status === "ошибка"} type="radio" name="status" id="ошибка"/>
                            <Label htmlFor="ошибка">ошибка</Label>
                        </Block>
                    </Status>
                    <Inputs>
                        <Input name="name" onChange={onInputChange} placeholder="Имя" defaultValue={name} required/>
                        <Input name="email" onChange={onInputChange} placeholder="Email" defaultValue={email} required/>
                        <Input name="phone" onChange={onInputChange} placeholder="Телефон" defaultValue={phone} required/>
                        <Input name="region" onChange={onInputChange} placeholder="Регион" defaultValue={region} required/>
                        <Input name="city" onChange={onInputChange} placeholder="Город" defaultValue={city} required/>
                        <Input name="address" onChange={onInputChange} placeholder="Адрес" defaultValue={address} required/>
                        <Input name="quantity" onChange={onInputChange} placeholder="Количество товаров в заказе" defaultValue={quantity} type="number" required/>
                        <Input name="price" onChange={onInputChange} placeholder="Цена" defaultValue={price} required/>
                    </Inputs>
                    <Button>Сохранить</Button>
                </Form>
            </Content>
            <CloseBtn onClick={onEdit}>&times;</CloseBtn>
        </Wrapper>
    )
}

export function EditProduct({ product, onEdit, onSubmit }: any) {
    const [newProduct, setNewProduct] = useState(product);

    const { _id, title, brand, price, category } = product;

    const onInputChange = (e: any) => {
        setNewProduct((order: any) => ({...order, [e.target.name]: e.target.value}));
    }

    const onSendForm = (e: any) => {
        onSubmit(_id, newProduct)(e);
        onEdit();
    }

    return (
        <Wrapper>
            <Content>
                <Title>Управление товаром</Title>
                <Number>№ {_id}</Number>
                <Form onSubmit={onSendForm}>
                    <Inputs>
                        <Input name="title" onChange={onInputChange} placeholder="Название" defaultValue={title} required/>
                        <Input name="brand" onChange={onInputChange} placeholder="Производитель" defaultValue={brand} required/>
                        <Input name="category" onChange={onInputChange} placeholder="Название" defaultValue={category} required/>
                        <Input name="price" onChange={onInputChange} placeholder="Цена" defaultValue={price} required/>
                    </Inputs>
                    <Button>Сохранить</Button>
                </Form>
            </Content>
            <CloseBtn onClick={onEdit}>&times;</CloseBtn>
        </Wrapper>
    )
}