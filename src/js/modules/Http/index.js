import mockedAppartments from './mockedAppartments';

// const apiUrl = 'https://api.mcmakler.de/v1/';

// const makeCall = action => fetch(`${apiUrl}${action}`).then(res => res.json());

// export const fetchAppartments = makeCall('advertisements').then(res => res.data); // commented because of cors problem, use mock data

export const fetchAppartments = () => mockedAppartments;
