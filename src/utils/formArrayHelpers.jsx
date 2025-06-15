export const removeItemById = (array, id) =>
  array.filter((item) => item.id !== id);

export const moveItemUp = (array, id) => {
  const index = array.findIndex((item) => item.id === id);
  if (index > 0) {
    const newArray = [...array];
    [newArray[index - 1], newArray[index]] = [
      newArray[index],
      newArray[index - 1],
    ];
    return newArray;
  }
  return array;
};

export const moveItemDown = (array, id) => {
  const index = array.findIndex((item) => item.id === id);
  if (index < array.length - 1) {
    const newArray = [...array];
    [newArray[index + 1], newArray[index]] = [
      newArray[index],
      newArray[index + 1],
    ];
    return newArray;
  }
  return array;
};
