import { useContext } from "react";
import { ItemContext } from "./ItemContext";

export function useItems() {
  return useContext(ItemContext);
}
