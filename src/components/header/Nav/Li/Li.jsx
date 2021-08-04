import Style from './Li.module.css';

const Li = (props) => {
    console.log(props);
    return (
            <li className={Style.li}>
                <a href="">
                <span>
                   <img src={props.img}/>
                </span>
                 {props.name}
                 </a>
            </li>
    );
}

export default Li;

