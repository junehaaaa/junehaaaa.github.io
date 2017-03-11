// #input-todo 변수에 참조
	var input = query('#input-todo');
	// #input-todo 인풋 요소에 사용자가 콘텐츠를 입력하고
	var button = query('.add-todo__button');
	var todolist = query('.todolist');
	// .add-todo__button 버튼을 사용자가 클릭하면
	button.onclick = function() {
		// .todolist 내부에 li.todolist__item 코드가 동적으로 생성되어 추가 된다.
		var item = document.createElement('li');
		var item_text_node = document.createTextNode(input.value);

		item.setAttribute('class', 'todolist__item');
		todolist.appendChild(item);
		
		// 체크박스 생성
		var check_box = document.createElement('input');
		check_box.setAttribute('id', 'check-box');
		check_box.setAttribute('type', 'checkbox');

		// span 요소노드 생성
		var check_box_content = document.createElement('span');
		// input.value를 호출하는 텍스트노드 생성
		var check_box_text_node = document.createTextNode(input.value);
		check_box_content.setAttribute('class', 'input-text');
		check_box_content.appendChild(check_box_text_node);

		// 접근성을 위한 체크박스 라벨 생성
		var check_box_label = document.createElement('label');
		var check_box_text_node = document.createTextNode('체크박스');
		check_box_label.setAttribute('for', 'check-box');
		check_box_label.appendChild(check_box_text_node);
		
		item.appendChild(check_box);
		item.appendChild(check_box_label);
		item.appendChild(check_box_content);

		input.value = '';
		input.focus();


	}

			var checkbox = queryAll('#check-box');
		console.log(checkbox);
	// 라디오 버튼을 클릭하면 클래스가 활성화 된다.
	// 활성화된 클래스들을 지운다.
	// 
	// checkbox.onclick = function() {
	// 	item.setAttribute('class', 'check-list');
	// }










