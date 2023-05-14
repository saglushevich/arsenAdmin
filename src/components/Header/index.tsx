import { useRouter } from "next/router";
import { Wrapper, Menu, MenuItem, Button } from "./styled";

function Header() {
    const router = useRouter();
    const signOut = () => {
        router.push("/");
        localStorage.clear();
    }
    return (
        <Wrapper>
            <Menu>
                <MenuItem href="/catalog">Управление товарами</MenuItem>
                <MenuItem href="/orders">Заказы</MenuItem>
                <MenuItem href="/form">Добавить товар</MenuItem>
            </Menu>
            <Button onClick={signOut}>Выйти</Button>
        </Wrapper>
    )
}

export default Header;