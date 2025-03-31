import EmptyStar from '@/public/icons/empty_star.svg';
import FullStar from '@/public/icons/full_star.svg';
import { ScammerDemoProfileItemStarRate } from '../config/api/api.schemas';
import { Row } from './boxes';

export const StarsGroup = ({ rating }: { rating: ScammerDemoProfileItemStarRate }) => {
    const numericRating = parseInt(rating, 10);

    return (
        <Row gap={0.5}>
            {[...Array(5)].map((_, index) => {
                return index < numericRating ? <FullStar key={index} /> : <EmptyStar key={index} />;
            })}
        </Row>
    );
};
