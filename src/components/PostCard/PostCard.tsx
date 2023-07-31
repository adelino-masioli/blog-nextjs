import Image from 'next/image';

import { formatDate } from '@/functions';

import { Tag } from '@/components/Tag';

import { BlogPost } from '@/models';

import * as S from './styles';

type PostCardProps = {
  post: BlogPost;
};

export const PostCard = ({ post }: PostCardProps) => {
  const { frontmatter, readingTime, slug } = post;
  const { title, date, description, image, tags } = frontmatter;

  const formattedDate = formatDate(date);

  return (
    <>
      <S.LinkContainer href={slug}>
        <S.ImageContainer>
          <Image
            src={image}
            fill
            alt="title"
            priority
            className="rounded-xl object-cover object-center"
          />
        </S.ImageContainer>

        <S.Content>
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
