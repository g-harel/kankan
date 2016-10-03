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
      color: 'red'
    }, 
    {
      name: 'feature',
      color: 'limegreen'
    }, 
    {
      name: 'process',
      color: 'blue'
    }
  ],
  lanes: ['team1', 'team2']
}