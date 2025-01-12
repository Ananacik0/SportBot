const { channels } = require( './channels' )

module.exports = {

  optionsHelp: {
    reply_markup: {
      keyboard: [
        ['Начать']
      ], resize_keyboard: true
    }, parse_mode: "HTML"
  },

  optionsOrder: {
    reply_markup: {
      inline_keyboard: [
        [{text: 'Заказать разработку', url: 'https://t.me/lowerCaseJS'}]
      ], resize_keyboard: true
    }, parse_mode: "HTML"
  },

  optionsMain: {
    caption: `Начи менять <b>Себя</b> и <b>Свое тело</b> уже <s>завтра</s> <b><i>СЕЙЧАС</i></b>!
    Выбери категорию в меню, чтобы продолжить...`,
    reply_markup: {
      keyboard: [
        ['Рацион на неделю/Набор массы'],
        ['Рацион на неделю/Похудение'],
        ['Тренировки/Набор массы'],
        ['Тренировки/Похудение'],
      ], resize_keyboard: true
    }, parse_mode: "HTML"
  },

  optionsChannels: {
    caption: `Бот начал свою работу. 
    Дорогой друг, у нашего бота есть <b>спонсоры</b>, которые <u>помогают</u> составлять план <i>тренировок</i> и <i>питания</i>, чтобы материал был <i><b>МАКСИМАЛЬНО актуальным</b></i>.
    Просим подписаться на них, чтобы выразить поддержку.
    После подписки бот пришлет составленный план)`,
    reply_markup: {
      inline_keyboard: [
        [{text: channels.title[0], url: channels.url[0]}, {text: channels.title[1], url: channels.url[1]}],
        [{text: channels.title[2], url: channels.url[2]}, {text: channels.title[3], url: channels.url[3]}],
        [{text: 'Проверить подписки', callback_data: 'checkSub'}],
      ], resize_keyboard: true
    }, parse_mode: "HTML"
  }

}