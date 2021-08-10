import Style from './li.module.css';

const Li = (props) => {
    console.log(props);
    return (
            <li className={Style.li}>
                <a href="">
                    <span>
                        <img src={props.img}/>
                    </span>
                    <p>
                        {props.name}
                    </p>
                </a>
            </li>
    );
}

export default Li;