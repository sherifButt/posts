import styled from "styled-components";
const DonutCardChart = () => {
  return (
     <statcard>
      <img src="" />
      <statcard_icon_dollar>
        <img src="" />
      </statcard_icon_dollar>
      <p>Weekly Sales</p>
      <p>$24,500</p>
    </statcard>
  );
};

const  statcard = styled.div`
  height: 88px;
  width: 257px;
  background-color: #ffffff;
`
const  img1 = styled.div`
  height: 88px;
  width: 257px;
  background-color: #ffffff;
`
const  statcard_icon_dollar = styled.div`
  height: 24px;
  width: 24px;
  background-color: #ffffff;
`
const  img2 = styled.div`
  height: 22px;
  width: 12px;
`
const  text3 = styled.div`
  text-align: left;
  vertical-align: top;
  font-size: 10px;
  font-family: Cerebri Sans;
  letter-spacing: 8%;
  line-height: auto;
  color: #94aac8;
`
const  text4 = styled.div`
  text-align: left;
  vertical-align: top;
  font-size: 20px;
  font-family: Cerebri Sans;
  letter-spacing: -2%;
  line-height: auto;
  color: #12263f;
`

export default DonutCardChart;