export default {
  steps: [
    {
      name: 'backlog',
      limit: 0,
      requirements: [
        {
          name: 'title',
          type: 'text'
        },
        {
          name: 'description',
          type: 'textarea'
        }
      ]
    },
    {
      name: 'greenlit',
      limit: 6,
      requirements: [
        {
          name: 'client',
          type: 'text'
        },
        {
          name: 'participants',
          type: 'text'
        }
      ]
    },
    {
      name: 'production',
      limit: 4,
      requirements: [
        {
          name: 'specs provided',
          type: 'boolean'
        }
      ]
    },
    {
      name: 'test',
      limit: 0,
      requirements: [
        {
          name: 'internal aproval',
          type: 'boolean'
        },
        {
          name: 'client aproval',
          type: 'boolean'
        }
      ]
    },
    {
      name: 'approved',
      limit: 0,
      requirements: [
        {
          name: 'internal aproval',
          type: 'boolean'
        },
        {
          name: 'client aproval',
          type: 'boolean'
        }
      ]
    },
  ],
  task_types: {
    bug: {
      color: 'rgba(255,100,100,0.4)'
    },
    feature: {
      color: 'rgba(100,255,100,0.4)'
    },
    process: {
      color: 'rgba(100,100,255,0.4)'
    }
  },
  lanes: ['team1', 'team2']
}