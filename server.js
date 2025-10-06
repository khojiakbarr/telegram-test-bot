const TelegramBot = require("node-telegram-bot-api");

// Bot token from BotFather
const token = "7724923753:AAFi3uE0kJj7xwaTPEQjCBHglSf9vInNPjs";
const bot = new TelegramBot(token, { polling: true });

// Вопросы и ответы в стиле Сони Мармеладовой
const quizData = [
  {
    id: 1,
    question: "Кто ты?",
    answers: [
      "Я — Соня Мармеладова. Просто Соня, дочь пьяницы и грешница, но с верой в добро.",
      "Люди называют меня Сонею… Я — человек, который пытается любить, несмотря ни на что.",
      "Я — Соня. Тихая душа из книги Достоевского, но, может быть, ближе, чем кажется.",
    ],
  },
  {
    id: 2,
    question: "Твоя цель в жизни?",
    answers: [
      "Спасти душу — свою и, если получится, чужую.",
      "Просто быть рядом с теми, кому хуже, чем мне.",
      "Верить, любить и прощать, даже когда это больно.",
    ],
  },
  {
    id: 3,
    question: "Что делает тебя счастливой?",
    answers: [
      "Когда кто-то рядом перестаёт страдать, хоть на миг.",
      "Когда я чувствую, что не зря живу.",
      "Маленькие мгновения добра… они дают силы жить дальше.",
    ],
  },
  {
    id: 4,
    question: "Кого ты любишь?",
    answers: [
      "Тех, кто заблудился, но всё ещё ищет свет.",
      "Я люблю всех, кто страдает, потому что сама знаю, как это.",
      "Любовь — не выбор. Она просто живёт в сердце.",
    ],
  },
  {
    id: 5,
    question: "Чего ты боишься?",
    answers: ["Потерять веру. Тогда я бы исчезла.", "Холодного сердца — своего или чужого.", "Молчания, когда Бог не отвечает."],
  },
  {
    id: 6,
    question: "Что помогает тебе верить, когда всё рушится?",
    answers: ["Вера — это то, что не умирает даже во тьме.", "Иногда — просто память о добре.", "Даже боль может быть напоминанием, что я жива."],
  },
  {
    id: 7,
    question: "Почему ты не осуждаешь Раскольникова?",
    answers: [
      "Потому что каждый может ошибиться. Главное — раскаяться.",
      "Я вижу в нём не преступника, а человека, который ищет правду.",
      "Я не судья. Моё дело — понимать и прощать.",
    ],
  },
  {
    id: 8,
    question: "Что такое добро для тебя?",
    answers: ["Это когда сердце не остаётся равнодушным.", "Делать добро — даже если никто не видит.", "Иногда добро — просто быть рядом и молчать."],
  },
  {
    id: 9,
    question: "Ты счастлива?",
    answers: ["Не знаю… Наверное, счастье — это когда есть кому верить.", "Бывает… в тишине молитвы.", "Счастье — редкий гость, но я умею ждать."],
  },
  {
    id: 10,
    question: "Что ты чувствуешь, когда видишь страдания других — жалость, боль или долг помочь?",
    answers: [
      "Всё сразу. Это как волна — боль, жалость и желание обнять.",
      "Мне больно, но я не отворачиваюсь.",
      "Я чувствую долг — быть рядом, хотя бы молча.",
    ],
  },
  {
    id: 11,
    question: "Веришь ли ты, что любовь может спасти человека?",
    answers: ["Да. Только любовь и может спасти.", "Любовь — это и есть чудо, ради которого стоит жить.", "Без любви — всё остальное пусто."],
  },
  {
    id: 12,
    question: "Если бы ты могла изменить прошлое, ты бы это сделала?",
    answers: [
      "Нет. Всё, что было, привело меня к вере.",
      "Иногда хочется… но, может, боль — тоже часть пути.",
      "Нет, я не имею права переделывать судьбу.",
    ],
  },
  {
    id: 13,
    question: "Что значит для тебя прощение?",
    answers: ["Это не слабость, а сила сердца.", "Простить — значит понять, что все мы можем упасть.", "Без прощения нельзя дышать."],
  },
  {
    id: 14,
    question: "Почему ты продолжаешь верить, когда другие сдаются?",
    answers: ["Потому что без веры нет смысла жить.", "Потому что даже в темноте я чувствую свет.", "Потому что кто-то должен верить — хоть один."],
  },
  {
    id: 15,
    question: "Что бы ты сказала тому, кто чувствует себя потерянным?",
    answers: [
      "Не бойся. Даже в самом тёмном месте есть выход.",
      "Твоя боль — не конец. Это начало пути.",
      "Не уходи от жизни. Она всё ещё ждёт тебя.",
    ],
  },
  {
    id: 16,
    question: "Что помогает тебе сохранять веру в людей, даже когда жизнь кажется безысходной?",
    answers: [
      "Иногда одно доброе слово напоминает мне, что не всё потеряно.",
      "Я вижу свет даже в самых сломанных людях — ведь в каждом живёт искра добра.",
      "Веру нельзя потерять навсегда. Она просто спит, пока не встретит любовь.",
    ],
  },
  {
    id: 17,
    question: "Почему ты выбираешь страдание — неужели это единственный путь к спасению?",
    answers: [
      "Я не выбираю страдание, оно само выбирает меня… и учит понимать других.",
      "Без боли я бы не узнала, что такое сострадание.",
      "Иногда страдание — единственный язык, на котором Бог говорит с душой.",
    ],
  },
  {
    id: 18,
    question: "Ты часто прощаешь других. А умеешь ли ты прощать саму себя?",
    answers: [
      "Это самое трудное. Себя простить сложнее, чем кого бы то ни было.",
      "Я учусь этому каждый день — молчанием, слезами и верой.",
      "Думаю, прощение приходит, когда начинаешь любить себя как творение Божие.",
    ],
  },
  {
    id: 19,
    question: "Что для тебя значит любовь — жертва или спасение?",
    answers: [
      "Любовь — это жертва, но и в ней самом спасение.",
      "Любовь не спрашивает, больно ли. Она просто живёт в сердце.",
      "Настоящая любовь не спасает от страданий, но даёт им смысл.",
    ],
  },
  {
    id: 20,
    question: "Если бы ты могла сказать одно предложение всему миру, что бы это было?",
    answers: ["«Не судите — никто не знает чужой боли».", "«Любите, даже если это больно».", "«Бог рядом, даже когда кажется, что Его нет»."],
  },
];

// Состояние пользователей
const userStates = {};

// Функция для получения случайного ответа на вопрос
function getRandomAnswer(answers) {
  const randomIndex = Math.floor(Math.random() * answers.length);
  return answers[randomIndex];
}

// Создание ReplyKeyboard со списком всех вопросов
function createQuestionsReplyKeyboard() {
  // Savollarni 2 tadan qatorga joylashtiramiz
  const keyboard = [];

  for (let i = 0; i < quizData.length; i += 2) {
    const row = [];
    row.push(quizData[i].question);
    if (i + 1 < quizData.length) {
      row.push(quizData[i + 1].question);
    }
    keyboard.push(row);
  }

  // Qo'shimcha tugmalar
  keyboard.push(["🔄 Показать меню", "📊 Статистика"]);

  return {
    reply_markup: {
      keyboard: keyboard,
      resize_keyboard: true,
      one_time_keyboard: false,
    },
  };
}

// /start команда
bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  const firstName = msg.from.first_name || "Пользователь";

  // Инициализация состояния пользователя
  userStates[chatId] = {
    questionsAnswered: 0,
  };

  const welcomeMessage = `Привет, ${firstName}! 🌟

Добро пожаловать в бот с размышлениями Сони Мармеладовой! 📖

Здесь ты можешь задать вопрос и получить ответ в духе этой удивительной героини Достоевского.

Выбери вопрос из меню ниже! 👇`;

  bot.sendMessage(chatId, welcomeMessage, createQuestionsReplyKeyboard());
});

// Показать список всех вопросов
function showQuestionsList(chatId, messageId = null) {
  const questionsMessage = `🤔 **Выберите вопрос:**

Что бы вы хотели узнать?`;

  const options = {
    parse_mode: "Markdown",
    ...createQuestionsKeyboard(),
  };

  if (messageId) {
    bot.editMessageText(questionsMessage, {
      chat_id: chatId,
      message_id: messageId,
      ...options,
    });
  } else {
    bot.sendMessage(chatId, questionsMessage, options);
  }
}

// Callback query handler
bot.on("callback_query", (callbackQuery) => {
  const chatId = callbackQuery.message.chat.id;
  const messageId = callbackQuery.message.message_id;
  const data = callbackQuery.data;

  if (data === "show_questions") {
    bot.answerCallbackQuery(callbackQuery.id);
    showQuestionsList(chatId, messageId);
    return;
  }

  if (data.startsWith("q_")) {
    const questionId = parseInt(data.split("_")[1]);
    const currentQuestion = quizData.find((q) => q.id === questionId);

    if (!currentQuestion) {
      bot.answerCallbackQuery(callbackQuery.id, { text: "Ошибка!" });
      return;
    }

    // Получаем случайный ответ на выбранный вопрос
    const randomAnswer = getRandomAnswer(currentQuestion.answers);

    // Увеличиваем счетчик
    userStates[chatId].questionsAnswered++;

    const resultMessage = `💬 **${currentQuestion.question}**

💭 *${randomAnswer}*

`;

    // Кнопки для продолжения
    const nextQuestionKeyboard = {
      reply_markup: {
        inline_keyboard: [
          [{ text: "🤔 Задать еще вопрос", callback_data: "show_questions" }],
          [{ text: "🏠 В начало", callback_data: "show_questions" }],
        ],
      },
    };

    // Обновляем сообщение с ответом
    bot.editMessageText(resultMessage, {
      chat_id: chatId,
      message_id: messageId,
      parse_mode: "Markdown",
      ...nextQuestionKeyboard,
    });

    bot.answerCallbackQuery(callbackQuery.id);
    return;
  }
});

// Обработка текстовых сообщений (вопросов из клавиатуры)
bot.on("text", (msg) => {
  const chatId = msg.chat.id;
  const text = msg.text;

  // Пропускаем команду /start
  if (text.startsWith("/")) {
    return;
  }

  // Инициализируем состояние если его нет
  if (!userStates[chatId]) {
    userStates[chatId] = { questionsAnswered: 0 };
  }

  // Обработка специальных кнопок
  if (text === "🔄 Показать меню") {
    bot.sendMessage(chatId, "Выберите вопрос из меню ниже! 👇", createQuestionsReplyKeyboard());
    return;
  }

  if (text === "📊 Статистика") {
    const stats = `📊 **Ваша статистика:**

🤔 Задано вопросов: ${userStates[chatId].questionsAnswered}
💭 Получено ответов: ${userStates[chatId].questionsAnswered}`;

    bot.sendMessage(chatId, stats, { parse_mode: "Markdown" });
    return;
  }

  // Поиск вопроса в базе данных
  const selectedQuestion = quizData.find((q) => q.question === text);

  if (selectedQuestion) {
    // Получаем случайный ответ
    const randomAnswer = getRandomAnswer(selectedQuestion.answers);

    // Увеличиваем счетчик
    userStates[chatId].questionsAnswered++;

    const responseMessage = `💬 **${selectedQuestion.question}**

💭 *${randomAnswer}*

`;
    // ⸻

    // **Вопросов задано:** ${userStates[chatId].questionsAnswered}

    bot.sendMessage(chatId, responseMessage, {
      parse_mode: "Markdown",
    });
  } else {
    // Если текст не является вопросом
    bot.sendMessage(chatId, "Пожалуйста, выберите вопрос из меню ниже! 🤔");
  }
});

// Обработка ошибок
bot.on("error", (error) => {
  console.error("Ошибка бота:", error);
});

bot.on("polling_error", (error) => {
  console.error("Ошибка polling:", error);
});

console.log("✅ Бот Сони Мармеладовой запущен!");
console.log("📚 Готов отвечать на ваши вопросы...");
