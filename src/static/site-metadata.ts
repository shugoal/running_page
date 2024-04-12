interface ISiteMetadataResult {
  siteTitle: string;
  siteUrl: string;
  description: string;
  logo: string;
  navLinks: {
    name: string;
    url: string;
  }[];
}

const data: ISiteMetadataResult = {
  siteTitle: '我的运动',
  siteUrl: 'https://shurun.github.io',
  logo: 'https://img2.imgtp.com/2024/04/12/z9Yr3p57.jpg',
  description: 'Personal site and blog',
  navLinks: [
    {
      name: 'Blog',
      url: 'https://github.com/shugoal/gitblog',
    },
    {
      name: 'About',
      url: 'https://github.com/shugoal/shurun/blob/main/README-CN.md',
    },
  ],
};

export default data;
