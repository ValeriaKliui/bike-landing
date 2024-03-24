import { useContext } from "react";
import { ThemeContext } from "styled-components";

export const Toggler = () => {
    const { changeTheme } = useContext(ThemeContext);

    return (
        <div>
            <button onClick={changeTheme}>Белый</button>
            <button>черный</button>
        </div>
    );
}