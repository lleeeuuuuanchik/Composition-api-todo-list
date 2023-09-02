<template>
	<div class="todo-list">
		<h1 class="todo-list__title">Самый лучший TODO LIST!</h1>
		<h2 class="todo-list__subtitle">Добавьте задачу -></h2>
		<formVue @setDo="setDo" />
		<h2 class="todo-list__subtitle">Список задач -></h2>
		<div v-if="tasks && tasks.length" class="todo-list__tasks-wr">
			<taskVue
				v-for="task in tasks"
				:key="task.id"
				:task="task"
				@deleteTask="deleteTask"
			/>
		</div>
		<div v-else>
			Задач нет!
		</div>
	</div>
</template>

<script setup>
// importing ->
import { ref } from 'vue';

// components ->
import formVue from '@/components/formVue.vue';
import taskVue from '@/components/taskVue.vue';

// variables ->
let tasks = ref([]);

// methods ->
let setDo = (value) => {
	tasks.value.push(value);
}
let deleteTask = (taskId) => {
	const searchedTaskId = tasks.value.findIndex(el => el.id === taskId);
	tasks.value.splice(searchedTaskId, 1);
}
</script>

<style lang="scss">
	.todo-list__title
	{
		margin-bottom: 20px;
		color: blue;
		font-size: 34px;
		font-weight: bold;
	}
	.todo-list__subtitle
	{
		margin-bottom: 10px;
		color: blue;
		font-size: 20px;
		font-weight: 500;
	}
	.todo-list__tasks-wr
	{
		margin-bottom: 20px;
		display: flex;
		gap: 10px;
		flex-wrap: wrap;
	}
</style>
