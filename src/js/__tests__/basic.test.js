
import GameSavingLoader from '../GameSavingLoader';

test('successful object',
  async () => {
    let gl = new GameSavingLoader();
    const exp = {
      id: 9,
      created: 1546300800,
      userInfo: {
        id: 1, name: 'Hitman', level: 10, points: 2000,
      },
    };
    gl = await gl.load();
    expect(gl).toEqual(exp);
  });
