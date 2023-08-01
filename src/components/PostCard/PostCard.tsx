import Image from 'next/image';

import { formatDate } from '@/functions';

import { Tag } from '@/components/Tag';

import { BlogPost } from '@/models';

import * as S from './styles';

export type PostCardProps = {
  post: BlogPost;
  isMain?: boolean;
};

export const PostCard = ({ post, isMain = false }: PostCardProps) => {
  const { frontmatter, readingTime, slug } = post;
  const { title, date, description, image, tags } = frontmatter;

  const formattedDate = formatDate(date);

  return (
    <>
      <S.LinkContainer href={slug} $isMain={isMain}>
        <S.ImageContainer className={`${isMain && 'lg:mr-3'}`}>
          <Image
            src={image}
            fill
            alt="title"
            priority
            className="rounded-xl object-cover object-center"
          />
        </S.ImageContainer>

        <S.Content className={`${isMain && 'lg:pt-3'}`}>
          <S.TagsContainer>
            {tags?.map((tag) => (
              <Tag key={tag} size="xs">
                {tag}
              </Tag>
            ))}
          </S.TagsContainer>

          <S.Time>
            {formattedDate} • {readingTime} minutos de leitura
          </S.Time>

          <S.Title>{title}</S.Title>

          <S.Description>{description}</S.Description>
        </S.Content>
      </S.LinkContainer>
    </>
  );
};
