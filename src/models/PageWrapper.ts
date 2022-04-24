export interface PageWrapperProps extends WrapperHeaderProps {
    children: JSX.Element | JSX.Element[];
}

export interface WrapperHeaderProps {
    hideSearchbar?: boolean;
    hideHeader?: boolean;
}
