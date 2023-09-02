<template>
	<div>
		<form class="form-vue" @submit.prevent="submit">
			<input
				class="form-vue__input"
				type="text"
				placeholder="Введите название задачи"
				v-model="form.title"
			>
			<input
				class="form-vue__input"
				type="text"
				placeholder="Введите текст задачи"
				v-model="form.description"
			>
			<button class="form-vue__button" type="submit">Добавить задачу!</button>
		</form>
	</div>
</template>

<script setup>
// importing
import { reactive, defineEmits } from 'vue';

// variables
let form = reactive({
	title: '',
	description: '',
});

// emits
const emit = defineEmits(['setDo']);

// methods
let submit = () => {
	emit('setDo', { ...form, id: Date.now().toString() });
	form.title = '';
	form.description = '';
}

</script>

<style lang="scss" scoped>
	.form-vue
	{
		margin-bottom: 20px;
		max-width: 250px;
		display: flex;
		flex-direction: column;
		gap: 10px;
	}

	.form-vue__input
	{
		padding: 10px 20px;
		outline: none;
		border: 1px solid #313131;
	}
	.form-vue__button
	{
		cursor: pointer;
		padding: 10px 20px;
		background-color: blue;
		color: white;
		border: none;
		transition: 0.2s all ease;

		&:hover
		{
			opacity: .8;
		}
	}
</style>
