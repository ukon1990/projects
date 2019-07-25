import {APIGatewayEvent, APIGatewayProxyHandler, Context} from 'aws-lambda';
import 'source-map-support/register';
import {Response} from '../utils/response.util';
import {TimeEntryRepository} from '../repository/time-entry.repository';

export const getAll: APIGatewayProxyHandler = async (event: APIGatewayEvent, context: Context) => {
  return new Response(
    await new TimeEntryRepository().getAll());
};


export const getWithProjectId: APIGatewayProxyHandler = async (event: APIGatewayEvent, context: Context) => {
  return new Response(
    await new TimeEntryRepository().getAllForProject(+event.pathParameters.id));
};

export const getWithId: APIGatewayProxyHandler = async (event: APIGatewayEvent, context: Context) => {
  return new Response(
    await new TimeEntryRepository().getById(+event.pathParameters.id));
};

export const create: APIGatewayProxyHandler = async (event: APIGatewayEvent, context: Context) => {
  return new Response(
    await new TimeEntryRepository().create(
      JSON.parse(event.body)));
};

export const save: APIGatewayProxyHandler = async (event: APIGatewayEvent, context: Context) => {
  return new Response(
    await new TimeEntryRepository().save(
      JSON.parse(event.body)));
};
