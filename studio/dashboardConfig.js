export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '637f034ca69c5529bf656523',
                  title: 'Sanity Studio',
                  name: 'nef-website-studio',
                  apiId: '02044c56-e1a0-4df4-ab6a-c88336286f38'
                },
                {
                  buildHookId: '637f034dc5e11b253366a5ff',
                  title: 'Blog Website',
                  name: 'nef-website',
                  apiId: '097d2082-83a6-42b6-8f22-224491121fce'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/nefter/nef.website',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://nef-website.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
