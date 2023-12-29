import React from 'react';
import Cards from './Cards';
import {
  StyledBadgesCard,
  StyledNormalCard,
  StyledDismissCard,
  StyledDismissCardOverlay,
  StyledHorizontalCard,
  Overlay,
  Overlayed,
} from './Cards.Styled';

export default {
  title: 'Cards',
  component: Cards,
};

export const SimpleCard = () => (
  <div>
    <StyledNormalCard>
      <Cards>
        <h2>Eren Yeager</h2>
        <p>
          Eren Yeager was a former member of the Survey Corps. He was the main
          protagonist of Attack on Titan. He lived in Shiganshina District.
        </p>
      </Cards>
    </StyledNormalCard>
  </div>
);

export const BadgeCard = () => (
  <div>
    <StyledBadgesCard>
      <Cards labelText="The Training" unique="badge">
        <img src="https://picsum.photos/300/200/?blur" alt="Badge" />
        <h2>Survey Corps</h2>
        <p>
          In the year 847, Eren, Mikasa Ackerman, and Armin Arlert joined the
          104th Training Corps. The three graduated with Eren ranking 5th best,
          and they joined the Survey Corps following the battle of Trost
          District.
        </p>
      </Cards>
    </StyledBadgesCard>
  </div>
);

export const DismissCard = () => (
  <div>
    <StyledDismissCard>
      <Cards labelText="X" unique="dismiss">
        <img src="https://picsum.photos/300/200/?blur" alt="Badge" />
        <h2>Survey Corps Anime Book</h2>
        <p>Rs. 250</p>
        <button type="button">Checkout</button>
      </Cards>
    </StyledDismissCard>
  </div>
);

export const DismissCardOverlay = () => (
  <div>
    <StyledDismissCardOverlay>
      <Overlay>
        <div>Out Of Stock</div>
        <img src="https://picsum.photos/300/200/?blur" alt="Badge" />
      </Overlay>
      <Cards labelText="X" unique="dismiss">
        <h2>Survey Corps Anime Book</h2>
        <p>Rs. 250</p>
        <button type="button">Out Of Stock</button>
      </Cards>
    </StyledDismissCardOverlay>
  </div>
);

export const HorizontalCard = () => (
  <div>
    <StyledHorizontalCard>
      <Overlayed>
        <img src="https://picsum.photos/300/200/?blur" alt="Badge" />
      </Overlayed>
      <Cards>
        <h2>Founding Titan</h2>
        <p>
          Despite having the ability to control the Titans, no Founding Titan of
          royal blood after the Great Titan War expressed any desire to get rid
          of the Titans outside the Walls, even if the inheritor had expressed
          that desire previously.
        </p>
        <button type="button">Read More</button>
      </Cards>
    </StyledHorizontalCard>
  </div>
);
