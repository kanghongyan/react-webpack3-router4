import Page1 from './page1'
import Page3 from './page3'
import Page3_1 from './page3/page3-1'

const routes = [
    { path: '/page1',
        component: Page1
    },
    { path: '/page3',
        component: Page3,
        routes: [
            { path: '/page3-1',
                component: Page3_1
            }
        ]
    }
];

export default routes
