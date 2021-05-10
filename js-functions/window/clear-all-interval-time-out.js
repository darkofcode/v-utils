const clearAllInterval = () => {
  const killId = setTimeout(() => {
    for (let i = killId; i > 0; i--) clearInterval(i);
  }, 0);
};

export { clearAllInterval };
