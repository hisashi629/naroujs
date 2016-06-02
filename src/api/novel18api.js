import { createHyphonRegexp } from './helpers';
import { schema as baseSchema } from './novelapi';
import Joi from 'joi';

const valid = {
  nocgenre: [
    1,
    2,
    3,
    4,
  ],
};

export const schema = {
  ...baseSchema,
  xid: Joi.string().regex(createHyphonRegexp('[\\d\\w]+')),
  nocgenre: Joi.string().regex(createHyphonRegexp(valid.nocgenre)),
  notnocgenre: Joi.string().regex(createHyphonRegexp(valid.nocgenre)),
};

export default {
  url: 'http://api.syosetu.com/novel18api/api/',
  schema: Joi.object(schema),
};
