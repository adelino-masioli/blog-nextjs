import Image from 'next/image';

import { formatDate } from '@/functions';

import { Mdx } from '@/components/Mdx';

import { BlogPost } from '@/models';

import { BackButton } from './components';
import * as S from './style';

type PostProps = {
  post: BlogPost;
};

export const Post = ({ post }: PostProps) => {
  const { body, frontmatter, readingTime } = post;
  const { title, description, date, tags, image } = frontmatter;

  const formattedDate = formatDate(date);
  return (
    <S.Container>
      <S.IconContainer>
        <BackButton />
      </S.IconContainer>
      <S.ImageContainer>
        <Image
          src={image}
          alt={title}
          fill
          priority
          className="rounded-xl object-cover object-center"
        />
      </S.ImageContainer>
      <S.Content>
        <S.DateContainer>
          <S.Date>
            {formattedDate} • {readingTime} minutos de leitura
          </S.Date>

          <S.Title>{title}</S.Title>
          <S.Description>{description}</S.Description>
        </S.DateContainer>

        <Mdx code={body.code} />
      </S.Content>
    </S.Container>
  );
};
