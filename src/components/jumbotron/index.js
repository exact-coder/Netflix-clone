/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Container, Image, Inner, Item, Pane, SubTitle, Title } from './styles/jumbotron';

export default function Jumbotron({ children, direction = 'row', ...restProps }) {
    return (
        <div>
            <Item {...restProps}>
                <Inner direction={direction}>{children}</Inner>
            </Item>
        </div>
    );
}

Jumbotron.Pane = function JumbotronPane({ children, ...restProps }) {
    return <Pane {...restProps}>{children}</Pane>;
};
Jumbotron.Container = function JumbotronContainer({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>;
};
Jumbotron.Title = function JumbotronTitle({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>;
};
Jumbotron.SubTitle = function JumbotronSubTitle({ children, ...restProps }) {
    return <SubTitle {...restProps}>{children}</SubTitle>;
};
Jumbotron.Image = function JumbotronImage({ children, ...restProps }) {
    return <Image {...restProps} />;
};
