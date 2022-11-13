export default (app, db) => {
  app.get('/api/users', db.getUsers);
};