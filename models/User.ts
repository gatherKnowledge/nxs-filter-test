import { objectType, queryType } from "@nexus/schema";
import { extendType, queryField, resolveTypegenConfig, stringArg } from "@nexus/schema/dist/core";

export const User = objectType({
  name: 'User',
  definition(t) {
    t.id('id'),
    t.string('name'),
    t.string('email'),
    t.string('password')
  }
});

export const createUser = queryField('createUser',
{
  type: 'String',
  args: { id: stringArg({ required: true }) },
  resolve(parent: any, args: any, ctx: any) {
    console.log(ctx.logger);
      return '1'
  }
});

export const createUser2 = queryField('createUser2',
{
  type: 'String',
  args: { id: stringArg({ required: true }) },
  resolve(parent: any, args: any, ctx: any) {
    console.log(ctx.logger);
      return '1'
  }
});