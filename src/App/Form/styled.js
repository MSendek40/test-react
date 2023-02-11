import styled from "styled-components";



export const FormFieldSet = styled.fieldset`
 padding: 20px;
    background-color: rgb(4, 97, 97);
    border-radius: 10px;
`;
export const LabelText = styled.span`
display: inline-block;
max-width: 200px;
width: 100%;
margin-right: 10px;
font-weight: 700;
`;

export const FormField = styled.input`            
    padding: 10px;
    border: 1px solid white;
    border-radius: 10px;
    max-width: 300px;
    width: 100%;
`;

export const ResultText = styled.p`
  display: inline-block;
    max-width: 500px;
    width: 100%;
    margin-right: 10px;
    padding-bottom: 20px;
    font-weight: 700;
`;

export const ButtonsPosition = styled.div`
   display: flex;
    justify-content: space-between;
    margin: 10px;
    padding: 10px;
`;

export const ResultButton = styled.button`
 width: 150px;
    height: 50px;
    background-color: azure;
    color:black;
    border: 1px solid black;
    border-radius: 10px;
    padding: 10px;
    font-weight: 700;
    font-size: large;
    font-style: italic;
    
    &:hover {
    background-color: orange;
    color: teal;
}
`;

export const FormStyle = styled.form`
 border: 1px solid black;
    border-radius: 10px;
    margin-top: 40px;
    padding: 20px;
    background-color: teal;
    color: white;
    box-shadow: 16px 3px 12px -6px teal;
`;

export const Loading = styled.p`
color: black;
background-color: white;
`;

export const Failure = styled.p`
color: white;
background-color: red;
`;
