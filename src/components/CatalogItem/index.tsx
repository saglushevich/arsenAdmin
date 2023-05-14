import { Product, Content, Image, Title, Price, Delete, Edit } from "./styles";
import { EditProduct } from "@components/EditModal";
import { useState } from "react";

function CatalogItem({ data, onDeleteProduct, onSubmit }: any) {
    const [edit, setEdit] = useState(false);
    const {title, price, inStock, brand, gallery} = data;

    const onEdit = () => {
        setEdit(prevEdit => !prevEdit);
    }

    return (
        <Product>
            <Content>
                <Image src={gallery[0] || "https://upload.wikimedia.org/wikipedia/commons/9/9a/%D0%9D%D0%B5%D1%82_%D1%84%D0%BE%D1%82%D0%BE.png"} />
                <Title>{title}, {brand}</Title>
                <Price>BYN {price}</Price>
            </Content>
            <Edit onClick={onEdit}>Обновить</Edit>
            <Delete onClick={onDeleteProduct}>Удалить</Delete>
            {edit && <EditProduct product={data} onEdit={onEdit} onSubmit={onSubmit} />}
        </Product>
    )
}

export default CatalogItem;
