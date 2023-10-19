export function loadStateFromLocalStorage() {
  try {
    const serializedState = localStorage.getItem("user");
    if (serializedState === null) return undefined;
    return JSON.parse(serializedState);
  } catch (err) {
    console.error("Could not load state from localStorage:", err);
    return undefined;
  }
}
