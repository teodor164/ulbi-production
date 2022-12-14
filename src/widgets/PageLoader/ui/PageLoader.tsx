import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import './PageLoader.scss';
import { Loader } from 'shared/ui/Loader';

interface PageLoaderProps {
    className?: string
}

export const PageLoader: FC<PageLoaderProps> = ({ className }) => (
    <div className={classNames('page__loader', {}, [className])}>
        <Loader />
    </div>
);
