import React from 'react'

const Title = React.createElement('h1', { className: 'title' }, 'Milkboy2564')

const App = () =>
  React.createElement('div', {}, [
    React.createElement('button', { className: 'btn' }, Title),
    React.createElement('br', {}, null),
    React.createElement('br', {}, null),
    React.createElement('button', { className: 'btn' }, Title),
  ])

export default App
