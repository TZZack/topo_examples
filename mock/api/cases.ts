export default [
  {
    url: '/api/cases',
    method: 'get',
    response: () => {
     return {
      success: true,
      data: [
        {
          id: 'p1',
          label: '场景案例',
          type: 1,
          children: [
            {
              id: 'p1-s1',
              label: 'ER图',
              type: 2,
              children: [
                {
                  id: 'p1-s1-c1',
                  label: '数字化-ER图',
                  type: 3,
                  imageSrc: 'xxx',
                  engineType: 'G6',
                },
                {
                  id: 'p1-s1-c2',
                  label: '数字化-血缘图',
                  type: 3,
                  imageSrc: 'xxx',
                  engineType: 'G6',
                }
              ]
            },
            {
              id: 'p1-s2',
              label: '批流',
              type: 2,
              children: [
                {
                  id: 'p1-s2-c1',
                  label: '大数据-批流画布',
                  type: 3,
                  imageSrc: 'xxx',
                  engineType: 'G6',
                },
                {
                  id: 'p1-s2-c2',
                  label: '大数据-数仓',
                  type: 3,
                  imageSrc: 'xxx',
                  engineType: 'G6',
                }
              ]
            }
          ]
        },
        {
          id: 'p2',
          label: '其它案例',
          type: 1,
          children: [
            {
              id: 'p2-s1',
              label: '关系图',
              type: 2,
              children: [
                {
                  id: 'p2-s1-c1',
                  label: 'XDR-狩猎关系溯源图',
                  type: 3,
                  imageSrc: 'xxx',
                  engineType: 'G6',
                },
                {
                  id: 'p2-s1-c2',
                  label: 'VDI-IOM-图谱分析',
                  type: 3,
                  imageSrc: 'xxx',
                  engineType: 'G6',
                }
              ]
            }
          ]
        }
      ],
      msg: '',
     }
    }
  }
]