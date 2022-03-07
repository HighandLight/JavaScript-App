const items = document.querySelector('.items');
const input = document.querySelector('.footer__input');
const addBtn = document.querySelector('.footer__button');

function onAdd() {
    // 1. 사용자가 입력한 텍스트를o 받아옴
    const text = input.value;
    if (text == '') {
        input.focus();
        return;
    }
    // 2. 새로운 아이템을 만듬(텍스트 + 삭제 버튼)
    const item = createItem(text);
    // 3. items 컨테이너 안에 새로 만든 아이템을 추가한다.
    items.appendChild(item);
    // 4. 새로 추가된 아이템으로 스크롤링
    item.scrollIntoView({ block: 'center'})
    // 5. 인풋을 초기화 한다. 
    input.value = '';
    input.focus();  // 플러스 버튼 누르고 난 후에도 text 상자 클릭 없이 바로 입력할 수 있도록!

}


function createItem(text) {
    const itemRow = document.createElement('li');
    itemRow.setAttribute('class', 'item__row');

    const item = document.createElement('div');
    item.setAttribute('class', 'item');

    const name = document.createElement('span');
    name.setAttribute('class', 'item__name');
    name.innerText = text;

    const deleteBtn = document.createElement('button');
    deleteBtn.setAttribute('class', 'item__delete');
    deleteBtn.innerHTML = '<i class="fas fa-trash-alt"></i>';
    deleteBtn.addEventListener('click', () => {
        items.removeChild(itemRow);
    });

    const itemDivider = document.createElement('div');
    itemDivider.setAttribute('class', 'item__divider');

    item.appendChild(name);
    item.appendChild(deleteBtn);

    itemRow.appendChild(item);
    itemRow.appendChild(itemDivider);
    return itemRow;
}
addBtn.addEventListener('click', () => {
    onAdd();

});

input.addEventListener('keypress', event => {
    if(event.key == 'Enter') {
        onAdd();
    }
});