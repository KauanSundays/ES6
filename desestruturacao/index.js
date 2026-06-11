const defaultSettings = {
  theme: 'light',
  language: 'pt-BR',
  features: {
    biometry: false,
    pushNotifications: true
  }
};

const userPayload = {
  id: 'usr_9921',
  name: 'Rodrigo Dev',
  preferences: {
    theme: 'dark',
    biometry: true
  }
};

const setupUserProfile = (defaultSettings, user) => {
    const {id, name, preferences } = user;
    const {theme, biometry} = preferences;

    return  {
        id,
        ...defaultSettings,
        theme,
        name,
        biometry
    }
}


console.log(setupUserProfile(defaultSettings, userPayload))