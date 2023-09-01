import { FC, useState } from 'react'
import cls from './Card.module.scss'
import { ICard } from '../Cards/Cards'
import { faker } from '@faker-js/faker';
import Avatar from '../../assets/Img.png';

export const Card: FC<ICard> = (props) => {
    const {
        title,
        completed,
    } = props;
    const [checked, setChecked] = useState(completed);
    const startDate = faker.date.soon({ days: 1 });
    const endDate = faker.date.soon({ days: 10 });
    const description = faker.lorem.sentence();
    function formatDate(date: Date) {
        const options: Intl.DateTimeFormatOptions = {
          month: 'short',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
          hour12: true,
        };
        return new Intl.DateTimeFormat('en-US', options).format(date);
      }
    function chengeCheckbox() {
        setChecked(!checked);
    }
    return (
        <div className={cls.Card}>
                <h1 className={cls.ellipsisHeader} >
                    <input type="checkbox" checked={checked} onChange={chengeCheckbox} /> 
                    <span className={cls.ellipsisTitle}>
                    {title}
                    </span> 
                </h1>
            <div className={cls.dateContainer}>
                <p>{formatDate(startDate)}</p>
                <p>{formatDate(endDate)}</p>
            </div>
            <p className={cls.ellipsisText}>{description}</p>
            <div className={cls.footer}>
                <div className={cls.tags}>
                    <span className={cls.tag1}>Entity title</span> 
                    <span className={cls.tag2}>Front-end</span> 
                </div>
                <img src={Avatar} alt="Avatar" />
            </div>
        </div>
    )
}