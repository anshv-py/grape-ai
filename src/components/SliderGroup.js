import React from 'react';
import InputSlider from './Slider';
import 'src/styles/SliderGroup.css';


const SliderGroup = (props) => {
  const limits = [[15, 0.1], [2, 0.1], [2, 0.01], [66, 0.2], [1, 0.001], [290, 1], [440, 1], [2, 0.002], [14, 0.01], [2, 0.01], [15, 0.1]];
  const count = parseInt(props.count);

  return(
    <div className="SliderGroup">
      <form action="#submit" className='Radio'>
        <label for="wine">Wine: </label>
        <select id="options" name="options">
          <option value="option1">Red Wine</option>
          <option value="option2">White Wine</option>
        </select>
      </form>
      <div>
      {Array.from({ length: 3 }).map((_, idx) => (
        <div className="Slider" key={idx}>
          <label style={{ justifyContent: 'right' }}>
            {props[`slider${idx + 1}`]}
          </label>
          { count === 3 && idx === 2 ? null : <InputSlider min={0} max={limits[idx + count * 3][0]} step={limits[idx + count * 3][1]} count={count} />}
        </div>
      ))}
      </div>
    </div>
  );
};

export default SliderGroup;
