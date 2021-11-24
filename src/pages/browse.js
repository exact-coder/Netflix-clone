import React from 'react';
import selectionFilter from '../components/utils/selection-filter';
import BrowseContainer from '../containers/browse';
import { useContent } from '../hooks';

export default function Browse() {
    const { series } = useContent('series');
    const { films } = useContent('films');

    const slides = selectionFilter({ series, films });
    return (
        <div>
            <BrowseContainer slides={slides} />
        </div>
    );
}
