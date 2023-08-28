import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import images from 'src/assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faSignIn, faSpinner, faXmarkCircle } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
import { useEffect, useState } from 'react';
import { Wrapper as PopperWrapper } from 'src/components/Popper';
import AccountItem from 'src/components/AccoutItem';
import Button from 'src/components/Button';

const cx = classNames.bind(styles);
console.log(images);
function Header() {
    const [searchResult, setSearchResult] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([]);
        }, 0);
    }, []);

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt="" />
                </div>
                <Tippy
                    interactive="true"
                    visible={searchResult.length > 0}
                    render={(attrs) => (
                        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                            <PopperWrapper>
                                <h4 className={cx('search-title')}>Accounts</h4>
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                            </PopperWrapper>
                        </div>
                    )}
                >
                    <div className={cx('search')}>
                        <input type="text" placeholder="Input acccount or videos" spellCheck="false" />
                        <button className={cx('clear')}>
                            <FontAwesomeIcon icon={faXmarkCircle} />
                        </button>
                        <button className={cx('spinner')}>
                            <FontAwesomeIcon icon={faSpinner} />
                        </button>

                        <button className={cx('search-btn')}>
                            <FontAwesomeIcon icon={faSearch} />
                        </button>
                    </div>
                </Tippy>
                <div className={cx('action')}>
                    <Button text href="https://github.com/" target="_blank">
                        Upload
                    </Button>
                    <Button primary leftIcon={<FontAwesomeIcon icon={faSignIn} />}>
                        Login
                    </Button>
                </div>
            </div>
        </header>
    );
}

export default Header;
