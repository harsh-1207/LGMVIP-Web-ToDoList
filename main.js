window.addEventListener('load', () => {
	const form = document.querySelector("#enterNewTask");
	const input = document.querySelector("#inputNewTask");
	const list_el = document.querySelector("#tasks");

	form.addEventListener('submit', (e) => {
		e.preventDefault();

		const title = input.value;

		const titleEle = document.createElement('div');
		titleEle.classList.add('title');

		const newTaskEleme = document.createElement('div');
		newTaskEleme.classList.add('content');

		titleEle.appendChild(newTaskEleme);

		const title_input = document.createElement('input');
		title_input.classList.add('text');
		title_input.type = 'text';
		title_input.value = title;
		title_input.setAttribute('readonly', 'readonly');

		newTaskEleme.appendChild(title_input);

		const title_action = document.createElement('div');
		title_action.classList.add('actions');
		
		// const task_edit_el = document.createElement('button');
		// task_edit_el.classList.add('edit');
		// task_edit_el.innerText = 'Edit';

		const title_delete = document.createElement('button');
		title_delete.classList.add('delete');
		title_delete.innerText = 'X';

		// title_action.appendChild(task_edit_el);
		title_action.appendChild(title_delete);

		titleEle.appendChild(title_action);

		list_el.appendChild(titleEle);

		input.value = '';

		// task_edit_el.addEventListener('click', (e) => {
		// 	if (task_edit_el.innerText.toLowerCase() == "edit") {
		// 		task_edit_el.innerText = "Save";
		// 		title_input.removeAttribute("readonly");
		// 		title_input.focus();
		// 	} else {
		// 		task_edit_el.innerText = "Edit";
		// 		title_input.setAttribute("readonly", "readonly");
		// 	}
		// });

		title_delete.addEventListener('click', (e) => {
			list_el.removeChild(titleEle);
		});
	});
});