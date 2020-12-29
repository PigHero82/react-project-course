// import './Person.css';
import styled from "styled-components";

const StyledDiv = styled.div`
    width: 60%;
    margin: 16px auto;
    border: 1px solid #ccc;
    box-shadow: 0 2px 3px #ccc;
    padding: 16px;
    text-align: center;

    @media (min-width: 500px) {
        width: 500px;
    }
`;

const person = (props) => {
    return (
        <StyledDiv>
            <h1 onClick={props.click}>Nama saya {props.name}, umur {props.age} Tahun</h1>
            <p>{props.children}</p>
            <input type="text" onChange={props.change} value={props.name}></input>
        </StyledDiv>
    )
};

export default person;