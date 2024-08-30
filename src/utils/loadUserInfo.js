export const loadUserInfo = () => {
    try {
        const user = localStorage.getItem('user');
        if (user === null) {
            return undefined; // Return undefined to let the reducers initialize the state
        }
        return JSON.parse(user);
    } catch (err) {
        console.error('Could not load state', err);
        return undefined;
    }
};