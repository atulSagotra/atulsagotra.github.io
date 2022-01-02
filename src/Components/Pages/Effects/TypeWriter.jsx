import React, { useState, useEffect } from "react";

const CONSTANTS = {
  DELETING_SPEED: 50,
  TYPING_SPEED: 150,
};
export default function TypeWriter({ messages, heading }) {
  const [state, setState] = useState({
    text: "",
    message: "",
    isDeleting: false,
    loopNum: 0,
    typingSpeed: CONSTANTS.TYPING_SPEED,
  });

  useEffect(() => {
    let timer = "";
    const handleType = () => {
      setState((cs) => ({
        ...cs, // cs means currentState
        text: getCurrentText(cs),
        typingSpeed: getTypingSpeed(cs),
      }));
      timer = setTimeout(handleType, state.typingSpeed);
    };
    handleType();
    return () => clearTimeout(timer);
  }, [state.isDeleting, state.typingSpeed]);

  useEffect(() => {
    if (!state.isDeleting && state.text === state.message) {
      setTimeout(() => {
        setState((cs) => ({
          ...cs,
          isDeleting: true,
        }));
      }, 500);
    } else if (state.isDeleting && state.text === "") {
      setState((cs) => ({
        ...cs, // cs means currentState
        isDeleting: false,
        loopNum: cs.loopNum + 1,
        message: getMessage(cs, messages),
      }));
    }
  }, [state.text, state.message, state.isDeleting, messages]);

  const getCurrentText = (currentState) => {
    return currentState.isDeleting
      ? currentState.message.substring(0, currentState.text.length - 1)
      : currentState.message.substring(0, currentState.text.length + 1);
  };

  const getMessage = (currentState, data) => {
    return data[Number(currentState.loopNum) % Number(data.length)];
  };

  const getTypingSpeed = (currentState) => {
    return currentState.isDeleting
      ? CONSTANTS.TYPING_SPEED
      : CONSTANTS.DELETING_SPEED;
  };
  return (
    <div>
      <h1 className="text-xl">
        {heading}&nbsp;
        <span>{state.text}</span>
        <span id="cursor" />
      </h1>
    </div>
  );
}
