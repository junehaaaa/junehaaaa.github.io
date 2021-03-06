/*! helper.js © yamoo9.net, 2017 */

/**
 *  querySelector 헬퍼 함수
 *  @param    {String}      selector_str
 *  @return   {HTMLElement} 문서 요소노드 반환
 */
function query(selector_str, context) {
	var parent = null;
	if ( context !== undefined ) {
		parent = context;
	} else {
		parent = document;
	}
  return parent.querySelector(selector_str);
}
/**
 *  querySelectorAll 헬퍼 함수
 *  @param    {String}   selector_str
 *  @return   {Nodelist} 문서 요소노드 집합 반환
 */
function queryAll(selector_str, context) {
  var parent = null;
  if ( context !== undefined ) {
  	parent = context;
  } else { 
  	parent = document;
  }
  return parent.querySelectorAll(selector_str);
}

/**
 *  부모 노드 내부에 마지막 자식노드로 요소를 추가하는 헬퍼 함수
 *  @param    {HTMLElement}   parent_node 부모노드
 *  @param    {HTMLElement}   child_node 부모노드
 */
function appendChild(parent_node, child_node) {
	parent_node.appendChild(child_node);
	return child_node;
}

/**
 *  부모 노드 내부에 첫번째 자식노드로 요소를 추가하는 헬퍼 함수
 *  @param    {HTMLElement}   parent_node 부모노드
 *  @param    {HTMLElement}   child_node 부모노드
 */
function prependChild(parent_node, child_node) {
	var first = parent_node.children[0];
	parent_node.insertBefore(child_node, first);
	return child_node;
}

/**
 *  insertNode를 targetNode 앞에 삽입하는 헬퍼 함수(형제로서 삽입)
 *  @param    {HTMLElement}   insert_node 부모노드
 *  @param    {HTMLElement}   target_node 부모노드
 *  @param    {HTMLElement}   삽입 요소 노드를 반환
 */
function before(insert_node, target_node) {
	target_node.parentNode.insertBefore(insert_node, target_node);
	return insert_node;
}

/**
 *  부모 노드 내부에 첫번째 자식노드로 요소를 추가하는 헬퍼 함수
 *  @param    {HTMLElement}   parent_node 부모노드
 *  @param    {HTMLElement}   child_node 부모노드
 */
function after(target_node, insert_node) {
	var next = target_node.nextElementSibling;
	if (next == null) {
		// 조건 1. target_node 뒤에 형제 노드가 없다면?
		append(target_node.parentNode, insert_node)
	} else {
		// 조건 2. target_node 뒤에 형제 노드가 있다면?
		before(insert_node, next);
	}
}

/**
 *  부모 노드 내부에 자식노드 요소를 제거하는 헬퍼 함수
 *  @param    {HTMLElement}   element_node
 */

function remove(element_node) {
	element_node.parentNode.removeChild(element_node);
	return element_node;
}

