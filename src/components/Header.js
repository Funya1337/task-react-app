import Button from './Button.js'

const Header = ({ title }) => {
  const onClick = (e) => {
    console.log('Click')
  }
  return (
    <header className="header">
        <h1>{title}</h1>
        <Button color='green' text='Add' onClick={onClick} />
    </header>
  )
}

Header.defaultProps = {
    title: 'Task Tracker'
}

export default Header