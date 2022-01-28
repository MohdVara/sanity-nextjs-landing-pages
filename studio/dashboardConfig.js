export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '61f407375d675fe32078a172',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-85pxuimu',
                  apiId: '7747ab78-3bd4-4914-a0b9-d563363ae5a7'
                },
                {
                  buildHookId: '61f40737493787f2320129af',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-5etynaqo',
                  apiId: 'd110c120-c6fa-4669-a277-c992ff12cd8b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/MohdVara/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-5etynaqo.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
