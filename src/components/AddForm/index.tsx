import { Wrapper, Form, Button, Input, Inputs, Message, ImageWrapper, Dropdawn, DropDawnHeader, Menu, MenuItem, MenuButton } from "./styles";
import { addProduct } from "@actions";
import { ChangeEvent, SyntheticEvent, useState } from "react";

function AddForm() {
    const [title, setTitle] = useState("");
    const [brand, setBrand] = useState("");
    const [category, setCategory] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [gallery, setGallery] = useState<string[]>([]);
    const [message, setMessage] = useState("");
    const [disabled, setDisabled] = useState(false);
    const [dropdawn, setDropdawn] = useState(false);

    const onSubmit = async (e: SyntheticEvent) => {
        e.preventDefault();
        setDisabled(true);
        if (!title || !brand || !category || !price || !description) {
            return;
        }

        if (category === "laptop" || category === "phone" || category === "headphones" || category === "tv") {
            setCategory(prevCategory => prevCategory.toLowerCase());
        } else {
            setCategory("other")
        }

        const response = await addProduct(title, brand, category, price.replace(/,/g, "."), description, gallery);

        // console.log(response);
        if (response) {
            setMessage("Добавлено! Проверьте отображение в каталоге!")

            setGallery([]);
            setTitle("");
            setBrand("");
            setCategory("");
            setPrice("");
            setDescription("");

        } else {
            setMessage("Ошибка! Повторите попытку!")
        }

        setDisabled(false);
    }

    const handleImage = (e: ChangeEvent<HTMLInputElement>) => {
        setGallery(gallery => [...gallery, e.target.value]);
    }

    const onToggleDropdawn = () => {
        setDropdawn(prevDropdown => !prevDropdown)
    }

    const onSelectCategory = (type: string) => () => {
        setCategory(type);
        setDropdawn(false)
    }

    return (
        <Wrapper>
            <Form encType="multipart/form-data">
                <Message>Информация</Message>
                <Inputs>
                    <Input required value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Название товара"/>
                    <Input required value={brand} onChange={(e) => setBrand(e.target.value)} placeholder="Производитель товара"/>
                    <DropDawnHeader onClick={onToggleDropdawn}>{category ? category : 'Категория товара'}</DropDawnHeader>
                    {/* <Input required defaultValue={category} list="category" onChange={(e) => setCategory(e.target.value)} placeholder="Категория товара"/> */}
                    {dropdawn && <Dropdawn>
                        <Menu>
                            <MenuItem onClick={onSelectCategory('phone')}>phone</MenuItem>
                            <MenuItem onClick={onSelectCategory('laptop')}>laptop</MenuItem>
                            <MenuItem onClick={onSelectCategory('tv')}>tv</MenuItem>
                            <MenuItem onClick={onSelectCategory('headphones')}>headphones</MenuItem>
                            <MenuItem onClick={onSelectCategory('other')}>other</MenuItem>
                        </Menu>
                    </Dropdawn>}
                </Inputs>
                <Inputs>
                    <Input required value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Цена товара"/>
                    <Input required value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Описание товара"/>
                </Inputs>
                <Message>Картинки</Message>
                <ImageWrapper>
                    <Input required onChange={handleImage} type="text" placeholder="Изображение товара"/>
                    <Input onChange={handleImage} type="text" placeholder="Изображение товара"/>
                    <Input onChange={handleImage} type="text" placeholder="Изображение товара"/>
                </ImageWrapper>
                <ImageWrapper>
                    <Input onChange={handleImage} type="text" placeholder="Изображение товара"/>
                    <Input onChange={handleImage} type="text" placeholder="Изображение товара"/>
                    <Input onChange={handleImage} type="text" placeholder="Изображение товара"/>
                </ImageWrapper>
                <ImageWrapper>
                    <Input onChange={handleImage} type="text" placeholder="Изображение товара"/>
                    <Input onChange={handleImage} type="text" placeholder="Изображение товара"/>
                    <Input onChange={handleImage} type="text" placeholder="Изображение товара"/>
                </ImageWrapper>
                
                <Button disabled={disabled} onClick={onSubmit}>Добавить</Button>
            </Form>
            <Message>{message}</Message>
        </Wrapper>
    )
}

export default AddForm;