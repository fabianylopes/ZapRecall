import styled from "styled-components";

const FooterBar = styled.div`
  width: 100vw;
  padding: 15px 65px 10px 65px;
  background-color: #fff;
  box-shadow: 0px -4px 6px rgba(0, 0, 0, 0.05);
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const Icons = styled.div`
  display: flex;
  img {
    width: 23px;
    margin: 5px;
  }
`;

const Text = styled.h2`
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
`;

const RestartButton = styled.button`
  width: 167px;
  height: 32px;
  background-color: #fb6b6b;
  color: #fff;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  font-family: "Recursive", sans-serif;
  text-align: center;
  border-radius: 5px;
  border: none;
  cursor: pointer;
`;

export { FooterBar, Icons, Text, RestartButton };
