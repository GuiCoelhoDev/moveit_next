import styled from "styled-components";

export const Bar = styled.div`
  display: flex; //default flex is row
  align-items: center; // deixou a barra junto

  span {
    font-size: 1rem;
  }

  --margin-size: 0.5rem;

  .left_xp {
    margin-right: var(--margin-size);
  }

  .right_xp {
    margin-left: var(--margin-size);
  }

  div {
    flex: 1; // ocupar a largua maxima do container
    height: 4px;
    border-radius: 4px;
    background: var(--gray-line);
    position: relative; //Dps queremos ccolocar uma div com position absolute dentro dela.

    .div_div {
      background-color: red;
      height: 4px;
      border-radius: 4px;
    }
  }

  .current_experience {
    position: absolute;
    left: 26rem;
  }
`;
