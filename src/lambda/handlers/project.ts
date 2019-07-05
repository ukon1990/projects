import {APIGatewayEvent, APIGatewayProxyHandler, Context} from 'aws-lambda';
import 'source-map-support/register';

export const getAll: APIGatewayProxyHandler = async (event: APIGatewayEvent, context: Context) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Go Serverless Webpack (Typescript) v1.0! Your function executed successfully!',
      input: event,
    }, null, 2),
  };
};

export const getWithId: APIGatewayProxyHandler = async (event: APIGatewayEvent, context: Context) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Go Serverless Webpack (Typescript) v1.0! Your function executed successfully!',
      input: event,
    }, null, 2),
  };
};

export const create: APIGatewayProxyHandler = async (event: APIGatewayEvent, context: Context) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Go Serverless Webpack (Typescript) v1.0! Your function executed successfully!',
      input: event,
    }, null, 2),
  };
};

export const save: APIGatewayProxyHandler = async (event: APIGatewayEvent, context: Context) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Go Serverless Webpack (Typescript) v1.0! Your function executed successfully!',
      input: event,
    }, null, 2),
  };
};
