import appartmentSaga from 'js/modules/Appartment/sagas';

export default function*() {
  yield [appartmentSaga()];
}
