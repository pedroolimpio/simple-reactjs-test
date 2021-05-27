import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./App.css";
import {
  TitleContainer,
  Button,
  Text,
  Title,
  ButtonContainer,
  ResultContainer,
  DescriptionContainer,
  Break,
} from "./style";

const names = [
  "Pedro",
  "Felipe",
  "João",
  "Cacau",
  "Ronaldo",
  "Melissa",
  "Jair",
  "José",
];

function App() {
  const [contextNameList, setContextNameList] = useState([]);
  const [randomName, setRandomName] = useState("");

  const onAddItemList = () => {
    const position = Math.floor(Math.random() * names.length);
    const item = { name: names[position] };
    setContextNameList([...contextNameList, item]);
  };

  const getRandomName = () => {
    const position = Math.floor(Math.random() * names.length);
    return names[position];
  };

  const ListItem = (props) => {
    return (
      <li>
        <Text>{props.name}</Text>
      </li>
    );
  };

  const showRandomName = () => {
    return <Text>{randomName}</Text>;
  };

  return (
    <div className="App">
      <Container fluid>
        <Row>
          <TitleContainer>
            <Text>
              <Title>React Add In List Demo!!!</Title>
            </Text>
          </TitleContainer>
        </Row>
        <Row>
          <DescriptionContainer>
            <Text>Simple React.Js sample. </Text>
            <Break />
            <Text>As test, in this example I am using styled-components and bootstrap to create a grid layout and routing using react-router-dom.</Text>
            <Break />
            <Text>These two buttons bellow you can add random names in a list and get a random name of the list.</Text>
            <Break />
            <Text>Created by: Pedro Olímpio.</Text>
          </DescriptionContainer>
        </Row>
        <Row>
          <Col>
            <ButtonContainer>
              <Button onClick={onAddItemList}>Add Random name in list</Button>
              <Break />
              <Button
                onClick={() => {
                  const name = getRandomName();
                  setRandomName(name);
                }}
              >
                Get random name in list
              </Button>
              {randomName !== "" ? showRandomName() : null}
              <Break />
              <Link to="/page1">Navigate to Page One</Link>
              <Break />
              <Link to="/page2">Navigate to Page Two</Link>
              <Break />
              <Link to="/page999">Navigate to failing route</Link>
            </ButtonContainer>
          </Col>
          <Col>
            <ResultContainer>
              <Text>Results: {contextNameList.length}</Text>
              <ul>
                {contextNameList.map((item) => {
                  return <ListItem key={`${Math.random()}`} name={item.name} />;
                })}
              </ul>
            </ResultContainer>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
