import {APIGatewayEvent, APIGatewayProxyHandler, Context} from 'aws-lambda';
import 'source-map-support/register';
import {ProjectRepository} from '../repository/project.repository';
import {Response} from '../utils/response.util';

export const getAll: APIGatewayProxyHandler = async (event: APIGatewayEvent, context: Context) => {
  return new Response(
    await new ProjectRepository().getAll());
};

export const getWithId: APIGatewayProxyHandler = async (event: APIGatewayEvent, context: Context) => {
  return new Response(
    await new ProjectRepository().getById(+event.pathParameters.id));
};

export const create: APIGatewayProxyHandler = async (event: APIGatewayEvent, context: Context) => {
  return new Response(
    await new ProjectRepository().create(
      JSON.parse(event.body)));
};

export const save: APIGatewayProxyHandler = async (event: APIGatewayEvent, context: Context) => {
  return new Response(
    await new ProjectRepository().save(
      JSON.parse(event.body)));
};
