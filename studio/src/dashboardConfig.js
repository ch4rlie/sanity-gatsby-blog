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
                  buildHookId: '5fe377169a8898b1450909a2',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-9xg47v3m',
                  apiId: '75e909d2-4593-48d5-9693-70a88f38a012'
                },
                {
                  buildHookId: '5fe377166ef375f3a0be2779',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-tvf7eoq5',
                  apiId: '03b92406-0d59-4556-9504-f9d47ff8994b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ch4rlie/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-tvf7eoq5.netlify.app', category: 'apps' }
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
