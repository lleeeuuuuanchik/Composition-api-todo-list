<template>
	<div class="task-vue">
		<b class="task-vue__remove" @click="deleteTask">Удалить задачу</b>
		<span class="task-vue__title"><b>Название:</b> {{ task.title }}</span>
		<span class="task-vue__description"><b>Описание:</b> {{ task.description }}</span>
	</div>
</template>

<script setup>
// importing
import { defineProps, defineEmits } from 'vue';

// props
const props = defineProps(['task']);

// emits
const emit = defineEmits(['deleteTask']);

// methods
let deleteTask = () => {
	emit('deleteTask', props.task.id);
}

</script>

<style lang="scss" scoped>
.task-vue
{
	width: 400px;
	border: 1px solid blue;
	padding: 10px 20px;
	display: flex;
	flex-direction: column;
	gap: 10px;
}
.task-vue__remove
{
	cursor: pointer;
	font-size: 12px;
	color: red;
	opacity: 0.5;
	text-align: end;
	transition: 0.2s all ease;

	&:hover { opacity: 1; }
}
</style>
