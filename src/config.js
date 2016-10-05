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
  task_types: [
    {
      name: 'bug',
      color: 'rgb(255,100,100)'
    }, 
    {
      name: 'feature',
      color: 'rgb(100,255,100)'
    }, 
    {
      name: 'process',
      color: 'rgb(100,100,255)'
    }
  ],
  lanes: ['team1', 'team2', 'team3']
}