import { FC } from 'react'
import cls from './InfoBar.module.scss'

interface InfoBarProps {
    cardsValue: number;
}

export const InfoBar: FC<InfoBarProps> = ({ cardsValue }) => {
    return (
        <div className={cls.InfoBar}>
            <h1>Today</h1>
            <div className={cls.buttons}>
                <button>+</button>
                <p>{ cardsValue }</p>
            </div>
        </div>
    )
}