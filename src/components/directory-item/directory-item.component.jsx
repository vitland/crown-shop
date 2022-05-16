import { useNavigate } from 'react-router-dom';
import {DirectoryItemContainer, BackgroundImage, Body}from'./directory-item.styles';

export const DirectoryItem = ({category}) => {
    const {title, imageUrl, route}= category
    const navigate = useNavigate()
    const onNavigateHandler = () => navigate(route)

  return (
    <DirectoryItemContainer onClick={onNavigateHandler}>
          <BackgroundImage imageUrl={imageUrl}>
          </BackgroundImage>
          <Body>
            <h2>{title}</h2>
            <p>Shop Now</p>
          </Body>
        </DirectoryItemContainer>
  )
}
