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
  siteTitle: '桐宇的运动',
  siteUrl: 'https://shurun.github.io',
  logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTtc69JxHNcmN1ETpMUX4dozAgAN6iPjWalQ&usqp=CAU',
  description: 'Personal site and blog',
  navLinks: [
    {
      name: 'Blog',
      url: 'https://github.com/shugoal/gitblog',
    },
    {
      name: 'About',
      url: 'https://github.com/shugoal/running_page/blob/main/README-CN.md',
    },
  ],
};

export default data;
