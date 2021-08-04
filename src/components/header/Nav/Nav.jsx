import Li from "./Li/Li";
import Style from './Nav.module.css';


const Nav = ({nav}) => {
    return (
            <ul className={Style.ul}>
            {nav.map((li) => {
              return (
                <Li key={li.id} name={li.name} img={li.img}/>
              )   
            })}
            </ul>
    );
}

export default Nav;