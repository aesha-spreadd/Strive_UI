import React from 'react';
import Input from './Input';
import { StyledInputType, StyledInputComponent } from './Input.Styled';
import Typography from '../Typography/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

export default {
  title: 'Input',
  component: Input,
};

export const Inputs = () => (
  <div>
    <StyledInputType>
      <Typography
        tag="p"
        text="Username*"
        typeColor="textLinkColor"
        style={{ margin: '0 0 0 50px', display: 'block' }}
      />
      <StyledInputComponent>
        <div className="input-container">
          <Input
            type="password"
            id="exampleInput"
            placeholder="Enter Password here"
            prefix={<FontAwesomeIcon icon={faUser} />}
          />
        </div>
      </StyledInputComponent>
    </StyledInputType>
    <StyledInputType>
      <Typography
        tag="p"
        text="Password*"
        typeColor="textLinkColor"
        style={{ margin: '0 0 0 50px', display: 'block' }}
      />
      <StyledInputComponent>
        <div className="input-container">
          <Input
            type="password"
            id="exampleInput"
            placeholder="Enter Password here"
            suffix={<FontAwesomeIcon icon={faUser} />}
          />
        </div>

        <Typography
          tag="p"
          text="Password is incorrect"
          typeColor="primary"
          style={{ margin: '0 0 0 50px', display: 'block' }}
        />
      </StyledInputComponent>
    </StyledInputType>
  </div>
);
