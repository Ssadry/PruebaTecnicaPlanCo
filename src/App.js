import './App.css'
import {useEffect, useState, lazy, Suspense} from 'react'
import axios from 'axios'
import styled from 'styled-components'
import Title from './components/title'
import Buttons from './components/buttons'
import Loading from './components/loading'
import Error from './components/error'

const LazyTable = lazy(() => import('./components/table'))

const TITLES = ['image', 'name', 'surname', 'country', 'delete']
const API = 'https://randomuser.me/api/?results=100'

const App = () => {

  const [people, setPeople] = useState([])
  const [showColors, setShowColors] = useState(false)
  const [toReRenderer, setToReRenderer] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    axios
      .get(API)
      .then(({data}) => {
        setPeople(data.results)
        localStorage.setItem('people', JSON.stringify(data.results))
      })
      .catch(() => setError(true))
  }, [])

  return (
      <Container>
        <Title>Interview Task</Title>
        <Buttons 
          showColors={showColors}
          setShowColors={setShowColors}
          content={people}
          setContent={setPeople}
          setToReRenderer={setToReRenderer}
        />
        {
          !error ?         
          <Suspense fallback={<Loading/>}>
            <LazyTable 
              titles={TITLES} 
              content={people}
              setContent={setPeople}
              showColors={showColors}
              toReRenderer={toReRenderer}
            />
          </Suspense>
          :
          <Error/>
        }

      </Container>
  )
}

export default App


const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100vw;
`