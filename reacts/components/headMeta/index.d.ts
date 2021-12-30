import React from "react";
type tMetaViewPort = {
  themeColor: string;
};

type tMetaTitle = {
  title: string;
  description: string;
  imgLinkSmall: string;
  imgLinkLarge: string;
  tweeterCreator: string;
};

declare const MetaViewPort: React.ComponentType<tMetaViewPort>;
declare const MetaTitle: React.ComponentType<tMetaTitle>;

export { MetaViewPort, MetaTitle };
