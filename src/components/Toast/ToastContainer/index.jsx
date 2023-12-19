import { Container } from "./styles";
import ToastMessage from "../ToastMessage";
import { useState, useEffect } from "react";
import { toastEventManager } from "../../../utils/toast";

export default function ToastContainer() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    function handleAddToast({ type, text }) {
      setMessages((state) => [...state, { id: Math.random(), type, text }]);
    }

    toastEventManager.on("addtoast", handleAddToast);

    return () => {
      toastEventManager.removeListener("addtoast", handleAddToast);
    };
  }, []);

  return (
    <Container>
      {messages.map((message) => (
        <ToastMessage
          key={message.id}
          text={message.text}
          type={message.type}
        />
      ))}
    </Container>
  );
}
