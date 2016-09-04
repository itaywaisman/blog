import cuid from 'cuid';
import loremIpsum from 'lorem-ipsum';
import slug from 'limax';

import Post from './models/Post';

export default function dummyData() {
  Post.count().exec((err, count) => {
    if (count > 0) return;

    const numOfPosts = 5;
    for (let i = 0; i < numOfPosts; i++) {
      const postCuid = cuid();
      const title = loremIpsum({ count: 4, units: 'words' });
      const postSlug = slug(title);
      const description = loremIpsum({ count: 2, units: 'sentences' });
      const content = loremIpsum({ count: 5, units: 'paragraphs' });
      const publishDate = new Date();

      Post.create(new Post({
        cuid: postCuid,
        title,
        slug: postSlug,
        description,
        content,
        publishDate,
      }));
    }
  });
}
