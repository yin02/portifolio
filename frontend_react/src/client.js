import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: '8jsty7x6',
  dataset: 'production',
  apiVersion: '2022-02-01',
  useCdn: true,
  token: 'skBQxmaD93waaozKZYZc4fiZuev1jZrKVul0mC82xHI3jmufJX9PU4Q9TvqK9qZmaz3nh96y1P5wDQN5oUGEYonw3QtovRix4ubQf9SnNVPvU1GP6EavYdjwvTZ4awwxTBSlzGuu8FX8F1yoXoMpTO6jsWOlZXBtUJrzdl2XFrwxmtb02k9p',
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
