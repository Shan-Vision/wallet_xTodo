import styled from 'styled-components';
import { breakpoints } from 'styleConfig/breakpoints';

export const CurrencyBox = styled.div`
  position: relative;
  background-color: ${p => p.theme.colors.secondary};
  border-radius: ${p => p.theme.radii.large};
  max-width: 280px;
  min-height: 174px;
  margin: 0 auto;
  @media screen and (${breakpoints.tablet}) {
    max-width: 336px;
    min-height: 182px;
    margin: 0;
  }
  @media screen and (${breakpoints.laptop}) {
    max-width: 393px;
    min-height: 347px;
    margin: 0;
  }
`;
export const CurrencyTitle = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  background-color: #ffffff20;
  padding: 10px 20px;
  margin-bottom: 0;
  @media screen and (${breakpoints.laptop}) {
    padding: 16px 60px;
  }
`;
export const CurrencyTitleItem = styled.li`
  text-align: center;
  width: 75px;
  font-family: ${p => p.theme.fonts.primary};
  font-style: normal;
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.l};
  line-height: ${p => p.theme.lineHeights.body};
  color: ${p => p.theme.colors.primary};
`;

export const CurrencyData = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  padding: 12px 20px;
  @media screen and (${breakpoints.tablet}) {
    padding: 16px 20px;
  }

  @media screen and (${breakpoints.laptop}) {
    padding: 20px 60px;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    height: 93px;
    width: 100%;
    background-image: url("data:image/svg+xml,%3Csvg width='280' height='93' viewBox='0 0 280 93' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M22.4 38.5645L0 61.8797V73C0 84.0457 8.95431 93 20 93H250C266.569 93 280 79.5686 280 63V20.1766C278.98 19.5416 277.495 19.3295 276.864 19.2798C271.954 18.8929 269.138 22.5841 265.216 26.0053L265.167 26.0478C264.008 27.06 261.108 29.5923 255.808 29.5923C250.432 29.5923 246.699 27.201 245.504 26.0053L227.584 7.17389C225.195 4.78259 219.968 0 214.144 0C208.32 0 203.691 4.78259 201.6 7.17389L118.72 87.4366C117.376 88.9312 113.254 91.9203 107.52 91.9203C101.786 91.9203 97.664 88.9312 96.32 87.4366L48.384 36.3227C46.7413 34.5292 41.9328 30.9423 35.84 30.9423C29.7472 30.9423 24.3413 36.0238 22.4 38.5645Z' fill='url(%23paint0_linear_7_131)' fill-opacity='0.2'/%3E%3Cdefs%3E%3ClinearGradient id='paint0_linear_7_131' x1='140' y1='-8.06575' x2='140' y2='108.081' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='white'/%3E%3Cstop offset='1' stop-color='white' stop-opacity='0'/%3E%3C/linearGradient%3E%3C/defs%3E%3C/svg%3E%0A");
    background-position: bottom center;
    background-repeat: no-repeat;
    @media screen and (${breakpoints.tablet}) {
      background-image: url("data:image/svg+xml,%3Csvg width='336' height='119' viewBox='0 0 336 119' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M26.88 49.346L0 79.1794V99C0 110.046 8.95431 119 20 119H306C322.569 119 336 105.569 336 89V25.8173C334.776 25.0049 332.993 24.7335 332.237 24.6699C326.345 24.1747 322.966 28.8979 318.259 33.2757L318.201 33.33C316.81 34.6252 313.33 37.8654 306.97 37.8654C300.518 37.8654 296.038 34.8056 294.605 33.2757L273.101 9.17949C270.234 6.11966 263.962 0 256.973 0C249.984 0 244.429 6.11966 241.92 9.17949L142.464 111.881C140.851 113.794 135.905 117.618 129.024 117.618C122.143 117.618 117.197 113.794 115.584 111.881L58.0608 46.4774C56.0896 44.1825 50.3194 39.5928 43.008 39.5928C35.6966 39.5928 29.2096 46.0949 26.88 49.346Z' fill='url(%23paint0_linear_5_2750)' fill-opacity='0.2'/%3E%3Cdefs%3E%3ClinearGradient id='paint0_linear_5_2750' x1='168' y1='-10.3207' x2='168' y2='138.297' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='white'/%3E%3Cstop offset='1' stop-color='white' stop-opacity='0'/%3E%3C/linearGradient%3E%3C/defs%3E%3C/svg%3E%0A");
      height: 119px;
      @media screen and (${breakpoints.laptop}) {
        background-image: url("data:image/svg+xml,%3Csvg width='393' height='134' viewBox='0 0 393 134' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M31.44 47.8127L0 76.719V114C0 125.046 8.9543 134 20 134H363C379.569 134 393 120.569 393 104V25.0151C391.568 24.2279 389.483 23.9649 388.598 23.9033C381.707 23.4236 377.754 28 372.25 32.2417L372.181 32.2944C370.554 33.5494 366.484 36.6888 359.045 36.6888C351.499 36.6888 346.259 33.7241 344.582 32.2417L319.43 8.89426C316.077 5.92951 308.741 0 300.566 0C292.392 0 285.894 5.92951 282.96 8.89426L166.632 108.405C164.746 110.258 158.961 113.964 150.912 113.964C142.863 113.964 137.078 110.258 135.192 108.405L67.9104 45.0332C65.6048 42.8097 58.8557 38.3625 50.304 38.3625C41.7523 38.3625 34.1648 44.6626 31.44 47.8127Z' fill='url(%23paint0_linear_4_436)' fill-opacity='0.2'/%3E%3Cdefs%3E%3ClinearGradient id='paint0_linear_4_436' x1='196.5' y1='-10' x2='196.5' y2='134' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='white'/%3E%3Cstop offset='1' stop-color='white' stop-opacity='0'/%3E%3C/linearGradient%3E%3C/defs%3E%3C/svg%3E%0A");
        height: 134px;
      }
    }
  }
`;

export const CurrencyDataItem = styled.li`
  display: flex;
  justify-content: space-between;
  font-family: ${p => p.theme.fonts.primary};
  font-style: normal;
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: ${p => p.theme.fontSizes.m};
  line-height: ${p => p.theme.lineHeights.body};
  margin-bottom: 12px;
  color: ${p => p.theme.colors.primary};
  @media screen and (${breakpoints.laptop}) {
    margin-bottom: 24px;
  }
  :last-child {
    margin-bottom: 0;
  }
`;

export const CurrencyDataItemText = styled.p`
  display: flex;
  width: 75px;
  justify-content: center;
`;

export const ButtonBox = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  bottom: 10px;
  justify-content: space-between;
  padding: 0 20px;
  @media screen and (${breakpoints.tablet}) {
    padding: 0 20px;
  }

  @media screen and (${breakpoints.laptop}) {
    padding: 0 60px;
  }
`;
export const ButtonCurrency = styled.button`
  position: relative;
  overflow: hidden;
  min-width: 45%;
  min-height: 30px;
  background-color: ${p => `${p.theme.colors.accent}35`};

  font-family: ${p => p.theme.fonts.primary};
  font-style: normal;
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.l};
  line-height: ${p => p.theme.lineHeights.body};
  color: ${p => p.theme.colors.primary};
  border-radius: ${p => p.theme.radii.large};
  box-shadow: 0px 4px 4px 0px #00000040;

  //optional
  &:not(:disabled) {
    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: inherit;
      /* background-color: ${p => p.theme.colors.secondary}; */
      background-color: ${p => p.theme.colors.primary};
      opacity: 0.4;
      transform: translateX(-100%);
      transition: transform 250ms linear;
    }
    @media screen and (${breakpoints.tablet}) {
      &:hover::after,
      &:focus::after {
        transform: translateX(0);
      }
      &:hover,
      &:focus {
        /* box-shadow: 0px 4px 4px 0px #00000040; */
        color: ${p => p.theme.colors.black};
        /* background-color: ${p => p.theme.colors.secondary}; */
      }
    }
  }

  //optional

  &:disabled {
    /* background-color: gray; */
    /* background-color: ${p => p.theme.colors.secondary}; */
    background-color: ${p => p.theme.colors.accent};
    box-shadow: inset 0px 4px 4px 0px #00000040,
      0px 0px 15px 5px ${p => p.theme.colors.accent};
    color: ${p => p.theme.colors.black};

    /* border: ${p => p.theme.borders.normal} ${p => p.theme.colors.border}; */
  }
`;

export const CurrencyWrapper = styled.div`
@media screen and (${breakpoints.tablet}) {
  padding: 40px 0px 0px 0px; 
width: 100%;
}
@media screen and (${breakpoints.laptop}) {
  padding: 0;
}
`