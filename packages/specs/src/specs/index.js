import _ from 'lodash';
import transduce from 'transducers-js';
import jsonpath from 'jsonpath';
import shortid from 'shortid';

import helpers from '../helpers';
import predicates from '../predicates';

import { canConform, canConformFn } from './conform';
import { canExplain, canExplainFn } from './explain';
import { canGenerateDoc } from './doc';
import { canEncode } from './encode';
import { canDecode } from './decode';
import { canValidate } from './valid';

import { canDefineMultiple, canDefine, canDefineByPredicate } from './def';
import { canDefineAnd } from './and';
import { canDefineOr } from './or';

import { canCombine } from './combine';
import { canDefineKeys } from './keys';
import { canDefineCollOf } from './coll-of';
import { canDefineTuple } from './tuple';
import { canDefineCat } from './cat';
import { canDefineFdef } from './fdef';
import { canSpecify, canSpecifyAll } from './specify';
import { canMerge } from './merge';
import { canTransduceSpec } from './transducer';
import { canDefineSchema } from './schema';
import { canUnion } from './union';
import { canSelect } from './select';
import { canSeq } from './seq';

const { compose } = helpers;

const registry = new Map();

const specs = compose(
  canSpecifyAll,
  canSpecify,

  canGenerateDoc,
  canEncode,
  canDecode,

  canSelect,
  canUnion,
  canDefineSchema,
  canSeq,

  canMerge,
  canDefineFdef,
  canDefineCat,
  canDefineTuple,
  canDefineCollOf,

  canDefineKeys,

  canDefineAnd,
  canDefineOr,
  canCombine,

  canDefineMultiple,
  canDefine,
  canDefineByPredicate,

  canValidate,

  canExplain,
  canExplainFn,

  canConform,
  canConformFn,

  canTransduceSpec,
)({
  helpers, registry, predicates, transduce, _, jsonpath, shortid
});

const omits = ['predicates', 'transduce', '_', 'jsonpath', 'shortid', 'helpers'];
export default _.omit(specs, omits);
