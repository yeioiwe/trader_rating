import EmptyStar from '@/public/icons/empty_star.svg';
import FullStar from '@/public/icons/full_star.svg';
import { Row } from './boxes';

export const StarsGroup = ({ rating }: { rating: number }) => {
    const clampedRating = Math.min(Math.max(rating, 0), 5);

    return (
        <Row gap={0.5}>
            {[...Array(5)].map((_, index) => {
                return index < clampedRating ? <FullStar key={index} /> : <EmptyStar key={index} />;
            })}
        </Row>
    );
};
