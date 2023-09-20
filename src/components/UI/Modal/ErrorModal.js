import { Fragment } from "react";

import styled from "styled-components";

import Button from "../Button/Button";

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 10;
  background: ${(props) => props.background};
  color: ${(props) => props.color};
`;

const Modal = styled.div`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;
  overflow: hidden;
  background-color: whitesmoke;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
`;

const Header = styled.header`
  background: ${(props) => props.background};
  color: ${(props) => props.color};
  padding: 1rem;
`;

const Title = styled.h2`
  margin: 0;
  color: ${(props) => props.color};
`;

const Content = styled.div`
  padding: 1rem;
`;

const Action = styled.footer`
  padding: 1rem;
  display: flex;
  justify-content: flex-end;
`;

const ErrorModal = (props) => {
  return (
    <Fragment>
      <Backdrop background={props.backDropBackground} />
      <Modal>
        <Header
          background={props.modalHeaderBackground}
          color={props.modalHeaderColor}
        >
          <Title color={props.titleColor}>{props.title}</Title>
        </Header>
        <Content>
          <p>{props.content}</p>
        </Content>
        <Action>
          <Button
            background={props.actionButtonBackground}
            color={props.actionButtonColor}
          >
            {props.actionButtonText}
          </Button>
        </Action>
      </Modal>
    </Fragment>
  );
};

export default ErrorModal;
