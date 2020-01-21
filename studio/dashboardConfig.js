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
                  buildHookId: '5e26f313af12677d19a0f36c',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-nvwd5sfd',
                  apiId: '8ea79700-163a-42d1-8a90-e5f13d027a84'
                },
                {
                  buildHookId: '5e26f31378f6758819122ca8',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-itzgcxga',
                  apiId: '92914708-2212-4fde-bc69-0e70a63d09b0'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/spettit/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-itzgcxga.netlify.com', category: 'apps' }
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
