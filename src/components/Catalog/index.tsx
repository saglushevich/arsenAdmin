import { Wrapper, Title, Products } from "./styles";
import CatalogItem from "@components/CatalogItem";
import { deleteProduct, updateProduct } from "@actions";
import { useState } from "react";

function Catalog({ products }: any) {
    const [actualCatalog, setActualCatalog] = useState(products);

    const onDeleteProduct = (id: string) => async () => {
        const newCatalog = actualCatalog.filter((item: any) => item._id !== id);

        setActualCatalog(newCatalog);

        await deleteProduct(id);
    };
    
    const onSubmit = (id: string, order: any) => async (e: any) => {
        e.preventDefault();
        const orders = actualCatalog.map((item: any) => {
            if (item._id === id) {
                return order;
            }

            return item;
        })
        setActualCatalog(orders);
        await updateProduct(id, order);
    }

    const goods = actualCatalog.map((item: any) => <CatalogItem key={item._id} onSubmit={onSubmit} onDeleteProduct={onDeleteProduct(item._id)} data={item}/>)

    return (
        <Wrapper>
            <Title>
                Удаление товаров
            </Title>
            <Products>
                {goods}
            </Products>
        </Wrapper>
    )
}

export default Catalog;