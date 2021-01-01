import React from 'react';

import { Label } from './utils/label';
import { COLORS } from '../utils/constants';

export const ActiveTaskLabel = ({ state, width }) => (
  <Label color={state === 'active' ? COLORS.green : COLORS.grey} width={width}>{state}</Label>
);