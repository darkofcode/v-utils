export const MetaViewPort = ({ themeColor }) => {
  return (
    <>
      <meta name="robots" content="index, follow"></meta>
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content={themeColor} />
    </>
  );
};

export const MetaTitle = ({ title, description, imgLinkSmall, imgLinkLarge, tweeterCreator }) => {
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />

      <meta property="og:title" content={title} />
      <meta property="og:image" content={imgLinkSmall} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:image" content={imgLinkLarge} />
      <meta name="twitter:creator" content={tweeterCreator} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </>
  );
};
