import { faL, faSearch, faSpinner, faXmarkCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import HeadLessTippy from '@tippyjs/react/headless';
import search from 'src/apiServices/searchServices';
import { Wrapper as PopperWrapper } from 'src/components/Popper';
import AccountItem from 'src/components/AccoutItem';
import styles from './Search.module.scss';
import { useState, useEffect, useRef } from 'react';
import { useDebounce } from 'src/hook';

const cx = classNames.bind(styles);

function Search() {
    const [searchResult, setSearchResult] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [showResult, setShowResult] = useState(false);
    const [loading, setLoading] = useState(false);

    const debounce = useDebounce(searchValue, 500);

    const inputRef = useRef();

    useEffect(() => {
        if (!debounce.trim()) {
            setSearchResult([]);
            return;
        }
        setLoading(true);

        const fetchApi = async () => {
            setLoading(true);
            const result = await search(debounce);
            setSearchResult(result);
            setLoading(false);
        };

        fetchApi();
    }, [debounce]);

    const handleHideResult = () => {
        setShowResult(false);
    };

    const handleChange = (e) => {
        const searchValue = e.target.value;
        if (!searchValue.startsWith(' ')) setSearchValue(searchValue);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <HeadLessTippy
            interactive="true"
            visible={showResult && searchResult.length > 0}
            render={(attrs) => (
                <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        <h4 className={cx('search-title')}>Accounts</h4>
                        {!!searchResult &&
                            searchResult.map((result, index) => <AccountItem data={result} key={index} />)}
                    </PopperWrapper>
                </div>
            )}
            onClickOutside={handleHideResult}
        >
            <div className={cx('search')}>
                <input
                    type="text"
                    ref={inputRef}
                    value={searchValue}
                    placeholder="Input acccount or videos"
                    spellCheck="false"
                    onChange={handleChange}
                    onFocus={() => setShowResult(true)}
                />

                {!!searchValue && !loading && (
                    <button
                        className={cx('clear')}
                        onClick={() => {
                            setSearchValue('');
                            setSearchResult('');
                            inputRef.current.focus();
                        }}
                    >
                        <FontAwesomeIcon icon={faXmarkCircle} />
                    </button>
                )}
                {loading && (
                    <button className={cx('spinner')}>
                        <FontAwesomeIcon icon={faSpinner} />
                    </button>
                )}

                <button className={cx('search-btn')} onMouseDown={handleSubmit}>
                    <FontAwesomeIcon icon={faSearch} />
                </button>
            </div>
        </HeadLessTippy>
    );
}

export default Search;
