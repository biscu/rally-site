import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '5ff'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '5ba'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', '466'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'c3c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '156'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '88c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '000'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', 'e21'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '245'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post', '89a'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post', '9ad'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post', 'e9f'),
    exact: true
  },
  {
    path: '/blog/rally-documentation',
    component: ComponentCreator('/blog/rally-documentation', '6ac'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '4c4'),
    exact: true
  },
  {
    path: '/blog/tags/app',
    component: ComponentCreator('/blog/tags/app', '4d0'),
    exact: true
  },
  {
    path: '/blog/tags/documentation',
    component: ComponentCreator('/blog/tags/documentation', 'a82'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus', 'f7d'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello', '695'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola', '8e5'),
    exact: true
  },
  {
    path: '/blog/tags/web',
    component: ComponentCreator('/blog/tags/web', '4d9'),
    exact: true
  },
  {
    path: '/app',
    component: ComponentCreator('/app', '1c5'),
    routes: [
      {
        path: '/app',
        component: ComponentCreator('/app', '615'),
        routes: [
          {
            path: '/app',
            component: ComponentCreator('/app', '246'),
            routes: [
              {
                path: '/app/Components/',
                component: ComponentCreator('/app/Components/', 'a8a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/app/Components/button',
                component: ComponentCreator('/app/Components/button', 'fbe'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/app/intro',
                component: ComponentCreator('/app/intro', '795'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/app/Patterns/',
                component: ComponentCreator('/app/Patterns/', '896'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/app/Patterns/navigation',
                component: ComponentCreator('/app/Patterns/navigation', '818'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/app/Tokens/',
                component: ComponentCreator('/app/Tokens/', '20d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/app/Tokens/colors',
                component: ComponentCreator('/app/Tokens/colors', 'eaf'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/app/Tokens/motion',
                component: ComponentCreator('/app/Tokens/motion', '658'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/app/Tokens/spacing',
                component: ComponentCreator('/app/Tokens/spacing', '393'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/web',
    component: ComponentCreator('/web', 'e42'),
    routes: [
      {
        path: '/web',
        component: ComponentCreator('/web', '67e'),
        routes: [
          {
            path: '/web',
            component: ComponentCreator('/web', 'e38'),
            routes: [
              {
                path: '/web/Components/',
                component: ComponentCreator('/web/Components/', '7a3'),
                exact: true,
                sidebar: "brandSidebars"
              },
              {
                path: '/web/Components/button',
                component: ComponentCreator('/web/Components/button', '866'),
                exact: true,
                sidebar: "brandSidebars"
              },
              {
                path: '/web/intro',
                component: ComponentCreator('/web/intro', '90f'),
                exact: true,
                sidebar: "brandSidebars"
              },
              {
                path: '/web/Patterns/',
                component: ComponentCreator('/web/Patterns/', 'a62'),
                exact: true,
                sidebar: "brandSidebars"
              },
              {
                path: '/web/Patterns/navigation',
                component: ComponentCreator('/web/Patterns/navigation', '0c7'),
                exact: true,
                sidebar: "brandSidebars"
              },
              {
                path: '/web/Tokens/',
                component: ComponentCreator('/web/Tokens/', '5c8'),
                exact: true,
                sidebar: "brandSidebars"
              },
              {
                path: '/web/Tokens/colors',
                component: ComponentCreator('/web/Tokens/colors', 'b41'),
                exact: true,
                sidebar: "brandSidebars"
              },
              {
                path: '/web/Tokens/motion',
                component: ComponentCreator('/web/Tokens/motion', '012'),
                exact: true,
                sidebar: "brandSidebars"
              },
              {
                path: '/web/Tokens/spacing',
                component: ComponentCreator('/web/Tokens/spacing', '9fc'),
                exact: true,
                sidebar: "brandSidebars"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '2e1'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
