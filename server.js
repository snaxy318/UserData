const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./user/routes/userRoutes');
const roleRoutes = require('./roles/./routes/roleRoutes');
const featureRoutes = require('./features/routes/featureRoutes');
const userRoleMapperRoutes = require('./roles/routes/userRoleMapperRoutes');
const featureRoleMapperRoutes = require('./features/routes/featureRoleMappingRoutes');
const sequelize = require('./config/database');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api/users', userRoutes);
app.use('/api/roles', roleRoutes);
app.use('/api/features', featureRoutes);
app.use('/api', userRoleMapperRoutes); 
app.use('/api', featureRoleMapperRoutes);


// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Start server
sequelize.authenticate()
  .then(() => {
    console.log('Connection to the database has been established successfully.');
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });
