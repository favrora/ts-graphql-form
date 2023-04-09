# Typescript GraphQL Form

## Описание решения

Напишу на русском о том что я сделал и что не сделал по тестовому заданию. Я четко придерживался требуемых функций и реализовал все как просили:

- Проект я построил без использования `Create React App`, использовал webpack как было запрошено
- Переиспользуемый компонент CustomSelect находится в `src/components/UserForm`, если бы он использовался в двух местах то я бы вынес глобально, но сейчас он относится только к форме
- Добавление данных в список я реализовал через модальное окно используя компонент `Modal` из `mui`
- При ошибках в форме поля становятся красными, например если что-то не заполнить
- Данные запрашиваются у API `http://152.228.215.94:81` и кэшируются. Правда сейчас там частично есть ошибка CORS, но если получить токен jwt то все заработает
- Submit формы выводит все данные в виде json в консоль DevTools
- any types в коде не допускал, все строго типизировано и используется linter typescript

Stack used: `Typescript, React, MaterialUI, GraphQL`

Implemented features: `form, list, add to list, API integration`

## Preview

<img src="./preview.jpg" width="80%">

<br><hr>

## Development

Copy the repository and open the project folder in terminal.

1. Run `npm i`

2. Starting the server `npm run dev`

3. Server will run here => http://localhost:3000

