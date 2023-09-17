import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import images from 'src/assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import tho7mau from 'src/assets/images/967d1536e5ee20ed8112ee84f30a75d2~c5_100x100.jpeg';
import {
    faEllipsisVertical,
    faEarthAsia,
    faCircleQuestion,
    faKeyboard,
    faCloudArrowUp,
    faUser,
    faCoins,
    faGear,
    faSignOut,
} from '@fortawesome/free-solid-svg-icons';

import Tippy from '@tippyjs/react';
import routesConfig from 'src/config/routes';

import Button from 'src/components/Button';
import Menu from 'src/components/Popper/Menu';
import 'tippy.js/dist/tippy.css';
import { Messageicon } from 'src/components/Icon';
import Image from 'src/components/Image';
import { MailBoxIcon } from 'src/components/Icon/MailBoxIcon';
import Search from '../Search';
import { faOptinMonster } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);
const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    code: 'en',
                    title: 'English',
                },
                {
                    code: 'vi',
                    title: 'Tieng Viet',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and Help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard Shortcut',
    },
];

function Header() {
    const handleMenuChange = (menuItem) => {
        console.log(menuItem);
    };

    const currentUser = true;

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View profile',
            to: '/@xoa',
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Get coins',
            to: '/coin',
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Settings',
            to: '/settings',
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: 'Log out',
            to: '/logout',
            separate: true,
        },
    ];

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link to={routesConfig.home} className={cx('logo')}>
                    <img src={images.logo} alt="" />
                </Link>

                <Search />

                <div className={cx('action')}>
                    {currentUser ? (
                        <>
                            <Tippy trigger="click" placement="bottom" content="Upload">
                                <button className={cx('action-btn')}>
                                    <FontAwesomeIcon icon={faCloudArrowUp} />
                                </button>
                            </Tippy>
                            <Tippy placement="bottom" content="Messages">
                                <button className={cx('action-btn')}>
                                    <Messageicon width="2.4rem" height="2.4rem" />
                                </button>
                            </Tippy>
                            <Tippy placement="bottom" content="MailBox">
                                <button className={cx('action-btn', 'mailbox-btn')}>
                                    <MailBoxIcon />
                                    <p className={cx('number')}>20</p>
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button text href="https://github.com/" target="_blank">
                                Upload
                            </Button>
                            <Button primary>Login</Button>
                        </>
                    )}
                    <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                        {currentUser ? (
                            <Image className={cx('user-avatar')} src={tho7mau} alt="Nguyen Van A" />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
