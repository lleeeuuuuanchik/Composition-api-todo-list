import { createRouter, createWebHashHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import TodoView from '../views/todoView.vue';

const routes = [
	{
		path: '/',
		name: 'home',
		component: HomeView
	},
	{
		path: '/todo',
		name: 'todo',
		component: TodoView
	},
];

const router = createRouter({
	history: createWebHashHistory(),
	routes
});

export default router;
