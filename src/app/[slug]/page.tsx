import { PostService } from '@/services/PostService';

import { Post } from '@/components/Post';

type PostPageProps = {
  params: { slug: string };
};

export default function PostPage({ params }: PostPageProps) {
  const post = PostService.getBySlug(params.slug);

  //TODO: check if post exists / 404 page
  if (!post) {
    return null;
  }

  return <Post post={post} />;
}
