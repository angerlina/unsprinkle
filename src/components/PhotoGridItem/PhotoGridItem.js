import React from 'react';
import styled from 'styled-components/macro';
import {getSrcSets} from "../../utils";

const PhotoGridItem = ({id, src, alt, tags}) => {
    return (
        <article>
            <Anchor href={`/photos/${id}`}>
                <Picture src={src} alt={alt}/>
            </Anchor>
            <Tags>
                {tags.map((tag) => (
                    <Tag key={tag}>{tag}</Tag>
                ))}
            </Tags>
        </article>
    );
};

const Picture = ({src, alt}) => {
    const srcSets = getSrcSets(src);
    return <picture>
        {srcSets.map((srcSet, index) => <source key={index} srcSet={srcSet}/>)}
        <Image src={src} alt={alt}/></picture>;
}


const Image = styled.img`
  display: block;
  width: 100%;
  height: 300px;
  border-radius: 2px;
  margin-bottom: 8px;
  aspect-ratio: 1/1;
  object-fit: cover;
`;

const Anchor = styled.a`
  text-decoration: none;
  color: inherit;
  outline-offset: 4px;
`;

const Tags = styled.ul`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 2rem;
`;

const Tag = styled.li`
  padding: 4px 8px;
  background: var(--color-gray-300);
  font-size: 0.875rem;
  font-weight: 475;
  color: var(--color-gray-800);
  display: inline;
  &:not(&:last-of-type) {
    margin-right: 8px;
  }
`;

export default PhotoGridItem;
