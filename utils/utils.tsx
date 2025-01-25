export const shuffleArray = (array: any[]) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1)); // Generate random index between 0 and i
    [array[i], array[j]] = [array[j], array[i]]; // Swap elements at i and j
  }
  return array;
}

export const randomNumber = (min= 0, max= 10) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}