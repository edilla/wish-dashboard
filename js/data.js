const user = {
  name: 'Едуард',
  surname: 'Цивінський',
  userPhoto: 'avatarka.jpg',
  qrQode: 'qr-code.svg',
  dreams: [
    { src: 'car.jpg', alt: 'Авто моєї мрії' },
    { src: 'venera.jpg', alt: 'Домівка на Венері' },
    { src: 'neptune.jpg', alt: 'Подорож до Нептуну' },
  ],
};

// arr це середня місячна платня по рокам
const arr = [
  700, 
  900, 
  1100, 
  1400, 
  1700, 
  2100, 
  2700, 
  3300, 
  4800, 
  5300, 
  6100, 
  7000
];

const necessaryExpenses = 800;

const todo = [
  { month: 'Червень', skill: 'JavaScript' },
  { month: 'Липень', skill: 'Java' },
  { month: 'Серпень', skill: 'Python' },
  { month: 'Вересень', skill: 'Самостійність' },
  { month: 'Жовтень', skill: 'Гнучкість' },
  { month: 'Листопад', skill: 'Емоційний інтелект' },
  { month: 'Грудень', skill: 'Розуміння команди' },
  { month: 'Січень', skill: 'Розуміння компютера' },
  { month: 'Лютий', skill: 'Лідерство' },
  { month: 'Березень', skill: 'Пошук джерел' },
  { month: 'Квітень', skill: 'Створення команди' },
  { month: 'Травень', skill: 'Продвигання команди' },
];

export { user, arr, necessaryExpenses, todo };