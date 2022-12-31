"use strict";
const dailyStats = document.querySelector(".daily");
const weeklyStats = document.querySelector(".weekly");
const monthlyStats = document.querySelector(".monthly");
const currentWork = document.querySelector(".workcurrent");
const previouswork = document.querySelector(".prevwork");
const currentPlay = document.querySelector(".playcurrent");
const previousPLay = document.querySelector(".prevplay");
const currentStudy = document.querySelector(".studycurrent");
const previousStudy = document.querySelector(".prevstudy");
const currentExercise = document.querySelector(".exercisecurrent");
const previousExercise = document.querySelector(".prevexercise");
const currentSocial = document.querySelector(".socialcurrent");
const previousSocial = document.querySelector(".prevsocial");
const currentSelfcare = document.querySelector(".selfcarecurrent");
const previousSelfcare = document.querySelector(".prevselfcare");

const work = {
  timeframes: {
    daily: {
      current: 5,
      previous: 7,
    },
    weekly: {
      current: 32,
      previous: 36,
    },
    monthly: {
      current: 103,
      previous: 128,
    },
  },
};

const play = {
  timeframes: {
    daily: {
      current: 1,
      previous: 2,
    },
    weekly: {
      current: 10,
      previous: 8,
    },
    monthly: {
      current: 23,
      previous: 29,
    },
  },
};

const study = {
  timeframes: {
    daily: {
      current: 0,
      previous: 1,
    },
    weekly: {
      current: 4,
      previous: 7,
    },
    monthly: {
      current: 13,
      previous: 19,
    },
  },
};

const exercise = {
  timeframes: {
    daily: {
      current: 1,
      previous: 1,
    },
    weekly: {
      current: 4,
      previous: 5,
    },
    monthly: {
      current: 11,
      previous: 18,
    },
  },
};

const social = {
  timeframes: {
    daily: {
      current: 1,
      previous: 3,
    },
    weekly: {
      current: 5,
      previous: 10,
    },
    monthly: {
      current: 21,
      previous: 23,
    },
  },
};

const selfCare = {
  timeframes: {
    daily: {
      current: 0,
      previous: 1,
    },
    weekly: {
      current: 2,
      previous: 2,
    },
    monthly: {
      current: 7,
      previous: 11,
    },
  },
};

const hourcount = function (time) {
  if (time > 1) {
    return "hrs";
  } else {
    return "hr";
  }
};
console.log();

dailyStats.addEventListener("click", function (e) {
  e.preventDefault();
  currentWork.textContent = `${work.timeframes.daily.current}${hourcount(
    `${work.timeframes.daily.current}`
  )}`;
  previouswork.textContent = `${work.timeframes.daily.previous}${hourcount(
    `${work.timeframes.daily.previous}`
  )}`;

  currentPlay.textContent = `${play.timeframes.daily.current}${hourcount(
    `${play.timeframes.daily.current}`
  )}`;
  previousPLay.textContent = `${play.timeframes.daily.previous}${hourcount(
    `${play.timeframes.daily.previous}`
  )}`;

  currentStudy.textContent = `${study.timeframes.daily.current}${hourcount(
    `${study.timeframes.daily.current}`
  )}`;
  previousStudy.textContent = `${study.timeframes.daily.previous}${hourcount(
    `${study.timeframes.daily.previous}`
  )}`;

  currentExercise.textContent = `${
    exercise.timeframes.daily.current
  }${hourcount(`${exercise.timeframes.daily.current}`)}`;
  previousExercise.textContent = `${
    exercise.timeframes.daily.previous
  }${hourcount(`${exercise.timeframes.daily.previous}`)}`;

  currentSocial.textContent = `${social.timeframes.daily.current}${hourcount(
    `${social.timeframes.daily.current}`
  )}`;
  previousSocial.textContent = `${social.timeframes.daily.previous}${hourcount(
    `${social.timeframes.daily.previous}`
  )}`;

  currentSelfcare.textContent = `${
    selfCare.timeframes.daily.current
  }${hourcount(`${selfCare.timeframes.daily.current}`)}`;
  previousSelfcare.textContent = `${
    selfCare.timeframes.daily.previous
  }${hourcount(`${selfCare.timeframes.daily.previous}`)}`;
});

weeklyStats.addEventListener("click", function (e) {
  e.preventDefault();
  currentWork.textContent = `${work.timeframes.weekly.current}${hourcount(
    `${work.timeframes.weekly.current}`
  )}`;
  previouswork.textContent = `${work.timeframes.weekly.previous}${hourcount(
    `${work.timeframes.weekly.previous}`
  )}`;

  currentPlay.textContent = `${play.timeframes.weekly.current}${hourcount(
    `${play.timeframes.weekly.current}`
  )}`;
  previousPLay.textContent = `${play.timeframes.weekly.previous}${hourcount(
    `${play.timeframes.weekly.previous}`
  )}`;

  currentStudy.textContent = `${study.timeframes.weekly.current}${hourcount(
    `${study.timeframes.weekly.current}`
  )}`;
  previousStudy.textContent = `${study.timeframes.weekly.previous}${hourcount(
    `${study.timeframes.weekly.previous}`
  )}`;

  currentExercise.textContent = `${
    exercise.timeframes.weekly.current
  }${hourcount(`${exercise.timeframes.weekly.current}`)}`;
  previousExercise.textContent = `${
    exercise.timeframes.weekly.previous
  }${hourcount(`${exercise.timeframes.weekly.previous}`)}`;

  currentSocial.textContent = `${social.timeframes.weekly.current}${hourcount(
    `${social.timeframes.weekly.current}`
  )}`;
  previousSocial.textContent = `${social.timeframes.weekly.previous}${hourcount(
    `${social.timeframes.weekly.previous}`
  )}`;

  currentSelfcare.textContent = `${
    selfCare.timeframes.weekly.current
  }${hourcount(`${selfCare.timeframes.weekly.current}`)}`;
  previousSelfcare.textContent = `${
    selfCare.timeframes.weekly.previous
  }${hourcount(`${selfCare.timeframes.weekly.previous}`)}`;
});

monthlyStats.addEventListener("click", function (e) {
  e.preventDefault();
  currentWork.textContent = `${work.timeframes.monthly.current}${hourcount(
    `${work.timeframes.monthly.current}`
  )}`;
  previouswork.textContent = `${work.timeframes.monthly.previous}${hourcount(
    `${work.timeframes.monthly.previous}`
  )}`;

  currentPlay.textContent = `${play.timeframes.monthly.current}${hourcount(
    `${play.timeframes.monthly.current}`
  )}`;
  previousPLay.textContent = `${play.timeframes.monthly.previous}${hourcount(
    `${play.timeframes.monthly.previous}`
  )}`;

  currentStudy.textContent = `${study.timeframes.monthly.current}${hourcount(
    `${study.timeframes.monthly.current}`
  )}`;
  previousStudy.textContent = `${study.timeframes.monthly.previous}${hourcount(
    `${study.timeframes.monthly.previous}`
  )}`;

  currentExercise.textContent = `${
    exercise.timeframes.monthly.current
  }${hourcount(`${exercise.timeframes.monthly.current}`)}`;
  previousExercise.textContent = `${
    exercise.timeframes.monthly.previous
  }${hourcount(`${exercise.timeframes.monthly.previous}`)}`;

  currentSocial.textContent = `${social.timeframes.monthly.current}${hourcount(
    `${social.timeframes.monthly.current}`
  )}`;
  previousSocial.textContent = `${
    social.timeframes.monthly.previous
  }${hourcount(`${social.timeframes.monthly.previous}`)}`;

  currentSelfcare.textContent = `${
    selfCare.timeframes.monthly.current
  }${hourcount(`${selfCare.timeframes.monthly.current}`)}`;
  previousSelfcare.textContent = `${
    selfCare.timeframes.monthly.previous
  }${hourcount(`${selfCare.timeframes.monthly.previous}`)}`;
});
