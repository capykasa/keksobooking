const adForm = document.querySelector('.ad-form');
const mapFilters = document.querySelector('.map__filters');

const inactiveState = () => {
  adForm.classList.add('ad-form--disabled');
  adForm.querySelectorAll('fieldset').forEach((item) => item.setAttribute('disabled', 'disabled'));
  mapFilters.classList.add('ad-form--disabled');
  mapFilters.querySelectorAll('select').forEach((item) => item.setAttribute('disabled', 'disabled'));
};

const activeState = () => {
  adForm.classList.remove('ad-form--disabled');
  adForm.querySelectorAll('fieldset').forEach((item) => item.removeAttribute('disabled', 'disabled'));
  mapFilters.classList.remove('ad-form--disabled');
  mapFilters.querySelectorAll('select').forEach((item) => item.removeAttribute('disabled', 'disabled'));
};

inactiveState();
activeState();
