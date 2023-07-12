import React, { useState, useRef, useEffect } from "react";
import "./styles/countdowntimer.css";
import girlimg from "./../../../assets/images/girl.png";
import boyimg from "./../../../assets/images/c1 1.png";

const CountdownTimer = () => {
  const Ref = useRef(null);

  const [timer, setTimer] = useState("00    00    00    00");

  const getTimeRemaining = (e) => {
    const total = Date.parse(e) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / 1000 / 60 / 60) % 24);
    const Days = Math.floor((total / 1000 / 60 / 60 / 24) % 365);
    return {
      total,
      seconds,
      minutes,
      hours,
      Days,
    };
  };

  const startTimer = (e) => {
    let { total, Days, hours, minutes, seconds } = getTimeRemaining(e);
    if (total >= 0) {
      setTimer(
        (seconds > 9 ? seconds : "0" + seconds) +
          " " +
          (minutes > 9 ? minutes : "0" + minutes) +
          " " +
          (hours > 9 ? hours : "0" + hours) +
          " " +
          (Days > 9 ? Days : "0" + Days)
      );
    }
  };

  const clearTimer = (e) => {
    setTimer("00    00    00    00");

    if (Ref.current) clearInterval(Ref.current);
    const id = setInterval(() => {
      startTimer(e);
    }, 1000);
    Ref.current = id;
  };

  const getDeadTime = () => {
    let deadline = new Date();

    deadline.setSeconds(deadline.getSeconds() + 1000000000000);
    return deadline;
  };

  useEffect(() => {
    clearTimer(getDeadTime());
  }, []);

  const onClickReset = () => {
    clearTimer(getDeadTime());
  };

  return (
    <>
      <div className="timer">
	  <div className="img1">
          <div>
            <img src={boyimg} alt="girlimg" className="girlimg" />
          </div>
        </div>
        <div className="midbody">
		<div className="countdown">
          <div>
            <h4>اكبر خصم على الاطلاق</h4>
            <h1>احدث ملابس الاطفال</h1>
            <h2>{timer}</h2>
            <div className="dhms">
              <span>ثانية</span>
              <h3>دقيقة</h3>
              <h3>ساعة</h3>
              <h3>يوم</h3>
            </div>
          </div>
          <div>
            <img src={girlimg} alt="girlimg" className="boyimg" />
          </div>
        </div>

		<div className="btn">
		<button >تسوق الان</button>
		</div>
		</div>
       
      </div>
    </>
  );
};

export default CountdownTimer;
