import { dateDiff } from '../../helpers';

export const setDateLabel = date => {
  const diff = dateDiff(date);

  if (!diff) {
    return 'Today';
  }

  if (diff === 1) {
    return 'Yesterday';
  }

  return false;
};
