var button = document.getElementById('aut1')
var button1 = document.getElementById('in1')
var button2 = document.getElementById('person')
var voiti1 = document.getElementById('voiti1')
var voiti2 = document.getElementById('voiti2')
var buttt = document.querySelectorAll('#getCourse')
var buttt1 = document.querySelectorAll('#inputPassword')



var role = 'student';
var button122 = document.getElementById('myCourses')

button122.addEventListener('click', function () {
	var button = document.getElementById('conterrr')
	

	// Hide the button by setting its display property to "none"

	if(role === 'prepod')
	{
		button.style.display = 'block'
	}
	

})

voiti1.addEventListener('click', function () {
	var container = document.querySelector('.container1')
	if (container) {
		container.style.display = 'none'
	}
	var hz = document.getElementById('coursesContainer')
	if (hz) {
		hz.style.display = 'block'
	}

	var username = document.getElementById('username1').value
	var password = document.getElementById('password1').value

	// Создаем объект для данных, которые мы хотим отправить на сервер
	var data = {
		username: username,
		password: password,
	}

	// Отправляем POST-запрос на сервер
	fetch('http://localhost:7777/user/login', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(data),
	})
		.then(response => {
			if (response.ok) {
				// Обрабатываем успешный ответ
				console.log('Успешно вошли в систему')
				// Пример ответа от сервера (замените этим ваш реальный ответ)

				// Преобразование JSON строки в объект JavaScript
				const data = JSON.parse(respone);

				// Теперь вы можете работать с данными как с объектом JavaScript
				role = data.role
				console.log(data.fullname); // Выведет: John
				console.log(data.role); // Выведет: 30
				console.log(data.message); // Выведет: New York

			} else {
				// Обрабатываем ошибку
				console.error('Ошибка входа:', response.statusText)
			}
		})
		.catch(error => {
			// Обрабатываем ошибку сети или другие ошибки
			console.error('Произошла ошибка:', error)
		})


		if(role === 'prepod')
		{
			buttt.forEach(function(element) {
				// Do something with each element
				element.style.display = 'none'
			});
			buttt1.forEach(function(element) {
				// Do something with each element
				element.style.display = 'none'
			});
		}
})

voiti2.addEventListener('click', function () {
	
	var container = document.querySelector('.container1')
	if (container) {
		container.style.display = 'none'
	}

	var selectElement = document.getElementById('mySelect');
	var analyzeButton = document.getElementById('analyzeButton');

	var selectedOption = selectElement.options[selectElement.selectedIndex];
    
    // Access the value and text content of the selected option
    var selectedValue = selectedOption.value;

	console.log(selectedValue)
	if(selectedValue === 'option2')
	{
		buttt.forEach(function(element) {
			// Do something with each element
			element.style.display = 'none'
		});
		buttt1.forEach(function(element) {
			// Do something with each element
			element.style.display = 'none'
		});

		role = 'prepod'	
	}
	else
		role = 'student'

})

function hideButton() {
	// Get a reference to the button element
	var button = document.getElementById('aut1')
	var button1 = document.getElementById('in1')
	var button2 = document.getElementById('person')

	// Hide the button by setting its display property to "none"
	button.style.display = 'none'
	button1.style.display = 'none'
	button2.style.display = 'block'
}


var button2 = document.getElementById('outButton')
button2.addEventListener('click', function () {


	var button123456 = document.getElementById('conterrr')
	button123456.style.display = 'none'
	// Custom JavaScript code to execute when the button is clicked
	// You can perform any desired actions here
	var hz = document.getElementById('coursesContainer')
	var button = document.getElementById('aut1')
	var button1 = document.getElementById('in1')
	var button3 = document.getElementById('person')
	// Hide the button by setting its display property to "none"
	button.style.display = 'block'
	button1.style.display = 'block'
	button3.style.display = 'none'
	hz.style.display = 'none'
	

	// Hide the button by setting its display property to "none"

	role = 'student'
})

/*-----*/

var mycourses = document.getElementById('myCourses')
mycourses.addEventListener('click', function () {
	// Custom JavaScript code to execute when the button is clicked
	// You can perform any desired actions here
	var hz = document.getElementById('coursesContainer')
	hz.style.display = 'none'
	var myc = document.getElementById('myCoursesContainer')
	myc.style.display = 'block'
	var container1 = document.querySelector('.container1')
	container1.style.display = 'none'
})

var allcourses = document.getElementById('allCourses')
allcourses.addEventListener('click', function () {
	// Custom JavaScript code to execute when the button is clicked
	// You can perform any desired actions here
	var hz = document.getElementById('coursesContainer')
	hz.style.display = 'block'
	var myc = document.getElementById('myCoursesContainer')
	myc.style.display = 'none'
	var container1 = document.querySelector('.container1')
	container1.style.display = 'none'
})

function outButton() {
	// Get a reference to the button element
	var button = document.getElementById('aut1')
	var button1 = document.getElementById('in1')
	var button2 = document.getElementById('person')
	// Hide the button by setting its display property to "none"
	button.style.display = 'block'
	button1.style.display = 'block'
	button2.style.display = 'none'
}

document.addEventListener('DOMContentLoaded', function () {
	var dropdownItem = document.querySelector('.dropdown-item')
	dropdownItem.addEventListener('click', function () {
		var container = document.querySelector('.container')
		container.style.display = 'block' // Показать содержимое
	})
})

var addToMyCoursesButtons = document.querySelectorAll('.add-to-my-courses')

// Добавляем обработчик события нажатия на каждую кнопку
addToMyCoursesButtons.forEach(function (button) {
	button.addEventListener('click', function () {
		// Находим родительский элемент курса, который содержит информацию о курсе
		var courseCard = this.closest('.course-card')

		// Создаем копию элемента курса
		var clonedCourse = courseCard.cloneNode(true)

		// Добавляем класс course-card к скопированному элементу курса
		clonedCourse.classList.add('course-card')

		// Находим контейнер "Мои курсы"
		var myCoursesContainer = document.getElementById('myCoursesContainer')

		// Добавляем скопированный курс в контейнер "Мои курсы"
		myCoursesContainer.appendChild(clonedCourse)

		// Устанавливаем атрибут disabled для кнопки
		this.disabled = true

		this.textContent = 'Вы уже записаны'

		var clonedButton = clonedCourse.querySelector('.add-to-my-courses')
		if (clonedButton) {
			clonedButton.remove()
		}

		var clonedPasswordInput = clonedCourse.querySelector('.password-input')
		if (clonedPasswordInput) {
			clonedPasswordInput.remove()
		}

		var leaveCourseButton = document.createElement('button')
		leaveCourseButton.textContent = 'Покинуть курс'
		leaveCourseButton.classList.add('leave-course-button')
		leaveCourseButton.addEventListener('click', function () {
			// Удаляем карточку курса из контейнера "Мои курсы"
			clonedCourse.remove()

			// Восстанавливаем активность кнопки "Записаться на курс"
			button.disabled = false
			button.textContent = 'Записаться на курс'
		})
		clonedCourse.querySelector('.course-links').appendChild(leaveCourseButton)
	})
})

var courseSearchForm = document.getElementById('courseSearchForm')
var courseSearchInput = document.getElementById('courseSearchInput')

// Добавляем обработчик события для формы поиска
courseSearchForm.addEventListener('submit', function (event) {
	// Предотвращаем отправку формы по умолчанию
	event.preventDefault()

	// Получаем введенный пользователем текст из поля ввода
	var searchText = courseSearchInput.value.toLowerCase().trim()

	// Находим все карточки курсов
	var courseCards = document.querySelectorAll('#coursesContainer .course-card')
	var mycourseCards = document.querySelectorAll('#myCoursesContainer .course-card')

	// Проходим по каждой карточке курса
	courseCards.forEach(function (courseCard) {
		// Находим элемент с названием курса в текущей карточке
		var courseTitle = courseCard.querySelector('h4 a')

		// Проверяем, содержит ли название курса введенный текст
		if (courseTitle.textContent.toLowerCase().includes(searchText)) {
			// Если содержит, показываем карточку курса
			courseCard.style.display = 'block'
		} else {
			// Если не содержит, скрываем карточку курса
			courseCard.style.display = 'none'
		}
	})
	mycourseCards.forEach(function (courseCard) {
		// Находим элемент с названием курса в текущей карточке
		var courseTitle = courseCard.querySelector('h4 a')

		// Проверяем, содержит ли название курса введенный текст
		if (courseTitle.textContent.toLowerCase().includes(searchText)) {
			// Если содержит, показываем карточку курса
			courseCard.style.display = 'block'
		} else {
			// Если не содержит, скрываем карточку курса
			courseCard.style.display = 'none'
		}
	})
})

document.addEventListener('DOMContentLoaded', function () {
	// Находим ссылку SkufCourse
	var skufCourseLink = document.querySelector('.navbar-brand')

	// Находим контейнер container1
	var container1 = document.querySelector('.container1')

	// Добавляем обработчик события для ссылки SkufCourse
	skufCourseLink.addEventListener('click', function (event) {
		// Предотвращаем переход по ссылке
		event.preventDefault()
		// Custom JavaScript code to execute when the button is clicked
		// You can perform any desired actions here
		var hz = document.getElementById('coursesContainer')
		hz.style.display = 'none'
		var myc = document.getElementById('myCoursesContainer')
		myc.style.display = 'none'

		// Переключаем отображение контейнера container1
		if (container1.style.display === 'none') {
			container1.style.display = 'block'
		}
	})
})


var username = document.getElementById('username1').value
var password = document.getElementById('password1').value

// Создаем объект для данных, которые мы хотим отправить на сервер
var data = {
	username: username,
	password: password,
}




//-----------------------------------------------------
// Добавление курсов

document.addEventListener('DOMContentLoaded', function () {
	// список все курсы
	const completedTaskList = document.getElementById('completedTaskList')

	// кнопка создать!!! курс! а не добавить
	const addTaskBtn = document.getElementById('addTaskBtn')

	// Получаем список добавленных курсов
	const taskList = document.getElementById('taskList')

	function addTask(subjectText, teacherText, groupText, descriptionText, passwordText) {
		const li = document.createElement('li')

		li.classList.add('task-container')

		li.innerHTML = `
        <p>Дисциплина: <span class="subject-text">${subjectText}</span></p>
        <p>Преподаватель: <span class="teacher-text">${teacherText}</span></p>
        <p>Группа: <span class="group-text">${groupText}</span></p>
        <p>Ваш репозиторий: <span class="description-text">${descriptionText}</span></p>
        <p>Пароль: <span class="password-text">${'*'.repeat(passwordText.length)}</span></p>

        <button class="edit-btn">Редактировать</button>
        <button class="delete-btn">Удалить</button>
        <button class="save-btn">Добавить в мои курсы</button>
    `

		// Пример добавления стилей
		li.style.backgroundColor = 'white' // Задаем фоновый цвет
		li.style.borderRadius = '10px' // Добавляем закругление
		li.style.padding = '10px' // Добавляем отступы
		li.style.marginBottom = '20px'

		const clonedLi = li.cloneNode(true) // Создаем копию элемента для второго списка
		li.querySelector('.save-btn').remove() // Удаляем кнопку "Сохранить" из копии

		clonedLi.querySelector('.edit-btn').disabled = true // Делаем кнопку редактирования недоступной для li
		clonedLi.querySelector('.delete-btn').disabled = true // Делаем кнопку удаления недоступной для li

		completedTaskList.appendChild(li)
		taskList.appendChild(clonedLi)
	}

	// Обработчик клика по кнопке "Добавить задачу"
	addTaskBtn.addEventListener('click', function () {
		const subjectInput = document.getElementById('subjectInput')
		const subjectText = subjectInput.value.trim()

		const teacherInput = document.getElementById('teacherInput')
		const teacherText = teacherInput.value.trim()

		const groupInput = document.getElementById('groupInput')
		const groupText = groupInput.value.trim()

		const descriptionInput = document.getElementById('descriptionInput')
		const descriptionText = descriptionInput.value.trim()

		const passwordInput = document.getElementById('passwordInput')
		const passwordText = passwordInput.value.trim()

		//добавь остальные !== '' если  - обязательное
		if (subjectText !== '' && teacherText !== '') {
			addTask(subjectText, teacherText, groupText, descriptionText, passwordText)

			subjectInput.value = ''
			teacherInput.value = ''
			groupInput.value = ''
			passwordInput.value = ''
			descriptionText.value = ''
		}
	})

	// Обработчик клика по кнопке "Редактировать"
	completedTaskList.addEventListener('click', function (e) {
		if (e.target && e.target.classList.contains('edit-btn')) {
			const taskContainer = e.target.closest('.task-container')

			if (taskContainer) {
				const subjectTextElement = taskContainer.querySelector('.subject-text')
				const teacherTextElement = taskContainer.querySelector('.teacher-text')
				const groupTextElement = taskContainer.querySelector('.group-text')
				const descriptionTextElement = taskContainer.querySelector('.description-text')
				const passwordTextElement = taskContainer.querySelector('.password-text')

				const newSubjectText = prompt('Введите новую дисциплину:', subjectTextElement.textContent)
				const newTeacherText = prompt('Введите нового преподавателя:', teacherTextElement.textContent)
				const newGroupText = prompt('Введите новую группу:', groupTextElement.textContent)
				const newDescriptionText = prompt('Введите новый репозиторий:', descriptionTextElement.textContent)
				const newPasswordText = prompt('Введите новый пароль:', passwordTextElement.textContent)

				if (newSubjectText !== null && newTeacherText !== null && newGroupText !== null) {
					subjectTextElement.textContent = newSubjectText
					teacherTextElement.textContent = newTeacherText
					groupTextElement.textContent = newGroupText
					descriptionTextElement.textContent = newDescriptionText
					passwordTextElement.textContent = '*'.repeat(newPasswordText.length)
				}
			}
		}
	})

	// Обработчик клика по кнопке "Удалить"
	completedTaskList.addEventListener('click', function (e) {
		if (e.target && e.target.classList.contains('delete-btn')) {
			const li = e.target.parentNode
			li.remove()
		}
	})

	taskList.addEventListener('click', function (e) {
		if (e.target && e.target.classList.contains('save-btn')) {
			const li = e.target.parentNode
			const clonedLi = li.cloneNode(true)
			clonedLi.querySelector('.save-btn').remove() // Удаляем кнопку "Сохранить" из копии
			clonedLi.querySelector('.edit-btn').disabled = false // Делаем кнопку редактирования недоступной для li
			clonedLi.querySelector('.delete-btn').disabled = false // Делаем кнопку удаления недоступной для li
			completedTaskList.appendChild(clonedLi)
		}
	})
})