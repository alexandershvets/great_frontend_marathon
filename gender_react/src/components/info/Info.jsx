import ErrorMessage from '../errorMessage/ErrorMessage';

import './info.scss';

function Info(props) {
  const { data, error, loaded } = props;

  const classActive = error || loaded ? '_active' : null;
  const errorMessage = error ? <ErrorMessage /> : null;
  const content = loaded && !error ? <View data={data} /> : null;
  
  return (
    <div className={`gender__info info-gender ${classActive}`}>
      {content}
      {errorMessage}
    </div>
  )
}

function View(props) {
  const { name, gender } = props.data;
  
  return (
    <div className="info-gender__body">
      <div className="info-gender__item info-gender__item_name">
        <span>Name:</span><span>{name}</span>
      </div>
      <div className="info-gender__item info-gender__item_gender">
        <span>Gender:</span><span>{gender}</span>
      </div>
    </div>
  )
}

export default Info;