if (__DEV__ && console.tron) {
  console.tron.use(tron => ({
    features: {
      plog: (title, value) => {
        console.tron.display({
          name: `🔴 Prettier Log 🔴`,
          preview: title,
          value
        });
      }
    }
  }));
}
