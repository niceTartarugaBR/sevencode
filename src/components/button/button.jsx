import style from "../button/button.module.css";

const Button = ({Link, ...props }) =>{
    return(
        <div className={style.Button}>
            <a href={link} className={style.ButtonA}{...props}>
            </a>
        </div>
    );
};

export default Button;