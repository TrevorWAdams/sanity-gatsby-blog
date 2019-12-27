export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e06287cfc1c38c4318a9010',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-1h8zoxw5',
                  apiId: '4638700d-0cfc-40d7-a244-3b8abc63dd1f'
                },
                {
                  buildHookId: '5e06287cc926f7a1ad9a4704',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-enf5mopz',
                  apiId: '9f024786-8b5c-48d1-a14c-985090e84bf0'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/TrevorWAdams/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-enf5mopz.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
