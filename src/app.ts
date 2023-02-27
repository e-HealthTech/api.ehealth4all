import path from 'path';
import express, { NextFunction, Request, Response } from 'express';
import morgan from 'morgan';
import mongoSanitize from 'express-mongo-sanitize';
import hpp from 'hpp';
import compression from 'compression';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import AppError from './utils/AppError';

import rateLimit from 'express-rate-limit';
import globalErrorHandler from './controllers/errorController';

const app = express();

app.use(morgan('dev'));

// view engine setup
// sets view engine to pug can be changed to any other view engine later
app.set('view engine', 'pug');

// sets the path to the views folder (default is views)
app.set('views', path.join(__dirname, 'views'));

// Enable CORS( Cross-Origin Resource Sharing)
app.use(
  cors({
    origin: ['http://localhost:3000', 'toBeReplacedWithProductionUrl'],
    credentials: true,
  })
);

// Limit requests from the same IP
const limiter = {
  windowMs: 60 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: 'Too many requests from this IP, please try again in an hour',
};
app.use(rateLimit(limiter));

// Parses the body of the request into json and limit the size/space of the body
app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: true, limit: '10kb' }));

// Parses the cookie from the request
app.use(cookieParser());

// Data sanitization against NoSQL query injection
app.use(mongoSanitize());

// Prevents parameter pollution by removing duplicate query parameters
// HPP stands for HTTP Parameter Pollution
// Also whitelists some parameters that are allowed to be duplicated
app.use(
  hpp({
    whitelist: [
      // 'ward',
    ],
  })
);

// Compresses the response body
app.use(compression());

//  Routes
app.get('/', (req: Request, res: Response, next: NextFunction) => {
  res.json({
    status: 'success',
    message: 'Welcome to the EHealth API',
    linkToDocumentation: 'ToBeReplacedWithDocumentationUrl',
  });
});

// 404 handler
app.all('*', (req: Request, res: Response, next: NextFunction) => {
  return next(new AppError(`${req.url} does not exist on this server`, 404));
});

// Global error handler
app.use(globalErrorHandler);

export default app;
