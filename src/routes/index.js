import authRoutes from './authRoutes.js';

export default (app) => {
    app.use('/auth', authRoutes);
};