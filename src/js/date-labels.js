import { dateDiff } from '../../helpers';

const dateLabels = document.querySelectorAll('.js-date-label');

const setDateLabel = date => {
  switch (dateDiff(date)) {
    case 0:
      return 'Today';
    case 1:
      return 'Yesterday';
    default:
      return false;
  }
};

const setDateLabels = () => {
  dateLabels.forEach(label => {
    const newLabelValue = setDateLabel(label.getAttribute('datetime'));

    if (newLabelValue) {
      label.textContent = newLabelValue;
    }
  });
};

export default setDateLabels;
