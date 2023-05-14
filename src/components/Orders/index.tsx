import { useState } from "react";
import { Wrapper, Filters, Filter, Message, List } from "./styles"
import Order from "@components/Order";
import { deleteOrder, updateOrder } from "@actions";

const FILTERS = ["все", "не обработан", "подготавливается", "отправлен", "доставлен", "ошибка"];

function Orders({ orders }: any) {
    const [status, setStatus] = useState("все");
    const [actualOrders, setActualOrders] = useState(orders);

    const onSubmit = (id: string, order: any) => async (e: any) => {
        e.preventDefault();
        const orders = actualOrders.map((item: any) => {
            if (item._id === id) {
                return order;
            }

            return item;
        })
        setActualOrders(orders);
        await updateOrder(id, order);
    }

    const onToggleStatus = (status: string) => () => {
        setStatus(status);
    }

    const onDeleteOrder = (id: string) => async () => {
        const orders = actualOrders.filter((item: any) => item._id !== id);
        setActualOrders(orders)
        await deleteOrder(id);
    }

    const filters = FILTERS.map((filter, i) => (
        <Filter key={i} onClick={onToggleStatus(filter)}>{filter}</Filter>
    ));

    const selectedOrders = actualOrders.filter((item: any) => status === "все" ? item : item.status === status);

    const list = selectedOrders.map((item: any) => (
        <Order key={item._id} order={item} onDeleteOrder={onDeleteOrder(item._id)} onSubmit={onSubmit}/>
    ))

    return (
        <Wrapper>
            <Filters>
                {filters}
            </Filters>
            <Message>Статус: {status}</Message>
            <List>
                {list.length ? list : <Message>Нет товаров в этом статусе</Message>}
            </List>
        </Wrapper>
    )
}

export default Orders;