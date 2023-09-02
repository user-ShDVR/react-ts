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
                    <label className={cls.Card__title}>
                    <input className={cls.Card__check} type="checkbox" checked={checked} onChange={chengeCheckbox}/>
                    <span className={cls.Card__check}></span>
                    {title}
                </label>
            <div className={cls.Card__dates}>
                <p className={cls.Card__date}>{formatDate(startDate)}</p>
                <p className={cls.Card__date}>{formatDate(endDate)}</p>
            </div>
            <p className={cls.Card__description}>{description}</p>
            <div className={cls.Card__footer}>
                    <ul className={cls.Card__tags}>
                        <li className={cls.Card__tag}>{faker.lorem.word()}</li>
                        <li className={cls.Card__tag}>{faker.lorem.word()}</li>
                    </ul>
                    <img src={Avatar} alt="avatar" className={cls.Card__avatar}/>
                </div>
        </div>
    )
}