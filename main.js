require( 'dotenv' ).config( {path: './.env'} )
const TelegramBotApi = require( 'node-telegram-bot-api' )
const { channels } = require( './channels' )
const { commands } = require( './commands' )
const { optionsHelp, optionsOrder, optionsMain, optionsChannels } = require( './options' )
const bot = new TelegramBotApi( process.env.TOKEN_API, {polling: true} )

const parametersUser = {
  age: 1,
  height: 1,
  weight: 1,
  gender: 'Man',
}

async function checkSubChannel(userId, chatId, channels, msgID) {
  
  const allIdChannels = channels.channelID 
  const allStatus = {}
  // allIdChannels.forEach( async idChannel => {
  //   const data = await bot.getChatMember(idChannel, userId)
  //   if(data.status === 'left' || data.status === 'kicked') {
  //     const statusUser = Object.assign({}, allStatus)
  //     statusUser[`${idChannel}`] = false
  //     Object.assign(allStatus, statusUser)
  //   } else {
  //     const statusUser = Object.assign({}, allStatus)
  //     statusUser[`${idChannel}`] = true
  //     Object.assign(allStatus, statusUser)    
  //   }
  //   const arrStatus = Object.values(allStatus)
  //   console.log(arrStatus)
  //   console.log(allStatus)
  // });

  const data = await bot.getChatMember(allIdChannels[0], userId)
  if(data.status === 'left' || data.status === 'kicked') {
    const statusUser = Object.assign({}, allStatus)
    statusUser[`${allIdChannels[0]}`] = false
    Object.assign(allStatus, statusUser)
  } else {
    const statusUser = Object.assign({}, allStatus)
    statusUser[`${allIdChannels[0]}`] = true
    Object.assign(allStatus, statusUser)
  }

  const data1 = await bot.getChatMember(allIdChannels[1], userId)
  if(data1.status === 'left' || data1.status === 'kicked') {
    const statusUser = Object.assign({}, allStatus)
    statusUser[`${allIdChannels[1]}`] = false
    Object.assign(allStatus, statusUser)
  } else {
    const statusUser = Object.assign({}, allStatus)
    statusUser[`${allIdChannels[1]}`] = true
    Object.assign(allStatus, statusUser)
  }

  const data2 = await bot.getChatMember(allIdChannels[2], userId)
  if(data2.status === 'left' || data2.status === 'kicked') {
    const statusUser = Object.assign({}, allStatus)
    statusUser[`${allIdChannels[2]}`] = false
    Object.assign(allStatus, statusUser)
  } else {
    const statusUser = Object.assign({}, allStatus)
    statusUser[`${allIdChannels[2]}`] = true
    Object.assign(allStatus, statusUser)
  }

  const data3 = await bot.getChatMember(allIdChannels[3], userId)
  if(data3.status === 'left' || data3.status === 'kicked') {
    const statusUser = Object.assign({}, allStatus)
    statusUser[`${allIdChannels[3]}`] = false
    Object.assign(allStatus, statusUser)
  } else {
    const statusUser = Object.assign({}, allStatus)
    statusUser[`${allIdChannels[3]}`] = true
    Object.assign(allStatus, statusUser)
  }
 // use forEach
  const arrStatus = Object.values(allStatus)
  if(arrStatus.includes(false)) {
    await bot.sendMessage(chatId, 'Ты подписался не на всех')
  } else {
    await bot.sendMessage(chatId, `Спасибо) Теперь наши спонсоры будут помагать нам еще больше. Твой файл с расписанием будет выслан через 40 min`)
  }
}

const start = () => {
  
  bot.setMyCommands(commands)

  
  bot.on( 'message', async msg => {
    
    const msgText = msg.text;
    const chatID = msg.chat.id;
    const msgID = msg.message_id;
    const userID = msg.from.id;
    const userFirstName = msg.from.first_name;
    
    switch(true) {
      
      case msgText === '/start':
        return bot.sendPhoto(chatID, 'https://i.pinimg.com/736x/ff/ad/8e/ffad8e8b3c7ea9169120f8ecdcf5856c.jpg', {
          caption: `<b>${userFirstName},</b> тебя приветсвует спортивный бот <b><i>"Sport and Nutrition"</i></b>.
          Тут ты найдешь для себя подходящий план <i><b>ПИТАНИЯ</b></i> и <i><b>ТРЕНИРОВОК</b></i>
          Чтобы продолжить нажми <b>Начать</b>`,
          reply_markup: {
            keyboard: [
              ['Начать'],
            ], resize_keyboard: true
          }, parse_mode: "HTML"
        });

      case msgText === '/help':
        return bot.sendMessage(chatID, `
          Правила для пользователя:
          <b>1</b> - Нажми /start
          <b>2</b> - Выбери программу
          <b>3</b> - Заполни данные
          <b>4</b> - Расчитай `, optionsHelp);

      case msgText === '/order':
        return bot.sendMessage(chatID, `
          Наша команда <b><i>опытных разработчиков</i></b> создаст готовое решение для вашего бизнеса или проекта.
          <b>Новейшие технологии</b>
          <b>Бестрое бизнес-решение</b>
          <b>Полный гайд по использованию</b>
          <b>Поддержка <i>24/7</i></b>
          Телеграм-боты, Сайты, Приложения, Сервисы
          Заказать тут⤵️`, optionsOrder);

      case msgText === 'Начать':
        return bot.sendPhoto(chatID, 'https://i.pinimg.com/736x/5b/01/7f/5b017f6f88be7f240863f291a69c6ecd.jpg', optionsMain);
          
      case msgText === 'Рацион на неделю/Набор массы':
        return bot.sendMessage(chatID, `Введи свой возраст в формате <b>Возраст</b>: <i>число</i>`, { parse_mode: "HTML" });
    
      case msgText === 'Тренировки/Набор массы':
        return bot.sendMessage(chatID, `Введи свой возраст в формате <b>Возраст</b>: <i>число</i>`, { parse_mode: "HTML" });
      
      case msgText === 'Тренировки/Похудение':
        return bot.sendMessage(chatID, `Введи свой возраст в формате <b>Возраст</b>: <i>число</i>`, { parse_mode: "HTML" });
      
      case msgText === 'Рацион на неделю/Похудение':
        return bot.sendMessage(chatID, `Введи свой возраст в формате <b>Возраст</b>: <i>число</i>`, { parse_mode: "HTML" });

      case msgText.includes('Возраст:'):
        const newAge = Number(msgText.replace('Возраст:', ''))
        const parameterAge = Object.assign({}, parametersUser)
        parameterAge.age = newAge
        Object.assign(parametersUser, parameterAge)
        return bot.sendMessage(chatID, `Введи свой рост в формате <b>Рост</b>: <i>число</i>`, { parse_mode: "HTML" });

      case msgText.includes('Рост:'):
        const newHeight = Number(msgText.replace('Рост:', ''))
        const parameterHeight = Object.assign({}, parametersUser);
        parameterHeight.height = newHeight
        Object.assign(parametersUser, parameterHeight)
        return bot.sendMessage(chatID, `Введи свой вес в формате <b>Вес</b>: <i>число</i>`, { parse_mode: "HTML" });

      case msgText.includes('Вес:'):
        const newWeight = Number(msgText.replace('Вес:', ''))
        const parameterWeight = Object.assign({}, parametersUser)
        parameterWeight.weight = newWeight
        Object.assign(parametersUser, parameterWeight)
        return bot.sendMessage(chatID, `Введи свой пол в формате <b>Пол</b>: <i>м/ж</i>`, { parse_mode: "HTML" });

      case msgText.includes('Пол:'):
        const newGender = msgText.replace('Пол:', '')
        const parameterGender = Object.assign({}, parametersUser)
        parameterGender.gender = newGender
        Object.assign(parametersUser, parameterGender)
        console.log(parametersUser)
        return bot.sendMessage(chatID, `Молодец. Теперь бот сможет расчитать для тебя <b><i>ИНДИВИДУАЛЬНУЮ</i></b> программу <u>питания</u> и <u>тренировок</u>.
          Нажми кнопку <b>Расчитать</b> ниже, чтобы бот запустил процесс...`, {
            reply_markup: {
              inline_keyboard: [
                [{text: 'Расчитать', callback_data: 'calculate'}]
              ]
            },
            parse_mode: "HTML"});

      default: 
        return bot.sendMessage(chatID, 'Прости, я тебя не понимаю. Попробуй воспользоваться командой или кнопкой)');

    }

  })

  bot.on( 'callback_query', async ctx => {
    
    const cData = ctx.data
    const cChatID = ctx.message.chat.id
    const cUserID = ctx.from.id
    const cMsgID = ctx.message.message_id
    const cUserFirstName = ctx.from.first_name

    switch(true) {

      case cData === 'calculate':
        return bot.sendPhoto(cChatID, 'https://i.pinimg.com/736x/92/32/13/92321352aac62e9da313cbc8ddcbfee9.jpg', optionsChannels)

      case cData === 'checkSub':
        await checkSubChannel(cUserID, cChatID, channels, cMsgID)

    }

  })

}

start()
