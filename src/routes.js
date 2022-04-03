import loadable from "@loadable/component";

const Home = loadable(() => import('./components/home/Home'));
const Schedule = loadable(() => import('./components/schedule/Schedule'));
const Coaches = loadable(() => import('./components/coaches/Coaches'));
const About = loadable(() => import('./components/about/About'));
const Contacts = loadable(() => import('./components/contacts/Contacts'));

export const routes = [
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/schedule',
        element: <Schedule />
    },
    {
        path: '/coaches',
        element: <Coaches />
    },
    {
        path: '/about',
        element: <About />
    },
    {
        path: '/contacts',
        element: <Contacts />
    },
] 