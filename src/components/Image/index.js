import { forwardRef } from 'react';
import styles from './Image.module.scss';
import classNames from 'classnames';

const cx = classNames.bind(styles);

const Image = forwardRef(({ src, className, ...props }, ref) => {
    console.log(src);
    return (
        <img
            className={cx('wrapper', className)}
            ref={ref}
            src={
                src ||
                'https://scontent.fvca1-4.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?stp=cp0_dst-png_p86x86&amp;_nc_cat=1&amp;ccb=1-7&amp;_nc_sid=dbb9e7&amp;_nc_ohc=HMknWRbJr0QAX_ynOVU&amp;_nc_ht=scontent.fvca1-4.fna&amp;oh=00_AfAKvpcPan8eCIvfIcgcOe1qlVTFTSlAAdniYkDZRexOnA&amp;oe=651E5DF8'
            }
            {...props}
        />
    );
});

export default Image;
