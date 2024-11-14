const quotes = [
    "Вір у себе, навіть коли ніхто не вірить.",
    "Щастя — це коли тебе розуміють без слів.",
    "Зміни починаються з нас самих.",
    "Кожен день — нова можливість.",
    "Не бійся робити помилки, вони — частина шляху.",
    "Люби те, що робиш, і роби те, що любиш.",
    "Немає нічого неможливого, якщо є бажання.",
    "Життя — це не очікування бурі, а вміння танцювати під дощем.",
    "Майбутнє залежить від того, що ти робиш сьогодні.",
    "Кожен успіх починається з першого кроку.",
    "Сила людини — в її віри.",
    "Справжня краса в душі, а не в зовнішності.",
    "Не зупиняйся на досягнутому, завжди рухайся вперед.",
    "Часу мало, щоб витрачати його на сумніви.",
    "Мрії збуваються, якщо їх плекати кожного дня.",
    "Найкращі моменти приходять несподівано.",
    "Не шукай щастя десь далеко, воно завжди поруч.",
    "Посмішка — найкоротший шлях до серця.",
    "Людина сильніша за обставини.",
    "Вчись радіти дрібницям.",
    "Не озирайся назад, ти йдеш не туди.",
    "Лише сміливі досягають вершин.",
    "Кожен ранок — це шанс почати все спочатку.",
    "Справжнє багатство — це здоров'я та любов.",
    "Доброта завжди повертається.",
    "Щастя — це коли радієш чужим успіхам.",
    "Зміни починаються з тебе.",
    "Вір у диво, і воно станеться.",
    "Легких шляхів не буває, але вони ведуть до мети.",
    "Не здавайся, коли важко — це лише випробування.",
    "Погані дні теж потрібні, щоб цінувати хороші.",
    "Сміливість — це не відсутність страху, а здатність діяти всупереч йому.",
    "Мудрість приходить з досвідом, а досвід — з помилками.",
    "Дружба — це коли розуміють без слів.",
    "Не чекай на ідеальний момент, створюй його сам.",
    "Навіть маленький крок вперед краще, ніж стояти на місці.",
    "Роби добро, і воно обов’язково повернеться.",
    "Життя — це те, що ти з нього робиш.",
    "Цінуй кожну мить, адже вона неповторна.",
    "Сміх — найкращі ліки від усіх хвороб.",
    "Немає нічого сильнішого за любов.",
    "Чим більше віддаєш, тим більше отримуєш.",
    "Завжди обирай шлях серця.",
    "Важливі не роки життя, а життя в роках.",
    "Майбутнє залежить від твоїх рішень сьогодні.",
    "Краса в простоті.",
    "Ризикуй, бо найбільший ризик — не ризикувати.",
    "Справжнє щастя — це гармонія з собою.",
    "Ніколи не пізно почати спочатку.",
    "Твоя мрія варта того, щоб боротися за неї.",
];

function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById('quoteText').innerText = quotes[randomIndex];
};

const btn = document.querySelector(".Thema");
btn.addEventListener("click", function () {
  document.body.classList.toggle("dark-theme");
});
