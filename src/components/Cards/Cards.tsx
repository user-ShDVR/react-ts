import { FC } from 'react'
import cls from './Cards.module.scss'
import { Card } from '../Card/Card';

export interface ICard {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

export interface CardsProps {
    cards: ICard[];
}

export const Cards: FC<CardsProps> = ({ cards }) => {
    return (
        <div className={cls.Cards}>
            {cards.map((card: ICard) => {
                return (
                    <div className={cls.cardContainer}>
                        <Card
                            key={card.id}
                            id={card.id}
                            userId={card.userId}
                            title={card.title}
                            completed={card.completed}
                        />
                    </div>
                )
            })}
        </div>
    )
}