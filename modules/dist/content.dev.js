"use strict";

var content = [{
  'id': 0,
  'project-name': 'It is a long established fact that a reader will be distracted by the readable',
  'project-notes': '',
  'status': 'idea',
  'progress': 0,
  'eta': new Date(),
  'result': "https://petovera.lpages.co/childcare-blueprint/",
  'completedAt': new Date(),
  'summary': [],
  'steps': {
    "revisions": [[]]
  }
}, {
  'id': 1,
  'project-name': 'This is the second project and it should have description',
  'project-notes': 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable.If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator.',
  'status': 'idea',
  'progress': 0,
  'eta': new Date(),
  'result': "https://petovera.lpages.co/childcare-blueprint/",
  'completedAt': new Date(),
  'summary': [],
  'steps': {
    "revisions": [[]]
  }
}, {
  'id': 2,
  'project-name': 'This is the third project and it should be set to made and have a progress of 10%',
  'project-notes': 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable.If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator.',
  'status': 'made',
  'progress': 10,
  'eta': new Date(),
  'result': "https://petovera.lpages.co/childcare-blueprint/",
  'completedAt': new Date(),
  'summary': [],
  'steps': {
    "revisions": [[]]
  }
}, {
  'id': 3,
  'project-name': 'This is the forth project and it should be set to made and have a progress of 50% with summary and revisions',
  'project-notes': 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable.If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator.',
  'status': 'made',
  'progress': 50,
  'eta': new Date(),
  'result': "https://petovera.lpages.co/childcare-blueprint/",
  'completedAt': new Date(),
  'summary': [{
    'description': {
      'content': 'Designer submits the Lead Magnet Landing Page Design',
      'note': ''
    },
    'assignee': 'Pavlo Bendus',
    'due-date': new Date('2020/01/02'),
    'completed-date': new Date('2020/01/02')
  }, {
    'description': {
      'content': 'Quality Specialist reviews and offers suggestions and edits',
      'note': ''
    },
    'assignee': 'Max Tychkivskyi',
    'due-date': new Date('2020/01/02'),
    'completed-date': new Date('2020/01/02')
  }, {
    'description': {
      'content': 'Designer revises the design',
      'note': 'Use the same background for the Headline and Pricing Options in the Pricing section.'
    },
    'assignee': 'Mariana L',
    'due-date': new Date('2020/01/02'),
    'completed-date': new Date('2020/01/02')
  }, {
    'description': {
      'content': 'Designer submits the Lead Magnet Landing Page Design',
      'note': ''
    },
    'assignee': 'Alex Thompson',
    'due-date': new Date('2020/01/02'),
    'completed-date': ''
  }, {
    'description': {
      'content': 'Quality Specialist reviews and offers suggestions and edits',
      'note': ''
    },
    'assignee': 'Claire Coons',
    'due-date': new Date('2020/01/02'),
    'completed-date': ''
  }],
  'steps': {
    "revisions": [[{
      'revision': 'Designer submits the Lead Magnet Landing Page Design  @Max Tychkivskyi',
      'status': true
    }, {
      'revision': 'Quality Specialist reviews and offers suggestions and edits  @Mariana L',
      'status': true
    }, {
      'revision': 'Designer revises the design  @Max Tychkivskyi',
      'status': false
    }], [{
      'revision': 'Designer submits the Lead Magnet Landing Page Design  @Max Tychkivskyi',
      'status': false
    }, {
      'revision': 'Quality Specialist reviews and offers suggestions and edits  @Mariana L',
      'status': false
    }]]
  }
}, {
  'id': 4,
  'project-name': 'This is the forth project and it should be set to real with progress of 100%',
  'project-notes': 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable.If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator.',
  'status': 'real',
  'progress': 100,
  'eta': new Date(),
  'result': "https://petovera.lpages.co/childcare-blueprint/",
  'completedAt': new Date(),
  'summary': [{
    'description': {
      'content': 'Designer submits the Lead Magnet Landing Page Design',
      'note': ''
    },
    'assignee': 'Pavlo Bendus',
    'due-date': new Date('2020/01/02'),
    'completed-date': new Date('2020/01/02')
  }, {
    'description': {
      'content': 'Quality Specialist reviews and offers suggestions and edits',
      'note': ''
    },
    'assignee': 'Max Tychkivskyi',
    'due-date': new Date('2020/01/02'),
    'completed-date': new Date('2020/01/02')
  }, {
    'description': {
      'content': 'Designer revises the design',
      'note': 'Use the same background for the Headline and Pricing Options in the Pricing section.'
    },
    'assignee': 'Mariana L',
    'due-date': new Date('2020/01/02'),
    'completed-date': new Date('2020/01/02')
  }, {
    'description': {
      'content': 'Designer submits the Lead Magnet Landing Page Design',
      'note': ''
    },
    'assignee': 'Alex Thompson',
    'due-date': new Date('2020/01/02'),
    'completed-date': new Date('2020/01/02')
  }, {
    'description': {
      'content': 'Quality Specialist reviews and offers suggestions and edits',
      'note': ''
    },
    'assignee': 'Claire Coons',
    'due-date': new Date('2020/01/02'),
    'completed-date': new Date('2020/01/02')
  }],
  'steps': {
    "revisions": [[{
      'revision': 'Designer submits the Lead Magnet Landing Page Design  @Max Tychkivskyi',
      'status': true
    }, {
      'revision': 'Quality Specialist reviews and offers suggestions and edits  @Mariana L',
      'status': true
    }, {
      'revision': 'Designer revises the design  @Max Tychkivskyi',
      'status': true
    }], [{
      'revision': 'Designer submits the Lead Magnet Landing Page Design  @Max Tychkivskyi',
      'status': true
    }, {
      'revision': 'Quality Specialist reviews and offers suggestions and edits  @Mariana L',
      'status': true
    }]]
  }
}];