const area = document.getElementById('area');

let move = 0;

let result = '';

const contentWrapper = document.getElementById('content'),
  modalResult = document.getElementById('modal-result'),
  overlay = document.getElementById('overlay'),
  btnClose = document.getElementById('btn-close');

const check = () => {
  const boxes = document.getElementsByClassName('box');
  const array = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (i = 0; i < array.length; i++) {
    if (move == 9) {
      result = 'ничья';
      prepareResult(result);
    } else if (
      boxes[array[i][0]].innerHTML == 'x' &&
      boxes[array[i][1]].innerHTML == 'x' &&
      boxes[array[i][2]].innerHTML == 'x'
    ) {
      result = 'крестики';
      prepareResult(result);
    } else if (
      boxes[array[i][0]].innerHTML == 'o' &&
      boxes[array[i][1]].innerHTML == 'o' &&
      boxes[array[i][2]].innerHTML == 'o'
    ) {
      result = 'нолики';
      prepareResult(result);
    }
  }
};

const prepareResult = (winner) => {
  contentWrapper.innerHTML = `Победили ${winner}`;
  modalResult.style.display = 'block';
};

const closeModal = () => {
  modalResult.style.display = 'none';
  location.reload();
};

overlay.addEventListener('click', closeModal);
btnClose.addEventListener('click', closeModal);

area.addEventListener('click', (event) => {
  if ((event.target.className = 'box')) {
    move % 2 === 0
      ? (event.target.innerHTML = 'x')
      : (event.target.innerHTML = 'o');
    move++;
    check();
  }
});
