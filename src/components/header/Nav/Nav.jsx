import Style from './Nav.module.css';


const Nav = () => {
    return (
        <div>
            <ul className={Style.ul}>
                <li>
                    <a href="">
                        <span>
                            <img src="https://gambolthemes.net/workwise-new/images/icon1.png"/>
                        </span>
                         Home 
                    </a>
                </li>
                <li>
                    <a href="">
                        <span>
                            <img src="https://gambolthemes.net/workwise-new/images/icon2.png"/>
                        </span>
                         Companies 
                    </a>
                </li>
                <li>
                    <a href="">
                        <span>
                            <img src="https://gambolthemes.net/workwise-new/images/icon3.png"/>
                        </span>
                         Projects 
                    </a>
                </li>
                <li>
                    <a href="">
                        <span>
                            <img src="https://gambolthemes.net/workwise-new/images/icon4.png"/>
                        </span>
                         Profiles 
                    </a>
                </li>
                <li>
                    <a href="">
                        <span>
                            <img src="https://gambolthemes.net/workwise-new/images/icon5.png"/>
                        </span>
                         Jobs 
                    </a>
                </li>
                <li>
                    <a href="">
                        <span>
                            <img src="https://gambolthemes.net/workwise-new/images/icon6.png"/>
                        </span>
                         Messages 
                    </a>
                </li>
                <li>
                    <a href="">
                        <span>
                            <img src="https://gambolthemes.net/workwise-new/images/icon7.png"/>
                        </span>
                         Notifications 
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default Nav;