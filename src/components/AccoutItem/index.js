import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import Image from '../Image';
import srcImage from 'src/assets/images/967d1536e5ee20ed8112ee84f30a75d2~c5_100x100.jpeg';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function AccountItem({ data }) {
    return (
        <Link className={cx('wrapper')} to={`/@${data.nickname}`}>
            <Image src={data.avatar} alt="Hoa" className={cx('avatar')} />
            <div className={cx('info')}>
                <p className={cx('name')}>
                    <span>{data.first_name}</span>
                    {data.tick && <FontAwesomeIcon className={cx('check')} icon={faCircleCheck}></FontAwesomeIcon>}
                </p>
                <h4 className={cx('username')}>{data.nickname}</h4>
            </div>
        </Link>
    );
}

export default AccountItem;
