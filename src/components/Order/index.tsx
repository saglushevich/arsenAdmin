import { useState } from "react";
import { Wrapper, Title, Description, Button, Span, Product, Details, DeleteButton } from "./styles";
import { EditModal } from "@components/EditModal";

function Order({ order, onDeleteOrder, onSubmit }: any) {
    const [edit, setEdit] = useState(false);
    const { _id, address, city, region, name, email, phone, price, quantity, products, request, status} = order;
    
    const list = JSON.parse(products).map((item: any, i: number) => {
        const { _id, title, brand, price } = item;
        return (
            <Product key={_id}>{i+1}) {_id}, {title}, {brand}, {price}BYN</Product>
        )
    })

    const onEdit = () => {
        setEdit(prevEdit => !prevEdit);
    }

    return (
        <Wrapper>
            <Details>
                <Title>Номер: {_id}</Title>
                <Title>Статус: <Span>{status}</Span></Title>
                <Description>Имя: {name}</Description>
                <Description>Email: {email}</Description>
                <Description>Телефон: {phone}</Description>
                <Description>Регион: {region}</Description>
                <Description>Город: {city}</Description>
                <Description>Адрес: {address}</Description>
                <Description>Количество товаров: {quantity}</Description>
                <Description>Цена: {price} BYN</Description>
                <Description>Товары: {list}</Description>
                <Description>Пожелания: {request}</Description>
            </Details>
            <Details>
                <Button onClick={onEdit}>Редактировать</Button>
                <DeleteButton onClick={onDeleteOrder}>Удалить</DeleteButton>
            </Details>
            {edit && <EditModal order={order} onEdit={onEdit} onSubmit={onSubmit}/>}
        </Wrapper>
    )
}

export default Order;