import { useState } from "react";

export default function useModalControll(initialState) {
  const [isModalOpen, setIsModalOpen] = useState(initialState);
  return { isModalOpen, setIsModalOpen };
}
