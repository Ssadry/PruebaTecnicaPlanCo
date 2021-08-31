import {Container, Tr, Th, Td, Image, P, Button} from './styled'

const DEFAULT_TITLES = ['Default title']


const Table = ({
    titles = DEFAULT_TITLES, 
    content,
    setContent,
    showColors,
}) => {
    return (
        <Container>
            <tr>
                {
                    titles.map((t, i) => <Th key={i}>{t}</Th>)
                }
            </tr>
            {
                content.map((c, i) => {
                    return (
                        <Tr key={i} id={i} showColors={showColors}>
                            <Td>
                                <Image src={c.picture.thumbnail}/>
                            </Td>                     
                            <Td>
                                <P>{c.name.first}</P>
                            </Td>
                            <Td>
                                <P>{c.name.last}</P>
                            </Td>
                            <Td>
                                <P>{c.location.country}</P>
                            </Td>
                            <Td>
                                <Button 
                                    onClick={() => setContent(content.filter((c, index) => i != index))
                                }>
                                    delete
                                </Button>
                            </Td>
                        </Tr>
                )})
            }
        </Container>
    )
}

export default Table;