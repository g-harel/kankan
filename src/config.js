export default {
  steps: [
    {
      name: 'backlog',
      limit: 0,
      requirements: {
        title: 'string',
        descrition: 'string'
      }
    },
    {
      name: 'greenlit',
      limit: 6,
      requirements: {
        client: 'string',
        participants: 'string'
      }
    },
    {
      name: 'production',
      limit: 4,
      requirements: {
        'specs provided': 'boolean'
      }
    },
    {
      name: 'test',
      limit: 0,
      requirements: {
        'internal aproval': 'boolean',
        'client aproval': 'boolean'
      }
    },
    {
      name: 'approved',
      limit: 0,
      requirements: {
        'internal aproval': 'boolean',
        'client aproval': 'boolean'
      }
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