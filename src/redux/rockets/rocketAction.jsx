import { createAsyncThunk } from '@reduxjs/toolkit';

const URL = 'https://api.spacexdata.com/v3/rockets';

const fetchRocketsInformation = createAsyncThunk(
  'rocket/fetchRocketInformation',
  async () => {
    const response = await fetch(URL);
    const data = await response.json();

    const rocketsItemInformation = data.map((rocket) => ({
      id: rocket.rocket_id,
      images: rocket.flickr_images,
      name: rocket.rocket_name,
      description: rocket.description,
      reserved: false,
    }));

    return rocketsItemInformation;
  },
);

export default fetchRocketsInformation;
