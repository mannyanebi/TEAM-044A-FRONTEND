import React from "react";
import "./landing.css";
import { Link } from "react-router-dom";
import Card from "../../assets/images/2561345.jpg";
import Creditcard from "../../assets/images/undraw_Credit_card_re_blml.png";
import image1 from "../../assets/images/undraw_two_factor_authentication_namy.png";
import image2 from "../../assets/images/undraw_secure_server_s9u8.png";

export default function LandingPage() {
  return (
    <section className="container-fluid">
      <div className="container">
        <h4 className="showcaseHeader">Making safe and secure payments</h4>
        <p className="pt-2 showcaseText">
          MoneyGuard provides payment security for business and individual
          across nigeria
        </p>

        <div className="buttons d-flex p-2 bd-highlight ">
          <Link
            to="/login"
            className="btn btn-outline-info my-2 mr-1 my-sm-0 first"
          >
            Get Started
          </Link>
          <Link
            to="/login"
            className="btn btn-outline-info my-2 mr-1 my-sm-0 last"
          >
            Our Services
          </Link>
        </div>
      </div>
      <div className="jumbotron mt-5">
        <div className="solution1">
          <div className="textarea">
            <h5>One result. Fluid. Simple</h5>
            <p>
              our documented infrastructure speeds up payment processes.thereby
              creating a safe and speedy environment for accountable business
              transaction
            </p>
          </div>
          <div className="imageArea">
            <img src={Card} alt="" />
          </div>
        </div>

        <div className="solution2">
          <div className="imageArea">
            <img src={Creditcard} alt="" />
          </div>
          <div className="textarea">
            <h5 className="text-capitalize">
              offering payment guarantee for e-commerce
            </h5>
            <p>
              for quality assurance when transacting online or buying from
              strangers
            </p>
            <ul className="list-group">
              <li className="list-group-item">
                provides a safe enviroment for anti-theft monetary transaction
              </li>
              <li className="list-group-item">
                directing equal transaction between two transacting parties
              </li>
              <li className="list-group-item">
                providing a fully transparent transaction process
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="wrapper container ">
        <div className="box1">
          <img src={image1} alt="" />
          <h5 className="text-capitalize text-center pt-2">
            two factor authorization
          </h5>
          <p className="text-center pt-2">
            funds release are dependent on authorization of both transacting
            parties
          </p>
        </div>
        <div className="box1">
          <img src={image2} alt="" />
          <h5 className="text-capitalize text-center pt-2 ">
            customers and client protection
          </h5>
          <p className="text-center pt-2">
            transacting parties are equally given control in order to receive
            expected value for transaction
          </p>
        </div>
        <div className="box1">
          <img src={image1} alt="" />
          <h5 className="text-capitalize text-center pt-2">transparency</h5>
          <p className="text-center pt-2">
            our transaction processes are transparent too both client and
            customers
          </p>
        </div>
      </div>

      <div className="container jumbotronBoxes">
        <div className="jumbotron shadow p-3 mb-5 bg-white rounded">
          <h6 className="p-2">Create an instant Escrow transaction</h6>
          <p className="p-2">
            you can create an instant escrow service in less than a minute. in a
            secure escrow platform for that transaction{" "}
          </p>
          <Link to="/login" className="jumobotronlink  p-2">
            Get Started
          </Link>
        </div>
        <div className="jumbotron shadow p-3 mb-5 bg-white rounded ">
          <h6 className="p-2">open an instant MoneyGuard account now</h6>
          <p className="p-2">
            you can create an instant escrow service in less than a minute. in a
            secure escrow platform for that transaction{" "}
          </p>
          <Link to="/login" className="jumobotronlink p-2">
            Get Started
          </Link>
        </div>
      </div>
    </section>
  );
}
