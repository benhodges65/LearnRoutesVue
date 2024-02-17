import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import TeamsList from './components/teams/TeamsList.vue';
import UsersList from './components/users/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import TeamsFooter from './components/teams/TeamsFooter.vue';


const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/teams' },
    {
      name: 'teams',
      path: '/teams',
      components: {default: TeamsList, footer: TeamsFooter},
      children: [
        { name: 'team-members', path: ':teamId', component: TeamMembers },
      ],
    },
    { path: '/users', component: UsersList},
    { path: '/:notFound(.*)', redirect: '/teams' },
  ],
  linkActiveClass: 'active',
  scrollBehavior (to, from, savedPosition) {
    console.log(to, from, savedPosition);
    if(savedPosition){
        return savedPosition;
    }
  }
});

const app = createApp(App);

app.use(router);

app.mount('#app');
