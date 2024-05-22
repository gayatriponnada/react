import { React, useState } from "react";
import styled from "styled-components";
import Modalboxlogout from "./modalboxlogout.js";
import Right from "./right.js";
import Dashboardimage from "./dashboardimage.png";
import { RxDashboard } from "react-icons/rx";
import { LiaFileSolid } from "react-icons/lia";
import { GoDatabase } from "react-icons/go";
import { IoSettingsOutline } from "react-icons/io5";
import { CiLogout } from "react-icons/ci";

const Dashboard = () => {
  const [modalOpen, setModalopen] = useState(false);
  const showModalopen = () => {
    setModalopen(!modalOpen);
  };

  return (
    <Wrapper>
      <Left>
        <Navbarcontainer>
          <Navbarheader>
            <Img src={Dashboardimage} alt="dashboard" />
            <RxDashboard className="icons" />
            <LiaFileSolid className="icons" />
            <GoDatabase className="icons" />
          </Navbarheader>
          <Navbarfooter>
            <IoSettingsOutline className="icons" />
            <CiLogout className="icons" onClick={showModalopen} />
          </Navbarfooter>
        </Navbarcontainer>
      </Left>
      <Right />

      <Modalboxlogout modalOpen={modalOpen} setModalopen={setModalopen} />
    </Wrapper>
  );
};

export default Dashboard;
const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: #f1f1f1;
  display: flex;
  justify-content: space-between;
  overflow: hidden;
`;
const Left = styled.div`
  width: 10%;
  min-width: 60px;
  max-width: 60px;
`;

const Navbarcontainer = styled.div`
  padding: 0.5rem 0;
  height: 100%;
  background: #00215e;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const Navbarheader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  cursor: pointer;

  .icons {
    font-size: 1.5rem;
    color: #fff;
  }
`;
const Img = styled.img`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  cursor: pointer;
`;
const Navbarfooter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  cursor: pointer;

  .icons {
    font-size: 1.5rem;
    color: #fff;
  }
`;
