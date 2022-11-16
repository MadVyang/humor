export default (app, db, upload) => {
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

  app.post('/api/humor', upload.fields([{ name: 'user_id' }, { name: 'img' }, { name: 'humor' }, { name: 'score' }]), async (req, res) => {
    try {
      const { user_id, humor, score } = req.body;
      let img_path = '';
      if (req.files['img'].length > 0) {
        img_path = 'uploads/' + req.files['img'][0].filename;
      }
      await db.postHumor(user_id, humor, score, img_path);
      res.sendStatus(200);
    } catch (error) {
      console.log('postHumor', error);
      res.sendStatus(400);
    }
  });

  app.get('/api/humor/img', async (req, res) => {
    try {
      res.sendFile(process.cwd() + '/' + req.query.img_path);
    } catch (error) {
      console.log('getHumorImg', error);
      res.sendStatus(400);
    }
  });
};