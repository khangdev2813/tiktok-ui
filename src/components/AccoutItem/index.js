import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/967d1536e5ee20ed8112ee84f30a75d2~c5_100x100.jpeg?x-expires=1693040400&x-signature=FAuN6X0teF9kGXxUkEmkRk%2BAUcY%3D"
                alt="Hoa"
                className={cx('avatar')}
            />
            <div className={cx('info')}>
                <p className={cx('name')}>
                    <span>Dao Le Phuong Hoa</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCircleCheck}></FontAwesomeIcon>
                </p>
                <h4 className={cx('username')}>Hoanassi</h4>
            </div>
        </div>
    );
}

export default AccountItem;
