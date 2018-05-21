if (__DEV__ && console.tron) {
  console.tron.use(tron => ({
    features: {
      plog: (title, value) => {
        console.tron.display({
          important: true,
          name: `🔴 Prettier Log 🔴 - ${title}`,
          value
        });
      }
    }
  }));
}
