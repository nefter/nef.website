export const getGlobalData = () => {
  const name = process.env.BLOG_NAME
    ? decodeURI(process.env.BLOG_NAME)
    : 'Nef Rossano';
  const blogTitle = process.env.BLOG_TITLE
    ? decodeURI(process.env.BLOG_TITLE)
    : 'Full Stack Dev & Design';
  const footerText = process.env.BLOG_FOOTER_TEXT
    ? decodeURI(process.env.BLOG_FOOTER_TEXT)
    : 'All rights reserved. México 2024.';
  const theme = process.env.BLOG_THEME
    ? decodeURI(process.env.BLOG_THEME)
    : 'dark';

  return {
    name,
    blogTitle,
    footerText,
    theme
  };
};
