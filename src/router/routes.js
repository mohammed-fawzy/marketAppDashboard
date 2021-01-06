// Dynamic Loading Modules
import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);
// Views
const Dashboard = resolve => { require.ensure(['../views/Dashboard.vue'], ()=>{ resolve(require('../views/Dashboard.vue')); }); };

// UI Components
const Buttons = resolve => { require.ensure(['../components/Buttons.vue'], ()=>{ resolve(require('../components/Buttons.vue')); }); };
const Badges = resolve => { require.ensure(['../components/Badges.vue'], ()=>{ resolve(require('../components/Badges.vue')); }); };
const Alerts = resolve => { require.ensure(['../components/Alerts.vue'], ()=>{ resolve(require('../components/Alerts.vue')); }); };
const ProgressBars = resolve => { require.ensure(['../components/ProgressBars.vue'], ()=>{ resolve(require('../components/ProgressBars.vue')); }); };

const BasicForms = resolve => { require.ensure(['../components/forms/BasicForms.vue'], ()=>{ resolve(require('../components/forms/BasicForms.vue')); }); };
const Grids = resolve => { require.ensure(['../components/Grids.vue'], ()=>{ resolve(require('../components/Grids.vue')); }); };
const Widgets = resolve => { require.ensure(['../components/Widgets.vue'], ()=>{ resolve(require('../components/Widgets.vue')); }); };
const Typography = resolve => { require.ensure(['../components/Typography.vue'], ()=>{ resolve(require('../components/Typography.vue')); }); };
const Icons = resolve => { require.ensure(['../components/icons/Icons.vue'], ()=>{ resolve(require('../components/icons/Icons.vue')); }); };
const SetsList = resolve => { require.ensure(['../components/icons/SetsList.vue'], ()=>{ resolve(require('../components/icons/SetsList.vue')); }); };
const Sets = resolve => { require.ensure(['../components/icons/Set.vue'], ()=>{ resolve(require('../components/icons/Set.vue')); }); };
const Tables = resolve => { require.ensure(['../components/tables/Tables.vue'], ()=>{ resolve(require('../components/tables/Tables.vue')); }); };


//Charts
const ChartJS = resolve => { require.ensure(['../components/charts/ChartJS.vue'], ()=>{ resolve(require('../components/charts/ChartJS.vue')); }); };


//Maps
const GoogleMapsPage = resolve => { require.ensure(['../components/maps/google-maps/GoogleMapsPage.vue'], ()=>{ resolve(require('../components/maps/google-maps/GoogleMapsPage.vue')); }); };
const LeafletMapsPage = resolve => { require.ensure(['../components/maps/leaflet-maps/LeafletMapsPage.vue'], ()=>{ resolve(require('../components/maps/leaflet-maps/LeafletMapsPage.vue')); }); };


// // User Info
// const User = resolve => { require.ensure(['../layouts/User.vue'], ()=>{ resolve(require('../layouts/User.vue')); }); };

//Pages
const Login = resolve => { require.ensure(['../pages/login/Login.vue'], ()=>{ resolve(require('../pages/login/Login.vue')); }); };
const Managers = resolve => { require.ensure(['../pages/managers.vue'], ()=>{ resolve(require('../pages/managers.vue')); }); };
const Clients = resolve => { require.ensure(['../pages/clients.vue'], ()=>{ resolve(require('../pages/clients.vue')); }); };
const MainSections = resolve => { require.ensure(['../pages/main-sections.vue'], ()=>{ resolve(require('../pages/main-sections.vue')); }); };
const Subsection = resolve => { require.ensure(['../pages/subsection.vue'], ()=>{ resolve(require('../pages/subsection.vue')); }); };
const Products = resolve => { require.ensure(['../pages/products.vue'], ()=>{ resolve(require('../pages/products.vue')); }); };
const Orders = resolve => { require.ensure(['../pages/orders.vue'], ()=>{ resolve(require('../pages/orders.vue')); }); };
const Messages = resolve => { require.ensure(['../pages/messages.vue'], ()=>{ resolve(require('../pages/messages.vue')); }); };
const Banners = resolve => { require.ensure(['../pages/banners.vue'], ()=>{ resolve(require('../pages/banners.vue')); }); };
const MapPage = resolve => { require.ensure(['../pages/researcher-dashboard.vue'], ()=>{ resolve(require('../pages/researcher-dashboard.vue')); }); };
const SingleOrder = resolve => { require.ensure(['../pages/single-order.vue'], ()=>{ resolve(require('../pages/single-order.vue')); }); };


const Register = resolve => { require.ensure(['../pages/register/Register.vue'], ()=>{ resolve(require('../pages/register/Register.vue')); }); };
const Page404 = resolve => { require.ensure(['../pages/Page404.vue'], ()=>{ resolve(require('../pages/Page404.vue')); }); };
const Page500 = resolve => { require.ensure(['../pages/Page500.vue'], ()=>{ resolve(require('../pages/Page500.vue')); }); };


export const routes = [
    {
        path : '',
        name: 'login',
        components:{
            default: Login
        },
        meta:{
            guest: true
        }
    },
    {   path : '/dashboard',
        name:'dashboard',
        components:{
            default: Dashboard
        },
        meta:{
            requiresAuth: true,
        }
    },
    {
        path: '/auth/managers',
        component: Managers,
        name: 'managers',
        meta: {
            default: false,
            title: 'managers',
            requiresAuth: true,
        }
    },
    {
        path: '/auth/clients',
        component: Clients,
        name: 'clients',
        meta: {
            default: false,
            title: 'clients',
            requiresAuth: true,
        }
    },
    {
        path: '/auth/main-sections',
        component: MainSections,
        name: 'main-sections',
        meta: {
            default: false,
            title: 'main-sections',
            requiresAuth: true,
        }
    },
    {
        path: '/auth/subsection',
        component: Subsection,
        name: 'subsection',
        meta: {
            default: false,
            title: 'subsection',
            requiresAuth: true,
        }
    },
    {
        path: '/auth/products',
        component: Products,
        name: 'products',
        meta: {
            default: false,
            title: 'products',
            requiresAuth: true,
        }
    },
    {
        path: '/auth/orders',
        component: Orders,
        name: 'orders',
        meta: {
            default: false,
            title: 'orders',
            requiresAuth: true,
        }
    },

    {
        path: '/auth/messages',
        component: Messages,
        name: 'messages',
        meta: {
            default: false,
            title: 'messages',
            requiresAuth: true,
        }
    },
    {
        path: '/auth/banners',
        component: Banners,
        name: 'banners',
        meta: {
            default: false,
            title: 'banners',
            requiresAuth: true,
        },

    },
    {
        path: '/researcher-dashboard',
        component: MapPage,
        name: 'researcher-dashboard',
        meta: {
            default: false,
            title: 'researcher-dashboard',
            requiresAuth: true,
        },
    },
    {
        path: '/single-order',
        component: SingleOrder,
        name: 'single-order',
        meta: {
            default: false,
            title: 'single-order',
            requiresAuth: true,
        },
    },
    

    // // UI Components
    { path : '/components/buttons', name: 'buttons', component: Buttons },
    { path : '/components/badges', name: 'badges', component: Badges },
    { path : '/components/alerts', name: 'alerts', component: Alerts },
    { path : '/components/progressbars', name: 'progressbars', component: ProgressBars },
    { path : '/components/basic-form', name: 'basic-form', component: BasicForms },
    { path : '/components/grids', name: 'grids', component: Grids },
    { path : '/components/widgets', name: 'widgets', component: Widgets },
    { path : '/components/typography', name: 'typography', component: Typography },
    { path : '/components/tables', name: 'tables', component: Tables },

    {
        path : '/components/icons',
        component: Icons,
        children:[
            {
                path: '',
                component: SetsList,
                name: 'Icons'
            },
            {
                path: ':name',
                component: Sets,
                props: true,

            }
        ]
    },
    {
        path : '/components/charts',
        name: 'Charts',
        component: { render (c) { return c('router-view') }},
        children:[

            {
                path: '/components/chartjs',
                component: ChartJS,
                name: 'chart-js'
            }
        ]
    },
    {
        path : '/components/maps',
        name: 'Maps',
        component: { render (c) { return c('router-view') }},
        children:[
            {
                path: '/components/maps/google-maps',
                component: GoogleMapsPage,
                name: 'google-maps-page'
            },
            {
                path: '/components/maps/leaflet-maps',
                component: LeafletMapsPage,
                name: 'leaflet-maps-page'
            }
        ]
    },
    {
        path : '/components/auth',
        name: 'auth',
        component: { render (c) { return c('router-view') }},
        children:[
            // {
            //     path: '/auth/login',
            //     component: Login,
            //     name: 'login',
            //     meta: {
            //         default: false,
            //         title: 'Login',
            //         guest: true
            //     }
            // },
            {
                path: '/auth/register',
                component: Register,
                name: 'Register'
            },
            {
                path: '/auth/Page404',
                component: Page404,
                name: 'Page404'
            },
            {
                path: '/auth/Page500',
                component: Page500,
                name: 'Page500'
            }

        ]
    },

    //Redirect to Home
    { path: '/redirect-me', redirect: { name: 'home' } },

    // 404 redirect to home
    { path: '*', redirect: { name: 'Page404', component: Page404 }  }
];

