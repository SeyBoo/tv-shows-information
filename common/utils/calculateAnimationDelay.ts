const calculateDelay = (index: number) => {
  const baseDelay = 0.15;

  return baseDelay * index;
};

export default calculateDelay;
