export default (app, db) => {
  app.get('/api/user/:user_id', async (req, res) => {
    try {
      const result = await db.getUser(req.params.user_id);
      res.status(200).json(result);
    } catch (error) {
      console.log('getUser', error);
      res.sendStatus(400);
    }
  });

  app.get('/api/users', async (req, res) => {
    try {
      const result = await db.getUsers();
      res.status(200).json(result);
    } catch (error) {
      console.log('getUsers', error);
      res.sendStatus(400);
    }
  });

  app.get('/api/humors/:user_id', async (req, res) => {
    try {
      const result = await db.getHumorsByUser(req.params.user_id);
      res.status(200).json(result);
    } catch (error) {
      console.log('getHumorsByUser', error);
      res.sendStatus(400);
    }
  });
};