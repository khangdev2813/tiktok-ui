import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                src="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/3a7b263d454d2ab77bb45c7ae5920f30~c5_100x100.jpeg?x-expires=1693468800&x-signature=g%2FoufMwHkcGOtfnYTiqgUmWxEeU%3D"
                alt="Hoa"
                className={cx('avatar')}
            />
            <div className={cx('info')}>
                <p className={cx('name')}>
                    <span>Phuong Hoa</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCircleCheck}></FontAwesomeIcon>
                </p>
                <h4 className={cx('username')}>Hoanassi</h4>
            </div>
        </div>
    );
}

export default AccountItem;
