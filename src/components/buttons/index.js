import {Container, Button} from './styled'
import {useState} from 'react'

const Buttons = ({showColors, setShowColors, content, setContent, setToReRenderer}) => {
    const [isOrdered, setIsOrdered] = useState(false)

    const order = (content) => {
        content.sort((a, b) => isOrdered ? a.location.country.localeCompare(b.location.country) : b.location.country.localeCompare(a.location.country))
        setIsOrdered(!isOrdered)
        setToReRenderer(current => !current)
    }

    return (
        <Container>
            <Button onClick={() => setShowColors(!showColors)}>
                Colored rows
            </Button>
            <Button onClick={() => order(content)}>
                Sort by country
            </Button>
            <Button onClick={() => setContent(JSON.parse(localStorage.getItem('people')))}>
                Restore the init state
            </Button>
        </Container>
    )
}

export default Buttons